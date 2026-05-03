// cart.js

let cart = JSON.parse(localStorage.getItem('chatora_cart')) || [];

function saveCart() {
  localStorage.setItem('chatora_cart', JSON.stringify(cart));
}

// Ensure bottom bar container exists in the DOM
function initCartBar() {
  // Don't show bottom bar on the cart page or group order page
  if (window.location.pathname.endsWith('cart.html') || window.location.pathname.endsWith('grouporder.html')) return;

  let bar = document.getElementById('cart-bottom-bar');
  if (!bar) {
    bar = document.createElement('div');
    bar.id = 'cart-bottom-bar';
    bar.innerHTML = `
      <div class="cart-bar-info">
        <span class="cart-bar-items" id="cart-bar-count">0 items selected</span>
        <span class="cart-bar-total" id="cart-bar-total">₹0</span>
      </div>
      <div class="cart-bar-actions">
        <button class="qty-btn" onclick="clearCart()" style="font-size: 12px; width:auto; padding:0 10px; background:rgba(255,50,50,0.2)">Clear</button>
        <a href="cart.html" class="view-cart-btn">View Cart 🛒</a>
      </div>
    `;
    document.body.appendChild(bar);
  }
  updateCartUI();
}

function updateCartUI() {
  const bar = document.getElementById('cart-bottom-bar');
  
  if (cart.length > 0) {
    if (bar) bar.classList.add('visible');
    document.body.classList.add('has-cart-bar');
  } else {
    if (bar) bar.classList.remove('visible');
    document.body.classList.remove('has-cart-bar');
  }

  // Update navbar count if possible
  const cartNavLinks = document.querySelectorAll('.cart');
  let totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  cartNavLinks.forEach(link => {
    link.innerText = `🛒 Cart (${totalItems})`;
  });

  if (bar) {
    document.getElementById('cart-bar-count').innerText = `${totalItems} item${totalItems !== 1 ? 's' : ''} selected`;
    
    let subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    let totalWithTax = subtotal + Math.round(subtotal * 0.05); // Include tax
    document.getElementById('cart-bar-total').innerText = `₹${totalWithTax}`;
  }

  // If we are on cart.html, render the items
  if (window.location.pathname.endsWith('cart.html')) {
    renderCartPage();
  }

  updateMenuCards();
}

// Global Order Function (overrides any existing ones)
window.order = function(name) {
  // Find the price from DOM if triggered from a menu card
  let price = 0;
  
  // Find the button that was clicked
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    const h4 = card.querySelector('h4');
    if (h4 && h4.innerText.trim() === name) {
      const priceEl = card.querySelector('.price');
      if (priceEl) {
        // Strip everything except numbers
        const priceStr = priceEl.innerText.replace(/[^0-9]/g, '');
        if (priceStr) price = parseInt(priceStr);
      }
    }
  });

  // If price is still 0 (maybe structure is different), provide a fallback
  if (price === 0) price = 100; // default fallback

  addToCart(name, price);
};

function updateMenuCards() {
  if (window.location.pathname.endsWith('grouporder.html')) return;
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    const h4 = card.querySelector('h4');
    if (!h4) return;
    const name = h4.innerText.trim();
    const cartItem = cart.find(item => item.name === name);
    
    let actionEl = card.querySelector('.card-action-area');
    if (!actionEl) {
      const btn = card.querySelector('button');
      if (btn) {
        actionEl = document.createElement('div');
        actionEl.className = 'card-action-area';
        actionEl.style.marginTop = '10px';
        btn.parentNode.insertBefore(actionEl, btn);
        actionEl.appendChild(btn);
      } else {
        return;
      }
    }

    if (cartItem && cartItem.qty > 0) {
      actionEl.innerHTML = `
        <div class="zomato-counter" style="display:flex; align-items:center; justify-content:space-between; background:rgba(255,81,47,0.1); border:1px solid rgba(255,81,47,0.4); border-radius:8px; padding:4px 12px; width: 100%; box-sizing: border-box;">
          <button onclick="decreaseQty('${name}')" style="background:none; border:none; color:#ff512f; font-size:22px; font-weight:bold; cursor:pointer; padding:0; line-height:1;">-</button>
          <span style="font-weight:bold; font-size:16px; color:#fff;">${cartItem.qty}</span>
          <button onclick="increaseQty('${name}')" style="background:none; border:none; color:#ff512f; font-size:20px; font-weight:bold; cursor:pointer; padding:0; line-height:1;">+</button>
        </div>
      `;
    } else {
      actionEl.innerHTML = `<button onclick="order('${name}')" style="width:100%;">Add to Cart</button>`;
    }
  });
}

function addToCart(name, price) {
  const existingItem = cart.find(item => item.name === name);
  if (existingItem) {
    existingItem.qty += 1;
  } else {
    cart.push({ name, price, qty: 1 });
  }
  saveCart();
  updateCartUI();
}

function increaseQty(name) {
  const item = cart.find(item => item.name === name);
  if (item) {
    item.qty += 1;
    saveCart();
    updateCartUI();
  }
}

function decreaseQty(name) {
  const itemIndex = cart.findIndex(item => item.name === name);
  if (itemIndex > -1) {
    if (cart[itemIndex].qty > 1) {
      cart[itemIndex].qty -= 1;
    } else {
      cart.splice(itemIndex, 1);
    }
    saveCart();
    updateCartUI();
  }
}

function removeFromCart(name) {
  cart = cart.filter(item => item.name !== name);
  saveCart();
  updateCartUI();
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartUI();
}

// Render Cart Details Page
function renderCartPage() {
  const container = document.getElementById('cart-items-container');
  const summaryContainer = document.getElementById('cart-summary-container');
  
  if (!container || !summaryContainer) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart-msg">
        <h2>Your cart is empty 😢</h2>
        <a href="restruant.html">← Back to Restaurants</a>
      </div>
    `;
    summaryContainer.style.display = 'none';
    return;
  }

  summaryContainer.style.display = 'block';
  
  // Render Items
  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="item-details">
        <h3>${item.name}</h3>
        <span class="item-price">₹${item.price}</span>
      </div>
      <div class="item-actions">
        <button class="qty-btn" onclick="decreaseQty('${item.name}')">-</button>
        <span class="item-qty">${item.qty}</span>
        <button class="qty-btn" onclick="increaseQty('${item.name}')">+</button>
        <button class="remove-btn" onclick="removeFromCart('${item.name}')">Remove</button>
      </div>
    </div>
  `).join('');

  // Render Summary
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const taxes = Math.round(subtotal * 0.05); // 5% tax
  const total = subtotal + taxes;

  summaryContainer.innerHTML = `
    <div class="summary-row">
      <span>Subtotal</span>
      <span>₹${subtotal}</span>
    </div>
    <div class="summary-row">
      <span>Taxes & Fees (5%)</span>
      <span>₹${taxes}</span>
    </div>
    <div class="summary-row total">
      <span>Total Bill</span>
      <span>₹${total}</span>
    </div>
    <button class="checkout-btn" onclick="alert('Proceeding to Checkout with ₹${total}')">Proceed to Checkout</button>
  `;
}

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.endsWith('cart.html')) {
    renderCartPage();
    updateCartUI();
  } else {
    initCartBar();
  }
});
