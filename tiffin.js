// tiffin.js — Tiffin Subscription System

const TIFFIN_PLANS = [
  {
    id: 'basic',
    name: 'Basic Tiffin',
    desc: '2 Roti, Sabzi, Dal, Rice',
    pricePerDay: 80,
    img: 'basic1.png',
    tag: null,
    highlights: ['Simple home-style meal', 'Perfect for light eaters', 'Balanced nutrition'],
  },
  {
    id: 'standard',
    name: 'Standard Tiffin',
    desc: '4 Roti, 2 Sabzi, Dal, Rice + Salad',
    pricePerDay: 120,
    img: 'standard1.jpeg',
    tag: 'MOST POPULAR',
    highlights: ['Full satisfying meal', 'Extra sabzi variety', 'Includes fresh salad'],
  },
  {
    id: 'premium',
    name: 'Premium Tiffin',
    desc: 'Special Dish + Sweet + Full Meal',
    pricePerDay: 180,
    img: 'premium1.jpeg',
    tag: 'BEST VALUE',
    highlights: ['Chef\'s special daily', 'Dessert included', 'Premium ingredients'],
  },
];

const DURATIONS = [
  { days: 7,  label: '1 Week',  discount: 0 },
  { days: 15, label: '15 Days', discount: 5 },
  { days: 30, label: '1 Month', discount: 10 },
];

const MEAL_TIMES = [
  { id: 'lunch',  label: '🌤️ Lunch Only',  multiplier: 1 },
  { id: 'dinner', label: '🌙 Dinner Only', multiplier: 1 },
  { id: 'both',   label: '🍽️ Both Meals',  multiplier: 1.8 },
];

// ── localStorage helpers ──
function getSubscriptions() {
  return JSON.parse(localStorage.getItem('chatora_tiffin_subs') || '[]');
}
function saveSubscriptions(subs) {
  localStorage.setItem('chatora_tiffin_subs', JSON.stringify(subs));
}

// ── Render the plan cards ──
function renderPlanCards() {
  const container = document.getElementById('tiffin-cards-container');
  if (!container) return;

  container.innerHTML = TIFFIN_PLANS.map(plan => {
    const activeSub = getSubscriptions().find(s => s.planId === plan.id && s.status === 'active');
    return `
      <div class="tiffin-card ${plan.tag ? 'featured' : ''}" data-plan="${plan.id}" id="plan-card-${plan.id}">
        ${plan.tag ? `<span class="tiffin-tag">${plan.tag}</span>` : ''}
        <div class="tiffin-card-img">
          <img src="${plan.img}" alt="${plan.name}">
          <div class="img-overlay"></div>
        </div>
        <div class="tiffin-card-body">
          <h3>${plan.name}</h3>
          <p class="tiffin-desc">${plan.desc}</p>
          <div class="tiffin-highlights">
            ${plan.highlights.map(h => `<span class="highlight-chip">✦ ${h}</span>`).join('')}
          </div>
          <div class="tiffin-card-footer">
            <div class="tiffin-price">
              <span class="price-amount">₹${plan.pricePerDay}</span>
              <span class="price-unit">/day</span>
            </div>
            ${activeSub
              ? `<button class="tiffin-btn subscribed-btn" onclick="viewSubscription('${plan.id}')">
                   ✅ Subscribed
                 </button>`
              : `<button class="tiffin-btn subscribe-btn" onclick="openSubscribeModal('${plan.id}')">
                   Subscribe →
                 </button>`
            }
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ── Render active subscriptions section ──
function renderActiveSubscriptions() {
  const section = document.getElementById('active-subs-section');
  const container = document.getElementById('active-subs-container');
  if (!section || !container) return;

  const subs = getSubscriptions().filter(s => s.status === 'active');

  if (subs.length === 0) {
    section.style.display = 'none';
    return;
  }

  section.style.display = 'block';

  container.innerHTML = subs.map(sub => {
    const plan = TIFFIN_PLANS.find(p => p.id === sub.planId);
    const startDate = new Date(sub.startDate);
    const endDate = new Date(sub.endDate);
    const today = new Date();
    const totalDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
    const daysLeft = Math.max(0, Math.ceil((endDate - today) / (1000 * 60 * 60 * 24)));
    const progress = Math.min(100, Math.round(((totalDays - daysLeft) / totalDays) * 100));

    const mealInfo = MEAL_TIMES.find(m => m.id === sub.mealTime);

    return `
      <div class="active-sub-card">
        <div class="sub-card-header">
          <div class="sub-plan-info">
            <h4>${plan ? plan.name : sub.planId}</h4>
            <span class="sub-meal-badge">${mealInfo ? mealInfo.label : sub.mealTime}</span>
          </div>
          <div class="sub-status-badge">Active</div>
        </div>
        <div class="sub-details-grid">
          <div class="sub-detail">
            <span class="sub-detail-label">Start Date</span>
            <span class="sub-detail-value">${startDate.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
          </div>
          <div class="sub-detail">
            <span class="sub-detail-label">End Date</span>
            <span class="sub-detail-value">${endDate.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
          </div>
          <div class="sub-detail">
            <span class="sub-detail-label">Days Left</span>
            <span class="sub-detail-value accent">${daysLeft} days</span>
          </div>
          <div class="sub-detail">
            <span class="sub-detail-label">Total Paid</span>
            <span class="sub-detail-value">₹${sub.totalPaid}</span>
          </div>
        </div>
        <div class="sub-progress-bar">
          <div class="sub-progress-fill" style="width:${progress}%"></div>
        </div>
        <div class="sub-progress-label">${progress}% completed</div>
        <button class="cancel-sub-btn" onclick="cancelSubscription('${sub.id}')">Cancel Subscription</button>
      </div>
    `;
  }).join('');
}

// ── Modal state ──
let selectedPlanId = null;
let selectedDuration = 0;
let selectedMealTime = null;

function openSubscribeModal(planId) {
  selectedPlanId = planId;
  selectedDuration = 0;
  selectedMealTime = null;

  const plan = TIFFIN_PLANS.find(p => p.id === planId);
  if (!plan) return;

  // Set plan info in modal
  document.getElementById('modal-plan-name').textContent = plan.name;
  document.getElementById('modal-plan-desc').textContent = plan.desc;
  document.getElementById('modal-plan-price').textContent = `₹${plan.pricePerDay}/day`;
  document.getElementById('modal-plan-img').src = plan.img;

  // Render duration options
  const durContainer = document.getElementById('modal-duration-options');
  durContainer.innerHTML = DURATIONS.map((d, i) => `
    <button class="dur-option" data-index="${i}" onclick="selectDuration(${i})">
      <span class="dur-label">${d.label}</span>
      <span class="dur-days">${d.days} days</span>
      ${d.discount > 0 ? `<span class="dur-discount">-${d.discount}% OFF</span>` : ''}
    </button>
  `).join('');

  // Render meal time options
  const mealContainer = document.getElementById('modal-meal-options');
  mealContainer.innerHTML = MEAL_TIMES.map(m => `
    <button class="meal-option" data-id="${m.id}" onclick="selectMealTime('${m.id}')">
      ${m.label}
    </button>
  `).join('');

  // Reset summary
  updatePriceSummary();

  // Show modal
  const modal = document.getElementById('subscribe-modal');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeSubscribeModal() {
  const modal = document.getElementById('subscribe-modal');
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

function selectDuration(index) {
  selectedDuration = index;
  document.querySelectorAll('.dur-option').forEach((el, i) => {
    el.classList.toggle('active', i === index);
  });
  updatePriceSummary();
}

function selectMealTime(id) {
  selectedMealTime = id;
  document.querySelectorAll('.meal-option').forEach(el => {
    el.classList.toggle('active', el.dataset.id === id);
  });
  updatePriceSummary();
}

function updatePriceSummary() {
  const summaryEl = document.getElementById('modal-summary');
  const confirmBtn = document.getElementById('modal-confirm-btn');

  if (selectedDuration === null || selectedMealTime === null) {
    summaryEl.innerHTML = `<p class="summary-hint">Select duration & meal time to see pricing</p>`;
    confirmBtn.disabled = true;
    return;
  }

  const plan = TIFFIN_PLANS.find(p => p.id === selectedPlanId);
  const duration = DURATIONS[selectedDuration];
  const meal = MEAL_TIMES.find(m => m.id === selectedMealTime);

  if (!plan || !duration || !meal) {
    confirmBtn.disabled = true;
    return;
  }

  const baseTotal = plan.pricePerDay * duration.days * meal.multiplier;
  const discountAmount = Math.round(baseTotal * (duration.discount / 100));
  const finalTotal = Math.round(baseTotal - discountAmount);

  summaryEl.innerHTML = `
    <div class="summary-row">
      <span>${plan.name} × ${duration.days} days</span>
      <span>₹${Math.round(baseTotal)}</span>
    </div>
    ${meal.multiplier > 1 ? `
      <div class="summary-row muted">
        <span>Both meals (1.8×)</span>
        <span>Included</span>
      </div>
    ` : ''}
    ${discountAmount > 0 ? `
      <div class="summary-row discount">
        <span>Discount (${duration.discount}%)</span>
        <span>-₹${discountAmount}</span>
      </div>
    ` : ''}
    <div class="summary-divider"></div>
    <div class="summary-row total">
      <span>Total</span>
      <span>₹${finalTotal}</span>
    </div>
    <div class="summary-row muted">
      <span>Effective price</span>
      <span>₹${Math.round(finalTotal / duration.days)}/day</span>
    </div>
  `;

  confirmBtn.disabled = false;
}

function confirmSubscription() {
  if (selectedDuration === null || !selectedMealTime) return;

  const plan = TIFFIN_PLANS.find(p => p.id === selectedPlanId);
  const duration = DURATIONS[selectedDuration];
  const meal = MEAL_TIMES.find(m => m.id === selectedMealTime);

  const baseTotal = plan.pricePerDay * duration.days * meal.multiplier;
  const discountAmount = Math.round(baseTotal * (duration.discount / 100));
  const finalTotal = Math.round(baseTotal - discountAmount);

  const startDate = new Date();
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + duration.days);

  const subscription = {
    id: `sub_${Date.now()}`,
    planId: plan.id,
    planName: plan.name,
    mealTime: selectedMealTime,
    durationDays: duration.days,
    durationLabel: duration.label,
    pricePerDay: plan.pricePerDay,
    totalPaid: finalTotal,
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString(),
    status: 'active',
    subscribedAt: new Date().toISOString(),
  };

  const subs = getSubscriptions();
  // Deactivate any existing active sub for same plan
  subs.forEach(s => {
    if (s.planId === plan.id && s.status === 'active') s.status = 'replaced';
  });
  subs.push(subscription);
  saveSubscriptions(subs);

  closeSubscribeModal();
  showSuccessToast(plan.name, duration.label);
  renderPlanCards();
  renderActiveSubscriptions();
}

function cancelSubscription(subId) {
  if (!confirm('Are you sure you want to cancel this subscription?')) return;

  const subs = getSubscriptions();
  const sub = subs.find(s => s.id === subId);
  if (sub) {
    sub.status = 'cancelled';
    saveSubscriptions(subs);
    renderPlanCards();
    renderActiveSubscriptions();
    showCancelToast();
  }
}

function viewSubscription(planId) {
  const section = document.getElementById('active-subs-section');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// ── Toast notifications ──
function showSuccessToast(planName, duration) {
  showToast(`🎉 Subscribed to <strong>${planName}</strong> for ${duration}!`, 'success');
}
function showCancelToast() {
  showToast('❌ Subscription cancelled successfully.', 'cancel');
}

function showToast(message, type) {
  const existing = document.querySelector('.tiffin-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = `tiffin-toast ${type}`;
  toast.innerHTML = message;
  document.body.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add('visible'));

  setTimeout(() => {
    toast.classList.remove('visible');
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

// ── Close modal on overlay click ──
document.addEventListener('click', (e) => {
  if (e.target.id === 'subscribe-modal') {
    closeSubscribeModal();
  }
});

// ── Keyboard escape ──
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeSubscribeModal();
});

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  renderPlanCards();
  renderActiveSubscriptions();
});
