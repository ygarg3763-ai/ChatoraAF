# 🍔 ChatoraAF - Chitkara University Premium Food Delivery Platform

ChatoraAF is a comprehensive, feature-rich food delivery and dietary management platform specifically designed for the students of Chitkara University, Patiala. It aims to revolutionize how students order food, manage their diets, and split bills on campus.

## 🌟 Key Features

### 1. 🍽️ Comprehensive Food Database
- **18 Campus Restaurants:** Browse menus from popular spots including La Pino'z, Blue Tokai, Sher E Punjab, House of Kulcha, and more!
- **174+ Curated Items:** A massive, unified database of every available food item on campus.

### 2. 👥 Interactive Group Ordering (Real-time Bill Splitting)
- **Create & Join Rooms:** Users can create a shared room and invite friends via a unique Room ID.
- **Collaborative Cart:** Everyone in the room can browse the unified 174-item database and add items to a shared cart simultaneously.
- **Auto-Split:** The system automatically calculates the exact individual contribution based on the total bill and number of members in the room.

### 3. 🍱 Tiffin Subscription Service
Say goodbye to daily food hunting. Subscribe to a monthly tiffin plan:
- **Basic Tiffin (₹80/day):** 2 Roti, Sabzi, Dal, Rice
- **Standard Tiffin (₹120/day):** 4 Roti, 2 Sabzi, Dal, Rice, Salad
- **Premium Tiffin (₹180/day):** Full Meal, Special Dish, Sweet

### 4. 🥗 Interactive Diet Plans & BMI Calculator
- Users can calculate their Body Mass Index (BMI) instantly.
- The system automatically recommends tailored dietary plans including: *Weight Loss, Weight Gain, Muscle Build, Diabetic Care, and Heart Healthy* diets.

### 5. 💸 Budget Food Finder
On a tight budget? 
- Enter your maximum spending limit (e.g., ₹100).
- The platform dynamically filters the 174-item database to instantly show you all the delicious items you can afford.

### 6. 🤖 ChatoraBot AI Assistant
A built-in, intelligent chatbot powered by **Google Gemini AI**.
- Knows everything about the platform's features, restaurants, and prices.
- **Offline Fallback System:** If the AI API fails, the bot falls back to an offline heuristic search engine, allowing users to dynamically search the food database via chat! (e.g., "Do you have pizza?").

## 🛠️ Technology Stack
- **Frontend:** Vanilla HTML5, CSS3 (Glassmorphism & Premium Dark Mode UI), JavaScript (ES6+).
- **State Management:** `localStorage` for cross-tab synchronization (simulating a real-time database for Group Orders).
- **AI Integration:** Google Gemini Generative AI REST API (`gemini-flash-latest`).
- **Icons & Typography:** FontAwesome & Google Fonts (Inter/Outfit).

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/ChatoraAF.git
   ```
2. **Open the platform:**
   Simply open `welcome.html` or `homepage.html` in your favorite modern browser (Chrome, Edge, Firefox, Safari). No backend installation required!
3. **Configure ChatoraBot (Optional):**
   To enable full AI conversations, generate a free API key from Google AI Studio and paste it into `chatbot.js`.

---
*Built with ❤️ for Chitkara University Students.*
