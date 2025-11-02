// Menu Data - Added properties for filtering. This array is mutable for mock Admin functions.
let menuData = [
    // North Indian
    { id: 1, name: "Butter Chicken", description: "Tender chicken in a creamy tomato sauce", price: 250, category: "north", image: "https://source.unsplash.com/300x200/?butter-chicken", isVeg: false, isVegan: false, isSpicy: false }, 
    { id: 2, name: "Rogan Josh", description: "Aromatic lamb curry from Kashmir", price: 400, category: "north", image: "https://source.unsplash.com/300x200/?rogan-josh", isVeg: false, isVegan: false, isSpicy: true },
    { id: 3, name: "Dal Makhani", description: "Creamy black lentils slow-cooked to perfection", price: 250, category: "north", image: "https://source.unsplash.com/300x200/?dal-makhani", isVeg: true, isVegan: false, isSpicy: false },
    { id: 4, name: "Paneer Tikka", description: "Marinated cottage cheese grilled to perfection", price: 280, category: "north", image: "https://source.unsplash.com/300x200/?paneer-tikka", isVeg: true, isVegan: false, isSpicy: false },
    { id: 5, name: "Aloo Paratha", description: "Whole wheat bread stuffed with spiced potatoes", price: 120, category: "north", image: "https://source.unsplash.com/300x200/?aloo-paratha", isVeg: true, isVegan: true, isSpicy: false },
    { id: 6, name: "Chole Bhature", description: "Spicy chickpeas with fried bread", price: 180, category: "north", image: "https://source.unsplash.com/300x200/?chole-bhature", isVeg: true, isVegan: true, isSpicy: true },
    
    // South Indian
    { id: 7, name: "Masala Dosa", description: "Crispy rice crepe with potato filling", price: 150, category: "south", image: "https://source.unsplash.com/300x200/?masala-dosa", isVeg: true, isVegan: true, isSpicy: false },
    { id: 8, name: "Idli Sambar", description: "Steamed rice cakes with lentil stew", price: 100, category: "south", image: "https://source.unsplash.com/300x200/?idli-sambar", isVeg: true, isVegan: true, isSpicy: false },
    { id: 9, name: "Vada", description: "Savory fried lentil donuts", price: 80, category: "south", image: "https://source.unsplash.com/300x200/?vada", isVeg: true, isVegan: true, isSpicy: false },
    { id: 10, name: "Hyderabadi Biryani", description: "Fragrant rice with meat and spices", price: 320, category: "south", image: "https://source.unsplash.com/300x200/?biryani", isVeg: false, isVegan: false, isSpicy: true },
    { id: 11, name: "Fish Curry", description: "Spicy coconut-based fish curry", price: 380, category: "south", image: "https://source.unsplash.com/300x200/?fish-curry", isVeg: false, isVegan: false, isSpicy: true },
    
    // Street Food
    { id: 12, name: "Pani Puri", description: "Crisp puris filled with spicy water", price: 60, category: "street", image: "https://source.unsplash.com/300x200/?pani-puri", isVeg: true, isVegan: true, isSpicy: true },
    { id: 13, name: "Vada Pav", description: "Spicy potato fritter in a bun", price: 50, category: "street", image: "https://source.unsplash.com/300x200/?vada-pav", isVeg: true, isVegan: true, isSpicy: false },
    { id: 14, name: "Bhel Puri", description: "Puffed rice with chutneys and veggies", price: 70, category: "street", image: "https://source.unsplash.com/300x200/?bhel-puri", isVeg: true, isVegan: true, isSpicy: false },
    { id: 15, name: "Dahi Puri", description: "Puris filled with yogurt and chutneys", price: 80, category: "street", image: "https://source.unsplash.com/300x200/?dahi-puri", isVeg: true, isVegan: false, isSpicy: false },
    
    // Sweets
    { id: 16, name: "Gulab Jamun", description: "Deep-fried milk balls in sugar syrup", price: 120, category: "sweets", image: "https://source.unsplash.com/300x200/?gulab-jamun", isVeg: true, isVegan: false, isSpicy: false },
    { id: 17, name: "Rasgulla", description: "Soft cottage cheese balls in light syrup", price: 100, category: "sweets", image: "https://source.unsplash.com/300x200/?rasgulla", isVeg: true, isVegan: false, isSpicy: false },
    { id: 18, name: "Jalebi", description: "Crispy swirls soaked in syrup", price: 90, category: "sweets", image: "https://source.unsplash.com/300x200/?jalebi", isVeg: true, isVegan: true, isSpicy: false },
    { id: 19, name: "Kheer", description: "Rice pudding with nuts and cardamom", price: 110, category: "sweets", image: "https://source.unsplash.com/300x200/?kheer", isVeg: true, isVegan: false, isSpicy: false },
    
    // Beverages
    { id: 20, name: "Masala Chai", description: "Spiced Indian tea", price: 50, category: "beverages", image: "https://source.unsplash.com/300x200/?masala-chai", isVeg: true, isVegan: false, isSpicy: false },
    { id: 21, name: "Lassi", description: "Yogurt-based drink (sweet or salty)", price: 70, category: "beverages", image: "https://source.unsplash.com/300x200/?lassi", isVeg: true, isVegan: false, isSpicy: false },
    { id: 22, name: "Nimbu Pani", description: "Refreshing lemonade with spices", price: 60, category: "beverages", image: "https://source.unsplash.com/300x200/?nimbu-pani", isVeg: true, isVegan: true, isSpicy: false },

    // Indo-Chinese
    { id: 23, name: "Veg Fried Rice", description: "Fragrant rice stir-fried with vegetables", price: 180, category: "chinese", image: "https://source.unsplash.com/300x200/?fried-rice", isVeg: true, isVegan: true, isSpicy: false },
    { id: 24, name: "Chicken Manchurian", description: "Crispy chicken tossed in tangy sauce", price: 250, category: "chinese", image: "https://source.unsplash.com/300x200/?chicken-manchurian", isVeg: false, isVegan: false, isSpicy: true },
    { id: 25, name: "Hakka Noodles", description: "Stir-fried noodles with vegetables and soy sauce", price: 200, category: "chinese", image: "https://source.unsplash.com/300x200/?hakka-noodles", isVeg: true, isVegan: true, isSpicy: false },
    { id: 26, name: "Chilli Paneer", description: "Paneer cubes tossed in spicy Indo-Chinese sauce", price: 230, category: "chinese", image: "https://source.unsplash.com/300x200/?chilli-paneer", isVeg: true, isVegan: false, isSpicy: true },
    { id: 27, name: "Spring Rolls", description: "Crispy rolls stuffed with veggies and noodles", price: 150, category: "chinese", image: "https://source.unsplash.com/300x200/?spring-rolls", isVeg: true, isVegan: true, isSpicy: false }
];

// Global State Variables
const CART_STORAGE_KEY = 'foodzito_cart_v1';
let cart = [];
let pendingOrders = []; // Mock array to hold pending orders

// --- DOM Elements ---
const menuItemsContainer = document.getElementById('menu-items');
const orderItemsContainer = document.getElementById('order-items');
const orderTotalElement = document.getElementById('order-total');
const checkoutForm = document.getElementById('checkout-form');
const confirmationSection = document.getElementById('order-confirmation');
const confirmationDetails = document.getElementById('confirmation-details');
const newOrderBtn = document.getElementById('new-order-btn');
const categoryButtons = document.querySelectorAll('.category-btn');
const orderSection = document.getElementById('order');

const authModal = document.getElementById('authModal');
const loginView = document.getElementById('loginView');
const registerView = document.getElementById('registerView');

const cartModal = document.getElementById('cartModal');
const cartListEl = document.getElementById('cart-list');
const cartModalTotalEl = document.getElementById('cart-modal-total');

const miniCartWidget = document.getElementById('mini-cart-widget');
const miniCartCountEl = document.getElementById('mini-cart-count');
const miniCartTotalEl = document.getElementById('mini-cart-total');

// Admin Panel Elements
const adminPanel = document.getElementById('admin-panel'); 
const mainContent = document.getElementById('main-content'); 
const mainNav = document.getElementById('main-nav'); 
const mainHeader = document.getElementById('main-header'); 

// --- FILTER STATE ---
let currentCategory = 'all';
const searchInput = document.getElementById('menu-search');
let activeDietaryFilters = {
    veg: false,
    vegan: false,
    spicy: false,
};
const dietaryFilterButtons = document.querySelectorAll('.dietary-filters button');

// Initialization when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    loadCartFromStorage();
    displayMenuItems('all');
    setupEventListeners();
    updateOrderSummary();
    renderCartModal();
    renderMiniCartWidget();
});

// ===============================================
// ADMIN PANEL FUNCTIONS
// ===============================================

function showAdminPanel() {
    if (mainContent) mainContent.classList.add('hidden');
    if (mainNav) mainNav.classList.add('hidden');
    if (mainHeader) mainHeader.classList.add('hidden');
    if (adminPanel) adminPanel.classList.remove('hidden');
    adminPanel.scrollIntoView({ behavior: 'smooth' });
    renderAdminPanel();
}

function hideAdminPanel() {
    if (mainContent) mainContent.classList.remove('hidden');
    if (mainNav) mainNav.classList.remove('hidden');
    if (mainHeader) mainHeader.classList.remove('hidden');
    if (adminPanel) adminPanel.classList.add('hidden');
    window.scrollTo(0, 0);
}

function renderAdminPanel() {
    renderMenuManagement();
    renderPendingOrders();
}

function renderMenuManagement() {
    const listEl = document.getElementById('menu-management-list');
    if (!listEl) return;
    listEl.innerHTML = '';

    menuData.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.className = 'admin-item';
        itemEl.innerHTML = `
            <span><strong>${item.name}</strong> (₹${item.price}) - ${item.category}</span>
            <div class="admin-actions">
                <button class="btn" style="background: #e67e22;" onclick="editFood(${item.id})">Edit</button>
                <button class="btn" style="background: #e74c3c;" onclick="deleteFood(${item.id})">Delete</button>
            </div>
        `;
        listEl.appendChild(itemEl);
    });
}

function addFoodMock() {
    const name = document.getElementById('new-food-name').value.trim();
    const desc = document.getElementById('new-food-desc').value.trim();
    const price = parseFloat(document.getElementById('new-food-price').value);
    const category = document.getElementById('new-food-category').value;

    if (!name || !desc || isNaN(price) || price <= 0 || !category) {
        alert("Please fill in valid data for the new menu item.");
        return;
    }

    const newId = menuData.length > 0 ? Math.max(...menuData.map(i => i.id)) + 1 : 1;
    
    const newItem = {
        id: newId,
        name,
        description: desc,
        price,
        category,
        image: `https://source.unsplash.com/300x200/?${category}-${name.replace(/\s/g, '-')}`,
        isVeg: true, 
        isVegan: false,
        isSpicy: false
    };
    
    menuData.push(newItem);
    document.getElementById('add-food-form').reset();
    renderAdminPanel();
    displayMenuItems();
    alert(`✅ Added ${name} to the menu!`);
}

function editFood(itemId) {
    const item = menuData.find(i => i.id === itemId);
    if (item) {
        alert(`Mock Edit: Opening edit form for ${item.name}.\n\n(In a real app, this would load a form to update the item data.)`);
    }
}

function deleteFood(itemId) {
    if (!confirm("Are you sure you want to delete this menu item?")) return;
    menuData = menuData.filter(i => i.id !== itemId);
    renderAdminPanel();
    displayMenuItems();
    alert("🗑️ Item deleted.");
}

function renderPendingOrders() {
    const listEl = document.getElementById('pending-orders-list');
    if (!listEl) return;
    listEl.innerHTML = '';
    
    if (pendingOrders.length === 0) {
         listEl.innerHTML = '<p style="text-align: center; color: #7f8c8d; margin: 10px;">No pending orders to review.</p>';
         return;
    }

    pendingOrders.forEach(order => {
        const orderEl = document.createElement('div');
        orderEl.className = 'admin-item';
        orderEl.innerHTML = `
            <span><strong>${order.orderId}</strong> (${order.customer.name}) - Total: ₹${order.total}</span>
            <div class="admin-actions">
                <button class="btn" style="background: #2ecc71;" onclick="acceptOrder('${order.orderId}')">Accept</button>
            </div>
        `;
        listEl.appendChild(orderEl);
    });
}

function acceptOrder(orderId) {
    pendingOrders = pendingOrders.filter(order => order.orderId !== orderId);
    renderPendingOrders();
    alert(`🎉 Order ${orderId} Accepted! Starting preparation.`);
}

// ===============================================
// CORE SITE FUNCTIONS
// ===============================================

function displayMenuItems(category = currentCategory, searchTerm = '') {
    currentCategory = category || currentCategory;
    const term = (searchTerm || '').trim().toLowerCase();

    if (!menuItemsContainer) return;
    menuItemsContainer.innerHTML = '';

    let filteredItems = menuData.filter(item => {
        const categoryMatch = currentCategory === 'all' || item.category === currentCategory;
        const searchMatch = !term || item.name.toLowerCase().includes(term) || item.description.toLowerCase().includes(term);
        return categoryMatch && searchMatch;
    });

    if (activeDietaryFilters.veg) {
        filteredItems = filteredItems.filter(item => item.isVeg);
    }
    if (activeDietaryFilters.vegan) {
        filteredItems = filteredItems.filter(item => item.isVegan);
    }
    if (activeDietaryFilters.spicy) {
        filteredItems = filteredItems.filter(item => item.isSpicy);
    }

    if (filteredItems.length === 0) {
        menuItemsContainer.innerHTML = '<p style="text-align: center; grid-column: 1 / -1;">No items found matching your criteria.</p>';
        return;
    }

    filteredItems.forEach(item => {
        const existingCartItem = cart.find(i => i.id === item.id);
        const quantity = existingCartItem ? existingCartItem.quantity : 0;
        
        const menuItemElement = document.createElement('div');
        menuItemElement.classList.add('menu-item');
        
        const controlHTML = quantity > 0 ? 
            `<div class="stepper">
                <button onclick="updateCartItemQuantity(${item.id}, -1)">-</button>
                <span>${quantity}</span>
                <button onclick="updateCartItemQuantity(${item.id}, 1)">+</button>
            </div>` :
            `<button class="add-to-cart" data-id="${item.id}" onclick="addToCart(${item.id})">
                <i class="fas fa-shopping-cart"></i> Add
            </button>`;

        menuItemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" loading="lazy">
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="menu-item-price">
                    <span class="price">₹${item.price}</span>
                    ${controlHTML}
                </div>
            </div>
        `;
        menuItemsContainer.appendChild(menuItemElement);
    });
}

function setupEventListeners() {
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const category = button.getAttribute('data-category');
            if (searchInput) searchInput.value = ''; 
            displayMenuItems(category);
        });
    });
    
    dietaryFilterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterType = button.getAttribute('data-filter');
            activeDietaryFilters[filterType] = !activeDietaryFilters[filterType];
            button.classList.toggle('active', activeDietaryFilters[filterType]);
            displayMenuItems(); 
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            if (e.target.value.trim() === '') {
                const allBtn = document.querySelector('.category-btn[data-category="all"]');
                if (allBtn) allBtn.classList.add('active');
                currentCategory = 'all'; 
                displayMenuItems('all');
            } else {
                displayMenuItems(currentCategory, e.target.value);
            }
        });
    }

    if (menuItemsContainer) {
        menuItemsContainer.addEventListener('click', (e) => {
            const button = e.target.closest('.add-to-cart');
            if (button) {
                const itemId = parseInt(button.getAttribute('data-id'), 10);
                addToCart(itemId);
            }
        });
    }

    if (orderItemsContainer) {
        orderItemsContainer.addEventListener('click', (e) => {
            const removeItemIcon = e.target.closest('.remove-item');
            if (removeItemIcon) {
                const itemId = parseInt(removeItemIcon.getAttribute('data-id'), 10);
                removeFromCart(itemId); 
            }
        });
    }

    if (cartListEl) {
        cartListEl.addEventListener('click', (e) => {
            const btn = e.target.closest('button[data-action]');
            if (!btn) return;
            const action = btn.getAttribute('data-action');
            const id = parseInt(btn.getAttribute('data-id'), 10);
            if (action === 'increment') updateCartItemQuantity(id, 1);
            if (action === 'decrement') updateCartItemQuantity(id, -1);
            if (action === 'remove') removeAllOfItem(id); 
        });
    }

    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (cart.length === 0) {
                alert('Please add items to your cart before placing an order.');
                return;
            }
            placeOrder();
        });
    }

    if (newOrderBtn) {
        newOrderBtn.addEventListener('click', () => {
            confirmationSection.classList.add('hidden');
            orderSection.classList.remove('hidden');
            const menuEl = document.getElementById('menu');
            if (menuEl) menuEl.scrollIntoView({ behavior: 'smooth' });
            cart = [];
            saveCartToStorage();
            updateOrderSummary();
            renderCartModal();
            renderMiniCartWidget();
        });
    }

    window.addEventListener('click', (event) => {
        if (event.target == cartModal) closeCart();
        if (event.target == authModal) closeModal();
    });
}

// --- Authentication Logic ---
function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    const ADMIN_EMAIL = 'admin@foodzito.com';
    const ADMIN_PASS = 'admin123';

    if (email === ADMIN_EMAIL && password === ADMIN_PASS) {
        closeModal();
        showAdminPanel();
        return;
    }
    
    alert(`Login successful for: ${email}. Welcome back!`);
    closeModal();
}

function handleRegister(event) {
    event.preventDefault();
    const name = document.getElementById('registerName').value;
    alert(`Account created for ${name}. Please log in now.`);
    showLogin();
}

function openModal() {
    if (authModal) {
         authModal.style.display = 'block';
         showLogin();
    }
}

function closeModal() {
    if (authModal) {
        authModal.style.display = 'none';
    }
}

function showLogin() {
    if (loginView && registerView) {
        loginView.classList.remove('hidden');
        registerView.classList.add('hidden');
    }
}

function showRegister() {
    if (loginView && registerView) {
        loginView.classList.add('hidden');
        registerView.classList.remove('hidden');
    }
}

// --- Cart/Order/Storage Utilities ---

function openCart() {
    if (cartModal) {
        cartModal.style.display = 'block';
        renderCartModal();
    }
}

function closeCart() {
    if (cartModal) {
        cartModal.style.display = 'none';
    }
}

function renderMiniCartWidget() {
    const count = cart.reduce((acc, item) => acc + item.quantity, 0);
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    if (miniCartWidget && miniCartCountEl && miniCartTotalEl) {
        if (count > 0) {
            miniCartWidget.style.display = 'block';
            miniCartCountEl.textContent = count;
            miniCartTotalEl.textContent = `₹${total}`;
        } else {
            miniCartWidget.style.display = 'none';
        }
    }
}

function renderCartModal() {
    if (!cartListEl) return;
    cartListEl.innerHTML = '';
    if (cart.length === 0) {
        cartListEl.innerHTML = '<p>No items in cart</p>';
        if (cartModalTotalEl) cartModalTotalEl.textContent = 'Total: ₹0';
        updateCartCountBadge();
        return;
    }
    let total = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        const row = document.createElement('div');
        row.className = 'cart-row';
        row.innerHTML = `
            <div>
                <strong>${item.name}</strong><br>
                <small>₹${item.price} × ${item.quantity} = ₹${itemTotal}</small>
            </div>
            <div class="cart-controls">
                <button data-action="decrement" data-id="${item.id}">-</button>
                <button data-action="increment" data-id="${item.id}">+</button>
                <button data-action="remove" data-id="${item.id}">Remove All</button>
            </div>
        `;
        cartListEl.appendChild(row);
    });
    if (cartModalTotalEl) cartModalTotalEl.textContent = `Total: ₹${total}`;
    updateCartCountBadge();
}

function addToCart(itemId) {
    const item = menuData.find(i => i.id === itemId);
    let existingItem = cart.find(cartItem => cartItem.id === itemId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else if (item) {
        cart.push({
            ...item,
            quantity: 1
        });
    }

    saveCartToStorage();
    updateOrderSummary();
    renderCartModal();
    renderMiniCartWidget();
    displayMenuItems();
}

function removeFromCart(itemId) {
    const itemIndex = cart.findIndex(item => item.id === itemId);

    if (itemIndex !== -1) {
        if (cart[itemIndex].quantity > 1) {
            cart[itemIndex].quantity -= 1;
        } else {
            cart.splice(itemIndex, 1);
        }
    }

    saveCartToStorage();
    updateOrderSummary();
    renderCartModal();
    renderMiniCartWidget();
    displayMenuItems();
}

function removeAllOfItem(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveCartToStorage();
    updateOrderSummary();
    renderCartModal();
    renderMiniCartWidget();
    displayMenuItems();
}

function updateCartItemQuantity(itemId, delta) {
    const item = cart.find(i => i.id === itemId);
    if (!item) return;
    item.quantity += delta;
    if (item.quantity <= 0) {
        cart = cart.filter(i => i.id !== itemId);
    }
    saveCartToStorage();
    updateOrderSummary();
    renderCartModal();
    renderMiniCartWidget();
    displayMenuItems();
}

function clearCart() {
    if (!confirm('Clear all items from cart?')) return;
    cart = [];
    saveCartToStorage();
    updateOrderSummary();
    renderCartModal();
    renderMiniCartWidget();
    displayMenuItems();
}

function updateOrderSummary() {
    let total = 0;
    let itemCount = 0;

    if (orderItemsContainer && orderTotalElement) {
        if (cart.length === 0) {
            orderItemsContainer.innerHTML = '<p>No items selected yet</p>';
            orderTotalElement.textContent = 'Total: ₹0';
        } else {
            orderItemsContainer.innerHTML = '';

            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;
                itemCount += item.quantity;

                const orderItemElement = document.createElement('div');
                orderItemElement.classList.add('order-item');
                orderItemElement.innerHTML = `
                    <span>${item.name} (${item.quantity})</span>
                    <span>₹${itemTotal} <i class="fas fa-times remove-item" data-id="${item.id}"></i></span>
                `;
                orderItemsContainer.appendChild(orderItemElement);
            });

            orderTotalElement.textContent = `Total: ₹${total}`;
        }
    }

    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = itemCount;
    }
    if (cartModalTotalEl) {
        cartModalTotalEl.textContent = `Total: ₹${total}`;
    }
}

function updateCartCountBadge() {
    const countEl = document.getElementById('cart-count');
    const count = cart.reduce((acc, item) => acc + item.quantity, 0);
    if (countEl) countEl.textContent = count;
}

function saveCartToStorage() {
    try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
        console.error('Failed to save cart to storage', e);
    }
}

function loadCartFromStorage() {
    try {
        const stored = localStorage.getItem(CART_STORAGE_KEY);
        if (stored) {
            cart = JSON.parse(stored) || [];
        }
    } catch (e) {
        console.error('Failed to load cart from storage', e);
        cart = [];
    }
}

function proceedToCheckout() {
    closeCart();
    const orderEl = document.getElementById('order');
    if (orderEl) orderEl.scrollIntoView({ behavior: 'smooth' });
}

function calculateDeliveryTime() {
    const now = new Date();
    const peakHours = [12, 13, 19, 20]; 
    const baseTime = 30; 
    const currentHour = now.getHours();
    const isPeakHour = peakHours.includes(currentHour);
    const peakTimeAddition = isPeakHour ? 15 : 0; 
    const randomBuffer = Math.floor(Math.random() * 11) + 5;
    const totalMinutes = baseTime + peakTimeAddition + randomBuffer;
    const deliveryTime = new Date(now.getTime() + totalMinutes * 60000);
    return {
        estimatedMinutes: totalMinutes,
        deliveryTime: deliveryTime.toLocaleTimeString('en-IN', { 
            hour: 'numeric', 
            minute: '2-digit',
            hour12: true
        })
    };
}

function placeOrder() {
    const nameEl = document.getElementById('name');
    const phoneEl = document.getElementById('phone');
    const addressEl = document.getElementById('address');
    if (!nameEl || !phoneEl || !addressEl) {
        alert("Please fill in all delivery details.");
        return;
    }
    const name = nameEl.value.trim();
    const phone = phoneEl.value.trim();
    const address = addressEl.value.trim();

    if (!name || !phone || !address) {
        alert("Please fill in all delivery details.");
        return;
    }

    if (cart.length === 0) {
         alert("Your cart is empty. Please add items to place an order.");
         return;
    }

    const orderId = 'ORD-' + Math.floor(Math.random() * 1000000);
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const delivery = calculateDeliveryTime(); 
    
    pendingOrders.push({
        orderId,
        customer: { name, phone, address },
        items: JSON.parse(JSON.stringify(cart)),
        total,
        status: 'Pending'
    });

    if (confirmationDetails) confirmationDetails.innerHTML = ''; 

    const createDetail = (label, value) => {
        const p = document.createElement('p');
        const strong = document.createElement('strong');
        strong.textContent = label + ':';
        p.appendChild(strong);
        p.appendChild(document.createTextNode(' ' + value));
        return p;
    };

    if (confirmationDetails) {
        confirmationDetails.appendChild(createDetail('Order ID', orderId));
        confirmationDetails.appendChild(createDetail('Customer', name));
        confirmationDetails.appendChild(createDetail('Phone', phone));
        confirmationDetails.appendChild(createDetail('Delivery Address', address));
        confirmationDetails.appendChild(createDetail('Estimated Delivery Time', `${delivery.deliveryTime} (${delivery.estimatedMinutes} mins)`));

        const summaryDiv = document.createElement('div');
        summaryDiv.className = 'order-summary';
        const h4 = document.createElement('h4');
        h4.textContent = 'Order Summary:';
        summaryDiv.appendChild(h4);

        cart.forEach(item => {
            const p = document.createElement('p');
            p.textContent = `${item.name} (${item.quantity}) - ₹${item.price * item.quantity}`;
            summaryDiv.appendChild(p);
        });

        const totalP = document.createElement('p');
        const totalStrong = document.createElement('strong');
        totalStrong.textContent = 'Total:';
        totalP.appendChild(totalStrong);
        totalP.appendChild(document.createTextNode(' ₹' + total));

        confirmationDetails.appendChild(summaryDiv);
        confirmationDetails.appendChild(totalP);
    }

    if (orderSection) orderSection.classList.add('hidden');
    if (confirmationSection) confirmationSection.classList.remove('hidden');
    if (confirmationSection) confirmationSection.scrollIntoView({ behavior: 'smooth' });

    if (checkoutForm) checkoutForm.reset();

    console.log('Order placed:', { orderId, customer: { name, phone, address }, items: cart, total, estimated_delivery: delivery });

    cart = [];
    saveCartToStorage();
    updateOrderSummary();
    renderCartModal();
    renderMiniCartWidget();
    displayMenuItems();
}

function submitReview() {
    const nameEl = document.getElementById('reviewer-name');
    const messageEl = document.getElementById('review-message');
    const ratingEl = document.getElementById('review-rating');
    const reviewContainer = document.getElementById('user-reviews');

    if (!nameEl || !messageEl || !ratingEl || !reviewContainer) return;

    const name = nameEl.value.trim();
    const message = messageEl.value.trim();
    const rating = ratingEl.value;

    if (!name || !message || !rating) {
        alert("Please fill in all fields.");
        return;
    }

    const wrapper = document.createElement('div');
    wrapper.className = 'user-review';

    const msgP = document.createElement('p');
    msgP.textContent = message;

    const metaP = document.createElement('p');
    const strong = document.createElement('strong');
    strong.textContent = name;
    metaP.appendChild(document.createTextNode('- '));
    metaP.appendChild(strong);
    metaP.appendChild(document.createTextNode(` (${rating})`));

    wrapper.appendChild(msgP);
    wrapper.appendChild(metaP);

    reviewContainer.prepend(wrapper); 

    nameEl.value = '';
    messageEl.value = '';
    ratingEl.value = '';
}