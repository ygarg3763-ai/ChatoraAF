// grouporder.js
// Handles Group Ordering System with LocalStorage Sync for multi-tab "multiplayer" simulation

// State
let currentRoomId = localStorage.getItem('chatora_current_room') || null;
let currentUser = localStorage.getItem('chatora_current_user') || null;

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  renderRoom();
});

// Listen for storage events (when other tabs modify localStorage)
window.addEventListener('storage', (e) => {
  if (e.key === 'chatora_rooms') {
    // If we are in a room and the room data changed, re-render
    if (currentRoomId) {
      const rooms = getRooms();
      if (!rooms[currentRoomId]) {
        // Room was deleted
        leaveRoom(false);
        showToast('This room has been closed.', 'cancel');
      } else {
        renderRoom();
      }
    }
  }
});

// --- FOOD DATABASE IS NOW LOADED GLOBALLY FROM database.js ---

// --- HELPER FUNCTIONS ---

function getRooms() {
  const rooms = localStorage.getItem('chatora_rooms');
  return rooms ? JSON.parse(rooms) : {};
}

function saveRooms(rooms) {
  localStorage.setItem('chatora_rooms', JSON.stringify(rooms));
}

function generateRoomId() {
  return 'CHAT-' + Math.floor(1000 + Math.random() * 9000);
}

// --- ACTIONS ---

function createRoom() {
  const nameInput = document.getElementById('create-name').value.trim();

  if (!nameInput) {
    showToast('Please enter your name to create a room.', 'cancel');
    return;
  }

  const roomId = generateRoomId();
  const rooms = getRooms();

  rooms[roomId] = {
    members: [nameInput],
    cart: []
  };

  saveRooms(rooms);
  
  // Set current user session
  currentRoomId = roomId;
  currentUser = nameInput;
  localStorage.setItem('chatora_current_room', roomId);
  localStorage.setItem('chatora_current_user', currentUser);

  renderRoom();
}

function joinRoom() {
  const nameInput = document.getElementById('join-name').value.trim();
  const roomIdInput = document.getElementById('join-room-id').value.trim().toUpperCase();

  if (!nameInput || !roomIdInput) {
    showToast('Please enter your name and a Room ID.', 'cancel');
    return;
  }

  const rooms = getRooms();

  if (!rooms[roomIdInput]) {
    showToast('Room not found! Please check the ID.', 'cancel');
    return;
  }

  // Add user to room if not already in it
  if (!rooms[roomIdInput].members.includes(nameInput)) {
    rooms[roomIdInput].members.push(nameInput);
    saveRooms(rooms);
  }

  // Set current user session
  currentRoomId = roomIdInput;
  currentUser = nameInput;
  localStorage.setItem('chatora_current_room', roomIdInput);
  localStorage.setItem('chatora_current_user', currentUser);

  renderRoom();
}

function leaveRoom(manual = true) {
  if (currentRoomId && currentUser) {
    const rooms = getRooms();
    if (rooms[currentRoomId]) {
      // Remove user from members
      rooms[currentRoomId].members = rooms[currentRoomId].members.filter(m => m !== currentUser);
      
      // If room is empty, delete it
      if (rooms[currentRoomId].members.length === 0) {
        delete rooms[currentRoomId];
      }
      
      saveRooms(rooms);
    }
  }

  currentRoomId = null;
  currentUser = null;
  localStorage.removeItem('chatora_current_room');
  localStorage.removeItem('chatora_current_user');

  if (manual) {
    renderRoom();
  }
}

function addFoodToRoom(itemName, price) {
  if (!currentRoomId || !currentUser) return;

  const rooms = getRooms();
  if (rooms[currentRoomId]) {
    rooms[currentRoomId].cart.push({
      name: itemName,
      price: price,
      addedBy: currentUser,
      id: Date.now() // unique ID for removal
    });
    saveRooms(rooms);
    renderRoom();
  }
}

function removeFoodFromRoom(itemId) {
  if (!currentRoomId || !currentUser) return;

  const rooms = getRooms();
  if (rooms[currentRoomId]) {
    rooms[currentRoomId].cart = rooms[currentRoomId].cart.filter(item => item.id !== itemId);
    saveRooms(rooms);
    renderRoom();
  }
}

function placeGroupOrder() {
  const rooms = getRooms();
  const room = rooms[currentRoomId];
  if (!room || room.cart.length === 0) {
    showToast('Add some items to the cart first!', 'cancel');
    return;
  }
  
  showToast('Group Order Placed successfully! Generating Split Bills...', 'success');
  // In a real app, this would send data to the backend.
  // For now, we clear the cart.
  room.cart = [];
  saveRooms(rooms);
  renderRoom();
}

// --- UI HELPERS ---
function showToast(message, type = 'success') {
  const existing = document.querySelector('.group-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = `tiffin-toast group-toast ${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);

  // Force reflow
  void toast.offsetWidth;
  toast.classList.add('visible');

  setTimeout(() => {
    toast.classList.remove('visible');
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

// --- RENDERING ---

function renderRoom() {
  const lobbyView = document.getElementById('lobby-view');
  const roomView = document.getElementById('room-view');

  if (!currentRoomId) {
    // Show Lobby
    lobbyView.style.display = 'flex';
    roomView.style.display = 'none';
    return;
  }

  const rooms = getRooms();
  const room = rooms[currentRoomId];

  if (!room) {
    // Room somehow doesn't exist
    leaveRoom(true);
    return;
  }

  // Show Room View
  lobbyView.style.display = 'none';
  roomView.style.display = 'block';

  // Update Header
  document.getElementById('room-title').innerHTML = `Room ID: <span class="highlight">${currentRoomId}</span>`;

  // Render the Dynamic Menu
  renderMenu();

  // Update Members
  const membersList = document.getElementById('members-list');
  membersList.innerHTML = '';
  room.members.forEach(member => {
    const li = document.createElement('li');
    li.className = 'member-item';
    
    // Create Avatar
    const avatar = document.createElement('div');
    avatar.className = 'member-avatar';
    avatar.textContent = member.charAt(0).toUpperCase();

    // Create Text
    const text = document.createElement('span');
    text.textContent = member + (member === currentUser ? ' (You)' : '');

    li.appendChild(avatar);
    li.appendChild(text);
    membersList.appendChild(li);
  });

  // Update Cart
  const cartContainer = document.getElementById('group-cart-items');
  cartContainer.innerHTML = '';
  let total = 0;

  if (room.cart.length === 0) {
    cartContainer.innerHTML = '<div class="empty-cart">Cart is empty. Add some food!</div>';
  } else {
    room.cart.forEach(item => {
      total += item.price;

      const div = document.createElement('div');
      div.className = 'cart-item';
      
      const info = document.createElement('div');
      info.className = 'cart-item-info';
      
      const name = document.createElement('span');
      name.textContent = item.name;
      
      const user = document.createElement('div');
      user.className = 'cart-item-user';
      user.textContent = `Added by ${item.addedBy}`;

      info.appendChild(name);
      info.appendChild(user);

      const right = document.createElement('div');
      right.style.display = 'flex';
      right.style.alignItems = 'center';
      right.style.gap = '12px';

      const price = document.createElement('span');
      price.style.fontWeight = 'bold';
      price.textContent = `₹${item.price}`;

      right.appendChild(price);

      // Only allow user to remove their own items (or anyone for simplicity, let's say anyone)
      const removeBtn = document.createElement('button');
      removeBtn.className = 'btn-outline';
      removeBtn.style.padding = '4px 8px';
      removeBtn.style.fontSize = '12px';
      removeBtn.textContent = '✕';
      removeBtn.onclick = () => removeFoodFromRoom(item.id);

      right.appendChild(removeBtn);

      div.appendChild(info);
      div.appendChild(right);
      cartContainer.appendChild(div);
    });
  }

  // Calculate Split
  const memberCount = room.members.length;
  const splitAmount = memberCount > 0 ? (total / memberCount).toFixed(2) : 0;

  document.getElementById('group-total').textContent = `₹${total}`;
  document.getElementById('group-members-count').textContent = memberCount;
  document.getElementById('group-split-amount').textContent = `₹${splitAmount}`;
}

function renderMenu() {
  const filter = document.getElementById('restaurant-filter').value;
  const menuContainer = document.getElementById('dynamic-menu');
  if (!menuContainer) return;

  let filteredFood = foodDatabase;
  if (filter !== "All") {
    filteredFood = foodDatabase.filter(item => item.restaurant === filter);
  }

  menuContainer.innerHTML = '';

  if (filteredFood.length === 0) {
    menuContainer.innerHTML = `<div class="empty-cart">No items found for this restaurant.</div>`;
    return;
  }

  filteredFood.forEach(item => {
    const div = document.createElement('div');
    div.className = 'menu-item';
    
    div.innerHTML = `
      <div>
        <h4>${item.icon} ${item.name}</h4>
        <p style="margin-top: 2px;">₹${item.price} • <span style="font-size: 11px; opacity: 0.8;">${item.restaurant}</span></p>
      </div>
      <button class="btn-primary small-btn" onclick="addFoodToRoom('${item.name.replace(/'/g, "\\'")}', ${item.price})">+ Add</button>
    `;
    
    menuContainer.appendChild(div);
  });
}
