(function() {
  const hamburger = document.getElementById('hamburger');
  const drawer = document.getElementById('mobile-drawer');
  const drawerClose = document.getElementById('drawer-close');

  if (!hamburger || !drawer) return;

  let overlay = document.getElementById('drawer-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'drawer-overlay';
    document.body.appendChild(overlay);
  }

  function openDrawer() {
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    overlay.classList.add('show');
    hamburger.setAttribute('aria-expanded', 'true');
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    overlay.classList.remove('show');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  hamburger.addEventListener('click', openDrawer);
  drawerClose.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });
})();

(function() {
  const shipBtn = document.getElementById('shipToDropdown');
  const dropdown = document.getElementById('shipDropdown');

  if (!shipBtn || !dropdown) return;

  shipBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    dropdown.classList.toggle('show');
  });

  document.addEventListener('click', function() {
    dropdown.classList.remove('show');
  });

  dropdown.querySelectorAll('a').forEach(function(item) {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const imgSrc = this.querySelector('img').src;
      shipBtn.innerHTML = `Ship To <img src="${imgSrc}" alt="" class="flag-icon"> <i class="fa-solid fa-chevron-down" style="font-size:10px"></i>`;
      dropdown.classList.remove('show');
    });
  });
})();

const recommendedProducts = [
  { id: "1", price: "$10.30", desc: "T-shirts with multiple colors, for men", img: "assets/Image/cloth/cloth-1.png" },
  { id: "2", price: "$10.30", desc: "Jeans shorts for men blue color", img: "assets/Image/cloth/cloth-2.png" },
  { id: "3", price: "$12.50", desc: "Brown winter coat medium size", img: "assets/Image/cloth/cloth-3.png" },
  { id: "4", price: "$34.00", desc: "Jeans bag for travel for men", img: "assets/Image/cloth/cloth-4.png" },
  { id: "5", price: "$99.00", desc: "Leather wallet", img: "assets/Image/cloth/cloth-5.png" },
  { id: "6", price: "$9.99", desc: "Canon camera black, 100x zoom", img: "assets/Image/tech/tech-3.png" },
  { id: "7", price: "$8.99", desc: "Headset for gaming with mic", img: "assets/Image/tech/tech-7.png" },
  { id: "8", price: "$10.30", desc: "Smartwatch silver color modern", img: "assets/Image/tech/tech-8.png" },
  { id: "9", price: "$10.30", desc: "Blue wallet for men leather material", img: "assets/Image/cloth/cloth-6.png" },
  { id: "10", price: "$80.95", desc: "Jeans bag for travel for men", img: "assets/Image/cloth/cloth-7.png" }
];

const listingProducts = [
  { id: "11", price: "$10.30", oldPrice: "$15.00", title: "T-shirts with multiple colors, for men", desc: "Premium quality cotton t-shirt available in multiple colors. Perfect for casual wear.", img: "assets/Image/cloth/cloth-1.png", rating: 4 },
  { id: "12", price: "$10.30", oldPrice: "$14.00", title: "Jeans shorts for men blue color", desc: "Comfortable denim shorts for summer. Blue color.", img: "assets/Image/cloth/cloth-2.png", rating: 3 },
  { id: "13", price: "$12.50", title: "Brown winter coat medium size", desc: "Warm winter coat with hood. Brown color.", img: "assets/Image/cloth/cloth-3.png", rating: 5 },
  { id: "14", price: "$34.00", title: "Jeans bag for travel for men", desc: "Durable travel bag with multiple compartments.", img: "assets/Image/cloth/cloth-4.png", rating: 4 },
  { id: "15", price: "$99.00", oldPrice: "$120.00", title: "Leather wallet", desc: "Genuine leather wallet with RFID protection.", img: "assets/Image/cloth/cloth-5.png", rating: 5 },
  { id: "16", price: "$9.99", title: "Canon camera black, 100x zoom", desc: "Digital camera with 100x optical zoom.", img: "assets/Image/tech/tech-3.png", rating: 4 },
  { id: "17", price: "$8.99", title: "Headset for gaming with mic", desc: "Gaming headset with noise-cancelling microphone.", img: "assets/Image/tech/tech-7.png", rating: 3 },
  { id: "18", price: "$10.30", title: "Smartwatch silver color modern", desc: "Smart watch with heart rate monitor and GPS.", img: "assets/Image/tech/tech-8.png", rating: 4 },
  { id: "19", price: "$10.30", title: "Blue wallet for men leather material", desc: "Stylish blue leather wallet for men.", img: "assets/Image/cloth/cloth-6.png", rating: 3 }
];

function getCart() {
  try {
    return JSON.parse(localStorage.getItem('myCart')) || [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem('myCart', JSON.stringify(cart));
}

(function() {
  const container = document.getElementById('grid-container');
  if (!container) return;

  let html = '';
  for (const item of recommendedProducts) {
    html += `<a href="product.html" class="product-card1" style="text-decoration:none;color:inherit">
      <div class="img-box"><img src="${item.img}" alt="product"></div>
      <div><p class="price">${item.price}</p><p class="desc">${item.desc}</p></div>
    </a>`;
  }
  container.innerHTML = html;
})();

(function() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  function renderGrid() {
    let html = '';
    for (const p of listingProducts) {
      let stars = '';
      for (let s = 0; s < 5; s++) {
        stars += s < p.rating ? '<i class="fa-solid fa-star"></i>' : '<i class="fa-regular fa-star"></i>';
      }
      const oldPriceHtml = p.oldPrice ? ` <span class="old-price">${p.oldPrice}</span>` : '';
      html += `<a href="product.html" class="product-card" style="text-decoration:none;color:inherit">
        <span class="wishlist"><i class="fa-regular fa-heart"></i></span>
        <img src="${p.img}" alt="" class="product-img">
        <div class="details">
        <p class="price">${p.price}${oldPriceHtml}</p>
        <p class="title">${p.title}</p>
        <div class="rating">${stars}</div>
        <p class="description">${p.desc}</p>
        </div></a>`;
    }
    grid.innerHTML = html;
  }

  renderGrid();

  const gridBtn = document.getElementById('gridViewBtn');
  const listBtn = document.getElementById('listViewBtn');

  if (gridBtn && listBtn) {
    gridBtn.addEventListener('click', function() {
      grid.className = 'grid-view';
      gridBtn.classList.add('active');
      listBtn.classList.remove('active');
    });

    listBtn.addEventListener('click', function() {
      grid.className = 'list-view';
      listBtn.classList.add('active');
      gridBtn.classList.remove('active');
    });
  }
})();

(function() {
  const mainImg = document.getElementById('mainProductImg');
  const thumbs = document.querySelectorAll('.thumbnail');
  if (!mainImg || !thumbs.length) return;

  const thumbCount = thumbs.length;
  for (let i = 0; i < thumbCount; i++) {
    thumbs[i].addEventListener('click', function() {
      const img = this.querySelector('img');
      if (!img) return;
      mainImg.src = img.src;
      for (let j = 0; j < thumbCount; j++) {
        thumbs[j].classList.remove('active');
      }
      this.classList.add('active');
    });
  }
})();

(function() {
  const tabs = document.querySelectorAll('.tab');
  if (!tabs.length) return;

  const tabCount = tabs.length;
  const panels = document.querySelectorAll('.tab-panel');

  for (let i = 0; i < tabCount; i++) {
    tabs[i].addEventListener('click', function() {
      const target = this.getAttribute('data-tab');
      for (let j = 0; j < tabCount; j++) {
        tabs[j].classList.remove('active');
      }
      this.classList.add('active');
      for (let k = 0; k < panels.length; k++) {
        panels[k].style.display = 'none';
      }
      const panel = document.getElementById('tab-' + target);
      if (panel) panel.style.display = 'block';
    });
  }
})();

(function() {
  const addBtn = document.getElementById('addToCartBtn');
  if (!addBtn) return;

  addBtn.addEventListener('click', function() {
    const mainImg = document.getElementById('mainProductImg');
    const titleEl = document.querySelector('.product-title');
    const priceEl = document.querySelector('.tier:first-child .tier-price');
    const priceText = priceEl ? priceEl.textContent.replace('$', '') : '0';

    const product = {
      id: Date.now().toString() + Math.random().toString(36).slice(2, 6),
      name: titleEl ? titleEl.textContent.trim() : 'Product',
      price: parseFloat(priceText) || 0,
      image: mainImg ? mainImg.src : '',
      quantity: 1,
      seller: 'TechPro Store'
    };

    const cart = getCart();
    let existing = false;

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].name === product.name) {
        cart[i].quantity += 1;
        existing = true;
        break;
      }
    }

    if (!existing) {
      cart.push(product);
    }

    saveCart(cart);
    window.location.href = 'cart.html';
  });
})();

(function() {
  const cartContainer = document.getElementById('dynamic-cart-items');
  if (!cartContainer) return;

  const defaultCartItems = [
    { id: "d1", name: "Smart Watch Series 7 - Premium Edition", price: 99.50, image: "assets/Image/tech/tech-8.png", quantity: 1, seller: "TechPro Store" },
    { id: "d2", name: "GoPro HERO6 4K Action Camera - Black", price: 99.50, image: "assets/Image/tech/tech-3.png", quantity: 2, seller: "DigitalWorld" },
    { id: "d3", name: "Wireless Headphones Pro - Noise Cancelling", price: 49.99, image: "assets/Image/tech/tech-7.png", quantity: 1, seller: "AudioTech" }
  ];

  function initCart() {
    const cart = getCart();
    if (cart.length === 0) {
      saveCart(defaultCartItems);
    }
  }

  initCart();

  function displayCart() {
    const cart = getCart();
    let subtotal = 0;

    if (cart.length === 0) {
      cartContainer.innerHTML = `<div class="cart-empty-msg">
        <p>Your cart is empty!</p>
        <a href="list_view.html" class="btn-blue" style="display:inline-block;margin-top:16px"><i class="fa fa-arrow-left"></i> Start Shopping</a>
      </div>`;
      updateSummary(0);
      return;
    }

    let html = '';
    for (let i = 0; i < cart.length; i++) {
      const item = cart[i];
      subtotal += item.price * item.quantity;

      let qtyOptions = '';
      for (let q = 1; q <= 10; q++) {
        qtyOptions += `<option value="${q}"${item.quantity == q ? ' selected' : ''}>Qty: ${q}</option>`;
      }

      html += `<div class="cart-item">
        <img src="${item.image}" class="item-img" />
        <div class="item-info">
        <div class="item-row">
        <div class="item-title">${item.name}</div>
        <div class="item-price-block">
        <span class="item-price">$${(item.price * item.quantity).toFixed(2)}</span>
        <select class="qty-dropdown" data-index="${i}">${qtyOptions}</select>
        </div></div>
        <div class="item-details">Seller: ${item.seller || 'Store'}</div>
        <div class="item-buttons">
        <button class="btn-item btn-remove" data-index="${i}">Remove</button>
        <button class="btn-item btn-save-later">Save for later</button>
        </div></div></div>`;
    }

    html += `<div class="cart-footer-btns">
      <a href="list_view.html" class="btn-blue"><i class="fa fa-arrow-left"></i> Back to shop</a>
      <button class="btn-outline" id="clearCartBtn">Remove all</button>
      <button class="btn-outline" id="resetCartBtn" style="border-color:#0d6efd;color:#0d6efd">Reset defaults</button>
    </div>`;

    cartContainer.innerHTML = html;
    updateSummary(subtotal);

    cartContainer.querySelectorAll('.qty-dropdown').forEach(function(sel) {
      sel.addEventListener('change', function() {
        const index = parseInt(this.getAttribute('data-index'));
        const cart = getCart();
        cart[index].quantity = parseInt(this.value);
        saveCart(cart);
        displayCart();
      });
    });

    cartContainer.querySelectorAll('.btn-remove').forEach(function(btn) {
      btn.addEventListener('click', function() {
        const index = parseInt(this.getAttribute('data-index'));
        const cart = getCart();
        cart.splice(index, 1);
        saveCart(cart);
        displayCart();
      });
    });

    const clearBtn = document.getElementById('clearCartBtn');
    if (clearBtn) {
      clearBtn.addEventListener('click', function() {
        saveCart([]);
        displayCart();
      });
    }

    const resetBtn = document.getElementById('resetCartBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', function() {
        saveCart(defaultCartItems);
        displayCart();
      });
    }
  }

  function updateSummary(subtotal) {
    const tax = subtotal > 0 ? 14 : 0;
    const maxDiscount = 60;
    const discount = subtotal > 0 ? Math.min(maxDiscount, subtotal * 0.5) : 0;
    const total = subtotal - discount + tax;

    const subEl = document.getElementById('subtotal-price');
    const totalEl = document.getElementById('total-price');
    const titleEl = document.getElementById('cartTitle');
    const discountEl = document.querySelector('.summary-row[style*="color:#fa3434"] span:last-child');

    if (subEl) subEl.textContent = '$' + subtotal.toFixed(2);
    if (discountEl) discountEl.textContent = '- $' + discount.toFixed(2);
    if (totalEl) totalEl.textContent = '$' + total.toFixed(2);

    const cart = getCart();
    if (titleEl) titleEl.textContent = 'My cart (' + cart.length + ')';
  }

  displayCart();
})();
