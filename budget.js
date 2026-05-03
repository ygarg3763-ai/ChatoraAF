// budget.js

let currentBudgetLimit = 0;
let previousTotal = 0;

// Comprehensive database is loaded globally via database.js

function filterRestaurants() {
  const budgetInput = document.getElementById('budget').value;
  const container = document.getElementById('restaurants');
  
  if (!budgetInput || isNaN(budgetInput) || budgetInput <= 0) {
    container.innerHTML = `
      <div class="no-results">
        <i class="fas fa-exclamation-circle"></i>
        <p>Please enter a valid budget amount.</p>
      </div>`;
    return;
  }

  const budget = parseInt(budgetInput);
  currentBudgetLimit = budget;
  const filteredItems = foodDatabase.filter(item => item.price <= budget);

  // Sort by price descending, so the best items close to budget show up first
  filteredItems.sort((a, b) => b.price - a.price);

  if (filteredItems.length === 0) {
    container.innerHTML = `
      <div class="no-results">
        <i class="fas fa-search-minus"></i>
        <p>No food items found under ₹${budget}. Try increasing your budget!</p>
      </div>`;
    return;
  }

  container.innerHTML = filteredItems.map(item => `
    <div class="card">
      <div class="card-img">${item.icon}</div>
      <h4>${item.name}</h4>
      <span class="restaurant-label"><i class="fas fa-store"></i> ${item.restaurant}</span>
      <p>${item.desc}</p>
      <p class="price">₹${item.price}</p>
      <div class="card-action-area">
        <button onclick="order('${item.name}')">Add to Cart</button>
      </div>
    </div>
  `).join('');

  // If cart.js is present, immediately update the newly rendered cards to show Zomato style counters if items are already in cart
  if (typeof updateMenuCards === 'function') {
    updateMenuCards();
  }
}

function showBudgetWarning(total) {
  let toast = document.getElementById('budget-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'budget-toast';
    toast.className = 'budget-toast';
    document.body.appendChild(toast);
  }
  
  toast.innerHTML = `<span>⚠️</span> You have exceeded your budget limit of ₹${currentBudgetLimit}! (Total: ₹${total})`;
  
  // Trigger reflow for animation
  void toast.offsetWidth;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

// Allow pressing 'Enter' to search
document.addEventListener('DOMContentLoaded', () => {
  // Hook into the global updateCartUI
  if (typeof window.updateCartUI === 'function') {
    const originalUpdateCartUI = window.updateCartUI;
    window.updateCartUI = function() {
      originalUpdateCartUI();
      
      if (currentBudgetLimit > 0 && typeof cart !== 'undefined') {
        let subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
        let totalWithTax = subtotal + Math.round(subtotal * 0.05);
        
        if (totalWithTax > currentBudgetLimit && totalWithTax > previousTotal) {
          showBudgetWarning(totalWithTax);
        }
        
        // Visual indicator in bottom bar
        const totalEl = document.getElementById('cart-bar-total');
        if (totalEl) {
          if (totalWithTax > currentBudgetLimit) {
            totalEl.style.color = '#ff4d4d';
          } else {
            totalEl.style.color = '#fff';
          }
        }
        
        previousTotal = totalWithTax;
      }
    };
  }

  const input = document.getElementById('budget');
  if (input) {
    input.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        filterRestaurants();
      }
    });
  }
});
