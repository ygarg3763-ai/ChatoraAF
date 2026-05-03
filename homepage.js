const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
 
/* Diet selector */
function showDiet(title, meals, card) {
  document.querySelectorAll('.diet-card').forEach(c => c.classList.remove('active'));
  card.classList.add('active');
  document.getElementById('dietTitle').textContent = title;
  document.getElementById('dietMeals').innerHTML = meals.map(m =>
    `<div class="diet-meal"><div class="meal-dot"></div>${m}</div>`).join('');
  const result = document.getElementById('dietResult');
  result.classList.add('visible');
  setTimeout(() => result.scrollIntoView({ behavior:'smooth', block:'nearest' }), 50);
}
 
/* Budget filter */
const restaurants = [
  { name:'Chai Wala', emoji:'☕', cuisine:'Beverages', avg:30 },
  { name:'Rolls Corner', emoji:'🌯', cuisine:'Street Food', avg:60 },
  { name:'House of Kulcha', emoji:'🥙', cuisine:'North Indian', avg:80 },
  { name:'Healthy Wave', emoji:'🥗', cuisine:'Healthy', avg:120 },
  { name:'Biryani House', emoji:'🍛', cuisine:'Biryani', avg:150 },
  { name:"La Pino'z", emoji:'🍕', cuisine:'Pizza', avg:200 },
];
 
function setBudget(val, btn) {
  document.getElementById('budgetInput').value = val;
  document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  filterBudget();
}
 
function filterBudget() {
  const budget = parseInt(document.getElementById('budgetInput').value) || 0;
  const el = document.getElementById('budgetResults');
  const filtered = restaurants.filter(r => r.avg <= budget);
  if (!budget) { el.classList.remove('show'); return; }
  el.innerHTML = filtered.length
    ? filtered.map(r => `<div class="budget-rest-card"><div class="budget-rest-img">${r.emoji}</div><div class="budget-rest-body"><h4>${r.name}</h4><p>${r.cuisine}</p><span class="budget-avg">Avg ₹${r.avg}</span></div></div>`).join('')
    : `<div style="grid-column:1/-1;text-align:center;color:var(--muted);padding:40px 0;font-size:15px">😕 No restaurants under ₹${budget}. Try a higher budget!</div>`;
  el.classList.add('show');
}
 
/* Copy promo code */
function copyCode(el) {
  navigator.clipboard.writeText('CHATORA50').catch(()=>{});
  el.textContent = '✅ Copied!';
  setTimeout(() => el.textContent = 'CHATORA50', 2000);
}

// chatbot
function toggleChat() {
  document.getElementById("chat-window").classList.toggle("open");
}
 
function quickAsk(text) {
  // Hide chips after first use
  const chips = document.getElementById("chat-chips");
  if (chips) chips.style.display = "none";
 
  document.getElementById("chat-input").value = text;
  sendMessage();
}