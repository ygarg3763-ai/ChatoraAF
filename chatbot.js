
const GEMINI_API_KEY = process.env.API_KEY; 

const MODEL = "gemini-flash-latest";

// ---- System prompt (tells Gemini who it is & what to answer) ----
const SYSTEM_INSTRUCTION = `You are ChatoraBot, a friendly AI assistant for ChatoraAF — a premium food delivery website for Chitkara University, Patiala.

You ONLY answer questions related to:
- Food ordering, menus, and recommendations
- Tiffin subscription plans:
    • Basic Tiffin — 2 Roti, Sabzi, Dal, Rice → ₹80/day
    • Standard Tiffin — 4 Roti, 2 Sabzi, Dal, Rice, Salad → ₹120/day
    • Premium Tiffin — Full Meal, Special Dish, Sweet → ₹180/day
- Diet plans available: Interactive BMI Calculator that recommends personalized meal plans for Weight Gain, Weight Loss, Muscle Build, Diabetic, and Heart Healthy.
- Budget Food Finder: Users can enter their budget and instantly find items from our database under that price.
- Interactive Group Ordering: Create/join a room via a Room ID. All users can add items from any restaurant simultaneously to a shared cart, and the system automatically calculates equal bill splits in real-time.
- Restaurants: We have a massive database of 174+ items across 18 restaurants, including La Pino'z, Blue Tokai, Sher E Punjab, The Healthy Wave, and more!
- Payment, cart, and checkout questions

If someone asks ANYTHING not related to food, restaurants, delivery, diet, or this app — reply:
"I'm ChatoraBot and I can only help with food and delivery questions! 🍔 Try asking me about our menu, tiffin plans, or delivery times."

Always be friendly, helpful, and use 1-2 emojis per reply. Keep answers concise and clear.`;

// ---- Conversation history (enables multi-turn memory) ----
let conversationHistory = [];

// ---- Main send function ----
async function sendMessage() {
  const input = document.getElementById("chat-input");
  const message = input.value.trim();
  if (!message) return;

  // Show user message
  appendMessage("user", message);
  input.value = "";
  setInputEnabled(false);
  showTyping(true);

  // Add to history
  conversationHistory.push({
    role: "user",
    parts: [{ text: message }]
  });

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          // ✅ Correct format: systemInstruction is camelCase
          systemInstruction: {
            parts: [{ text: SYSTEM_INSTRUCTION }]
          },
          // ✅ Full conversation history for memory
          contents: conversationHistory,
          // ✅ Safety & generation settings
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 400
          }
        })
      }
    );

    // ✅ Check for HTTP errors (bad API key, quota exceeded, etc.)
    if (!response.ok) {
      const errData = await response.json();
      const errMsg = errData?.error?.message || `HTTP ${response.status}`;
      throw new Error(errMsg);
    }

    const data = await response.json();

    // ✅ Safely extract reply
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!reply) throw new Error("Empty response from Gemini");

    // Save bot reply to history
    conversationHistory.push({
      role: "model",
      parts: [{ text: reply }]
    });

    showTyping(false);
    appendMessage("bot", reply);

  } catch (error) {
    showTyping(false);

    // Fallback to offline heuristic bot if API fails
    const reply = localFallback(message);
    
    conversationHistory.push({
      role: "model",
      parts: [{ text: reply }]
    });

    appendMessage("bot", reply);
    console.error("ChatoraBot API Error (using offline fallback):", error.message);
  } finally {
    setInputEnabled(true);
    document.getElementById("chat-input").focus();
  }
}

// ---- UI Helper Functions ----
function appendMessage(sender, text) {
  const box = document.getElementById("chat-messages");
  const div = document.createElement("div");
  div.className = `chat-msg ${sender}`;
  // Convert **bold** markdown and newlines for readability
  const formatted = text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\n/g, "<br>");
  div.innerHTML = formatted;
  box.appendChild(div);
  box.scrollTop = box.scrollHeight;
}

function showTyping(show) {
  document.getElementById("typing-indicator").style.display = show ? "flex" : "none";
}

function setInputEnabled(enabled) {
  document.getElementById("chat-input").disabled = !enabled;
  document.getElementById("chat-send-btn").disabled = !enabled;
}

// ---- Clear chat history ----
function clearChat() {
  conversationHistory = [];
  const box = document.getElementById("chat-messages");
  box.innerHTML = `
    <div class="chat-msg bot">
      Hi! I'm ChatoraBot 🍔 Ask me anything about our food, delivery, tiffin plans, diet, or restaurants!
    </div>`;
}

// ---- Enter key to send ----
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("chat-input");
  if (input) {
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });
  }
});

// ---- Robust Offline Fallback Logic ----
function localFallback(message) {
  const lower = message.toLowerCase();
  
  // 1. Check for specific features
  if (lower.includes("tiffin") || lower.includes("subscribe")) {
    return "🍱 We have 3 amazing Tiffin plans: Basic (₹80/day), Standard (₹120/day), and Premium (₹180/day). You can subscribe directly from the Tiffin page!";
  }
  if (lower.includes("group") || lower.includes("split") || lower.includes("room")) {
    return "👥 Our Group Ordering system is awesome! You can create a room, invite friends via a Room ID, add items from our 18 restaurants to a shared cart, and the bill splits automatically in real-time!";
  }
  if (lower.includes("budget") || lower.includes("cheap") || lower.includes("price") && !lower.includes("how much")) {
    return "💸 On a tight budget? Head over to our Budget page! Just enter how much you want to spend, and we'll show you all the delicious items under that limit from our 174+ database.";
  }
  if (lower.includes("diet") || lower.includes("bmi") || lower.includes("weight") || lower.includes("healthy")) {
    return "🥗 Looking to stay healthy? Our Diet Plans page features an interactive BMI calculator that recommends tailored meals for Weight Loss, Muscle Build, Diabetic care, and more!";
  }

  // 2. Dynamic Database Search
  if (typeof foodDatabase !== 'undefined') {
    // Search for matching restaurants or food items
    let matches = foodDatabase.filter(item => 
      lower.includes(item.name.toLowerCase()) || 
      lower.includes(item.restaurant.toLowerCase()) ||
      (lower.includes("pizza") && item.name.toLowerCase().includes("pizza")) ||
      (lower.includes("burger") && item.name.toLowerCase().includes("burger")) ||
      (lower.includes("coffee") && item.name.toLowerCase().includes("coffee")) ||
      (lower.includes("momo") && item.name.toLowerCase().includes("momo"))
    );

    if (matches.length > 0) {
      // Pick top 3 matches
      let topMatches = matches.slice(0, 3);
      let response = `🍽️ Here is what I found for you:\n`;
      topMatches.forEach(m => {
        response += `• **${m.name}** from ${m.restaurant} (₹${m.price})\n`;
      });
      if (matches.length > 3) {
        response += `\nAnd ${matches.length - 3} more options! Check the Restaurants page for the full list.`;
      }
      return response;
    }
  }

  // 3. General Greetings & Fallback
  if (lower.includes("hi") || lower.includes("hello") || lower.includes("hey")) {
    return "👋 Hello! I am ChatoraBot. You can ask me about our Tiffins, Budget Finder, Group Orders, Diet Plans, or search for any food item!";
  }
  
  return "I'm ChatoraBot! My advanced AI is currently offline (invalid API key), but I can still tell you about our Tiffin plans, Group Orders, Diet Plans, or search for specific food items! Try asking 'Do you have pizza?' 🍔";
}
