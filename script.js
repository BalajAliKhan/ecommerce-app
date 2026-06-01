// ===== Mobile Drawer =====
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
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    overlay.classList.remove('show');
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

// ===== Ship To Dropdown =====
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
      var flag = this.getAttribute('data-flag');
      var imgSrc = this.querySelector('img').src;
      var label = this.childNodes[2].textContent.trim();
      shipBtn.innerHTML = 'Ship To <img src="' + imgSrc + '" alt="' + flag.toUpperCase() + '" class="flag-icon"> <i class="fa-solid fa-chevron-down" style="font-size:10px"></i>';
      dropdown.classList.remove('show');
    });
  });
})();

// ===== Product Data =====
var recommendedProducts = [
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

var listingProducts = [
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

// ===== Home: Recommended Items =====
(function() {
  var container = document.getElementById('grid-container');
  if (!container) return;

  var html = '';
  for (var i = 0; i < recommendedProducts.length; i++) {
    var item = recommendedProducts[i];
    html += '<div class="product-card1">' +
      '<div class="img-box"><img src="' + item.img + '" alt="product"></div>' +
      '<div><p class="price">' + item.price + '</p><p class="desc">' + item.desc + '</p></div>' +
      '</div>';
  }
  container.innerHTML = html;
})();

// ===== Listing: Product Grid =====
(function() {
  var grid = document.getElementById('productGrid');
  if (!grid) return;

  function renderGrid() {
    var html = '';
    for (var i = 0; i < listingProducts.length; i++) {
      var p = listingProducts[i];
      var stars = '';
      for (var s = 0; s < 5; s++) {
        stars += s < p.rating ? '<i class="fa-solid fa-star"></i>' : '<i class="fa-regular fa-star"></i>';
      }
      html += '<div class="product-card">' +
        '<button class="wishlist"><i class="fa-regular fa-heart"></i></button>' +
        '<img src="' + p.img + '" alt="" class="product-img">' +
        '<div class="details">' +
        '<p class="price">' + p.price + (p.oldPrice ? ' <span class="old-price">' + p.oldPrice + '</span>' : '') + '</p>' +
        '<p class="title">' + p.title + '</p>' +
        '<div class="rating">' + stars + '</div>' +
        '<p class="description">' + p.desc + '</p>' +
        '</div></div>';
    }
    grid.innerHTML = html;
  }

  renderGrid();

  // Grid/List toggle
  var gridBtn = document.getElementById('gridViewBtn');
  var listBtn = document.getElementById('listViewBtn');

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

// ===== Product Detail: Thumbnail Gallery =====
(function() {
  var mainImg = document.getElementById('mainProductImg');
  var thumbs = document.querySelectorAll('.thumbnail');
  if (!mainImg || !thumbs.length) return;

  for (var i = 0; i < thumbs.length; i++) {
    thumbs[i].addEventListener('click', function() {
      var img = this.querySelector('img');
      if (!img) return;
      mainImg.src = img.src;
      for (var j = 0; j < thumbs.length; j++) {
        thumbs[j].classList.remove('active');
      }
      this.classList.add('active');
    });
  }
})();

// ===== Product Detail: Tabs =====
(function() {
  var tabs = document.querySelectorAll('.tab');
  if (!tabs.length) return;

  for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function() {
      var target = this.getAttribute('data-tab');

      for (var j = 0; j < tabs.length; j++) {
        tabs[j].classList.remove('active');
      }
      this.classList.add('active');

      var panels = document.querySelectorAll('.tab-panel');
      for (var k = 0; k < panels.length; k++) {
        panels[k].style.display = 'none';
      }

      var panel = document.getElementById('tab-' + target);
      if (panel) panel.style.display = 'block';
    });
  }
})();

// ===== Add to Cart =====
(function() {
  var addBtn = document.getElementById('addToCartBtn');
  if (!addBtn) return;

  addBtn.addEventListener('click', function() {
    var mainImg = document.getElementById('mainProductImg');
    var titleEl = document.querySelector('.product-title');
    var priceEl = document.querySelector('.tier:first-child .tier-price');

    var product = {
      id: Date.now().toString(),
      name: titleEl ? titleEl.textContent.trim() : 'Product',
      price: priceEl ? parseFloat(priceEl.textContent.replace('$', '')) : 0,
      image: mainImg ? mainImg.src : '',
      quantity: 1,
      seller: 'TechPro Store'
    };

    var cart = JSON.parse(localStorage.getItem('myCart')) || [];
    var existing = false;

    for (var i = 0; i < cart.length; i++) {
      if (cart[i].name === product.name) {
        cart[i].quantity += 1;
        existing = true;
        break;
      }
    }

    if (!existing) {
      cart.push(product);
    }

    localStorage.setItem('myCart', JSON.stringify(cart));
    window.location.href = 'cart.html';
  });
})();

// ===== Cart Page =====
(function() {
  var cartContainer = document.getElementById('dynamic-cart-items');
  if (!cartContainer) return;

  function displayCart() {
    var cart = JSON.parse(localStorage.getItem('myCart')) || [];
    var subtotal = 0;

    if (cart.length === 0) {
      cartContainer.innerHTML = '<p style="text-align:center;padding:40px 0;color:#6b7280">Your cart is empty!</p>';
      updateSummary(0);
      return;
    }

    var html = '';
    for (var i = 0; i < cart.length; i++) {
      var item = cart[i];
      subtotal += item.price * item.quantity;

      var qtyOptions = '';
      for (var q = 1; q <= 10; q++) {
        qtyOptions += '<option value="' + q + '"' + (item.quantity == q ? ' selected' : '') + '>Qty: ' + q + '</option>';
      }

      html += '<div class="cart-item">' +
        '<img src="' + item.image + '" class="item-img" />' +
        '<div class="item-info">' +
        '<div class="item-row">' +
        '<div class="item-title">' + item.name + '</div>' +
        '<div class="item-price-block">' +
        '<span class="item-price">$' + (item.price * item.quantity).toFixed(2) + '</span>' +
        '<select class="qty-dropdown" onchange="changeQty(' + i + ', this.value)">' + qtyOptions + '</select>' +
        '</div></div>' +
        '<div class="item-details">Seller: ' + (item.seller || 'Store') + '</div>' +
        '<div class="item-buttons">' +
        '<button class="btn-item btn-remove" onclick="removeItem(' + i + ')">Remove</button>' +
        '<button class="btn-item btn-save-later">Save for later</button>' +
        '</div></div></div>';
    }

    html += '<div class="cart-footer-btns">' +
      '<a href="list_view.html" class="btn-blue"><i class="fa fa-arrow-left"></i> Back to shop</a>' +
      '<button class="btn-outline" onclick="clearAll()">Remove all</button>' +
      '</div>';

    cartContainer.innerHTML = html;
    updateSummary(subtotal);
  }

  function updateSummary(subtotal) {
    var tax = subtotal > 0 ? 14 : 0;
    var discount = subtotal > 0 ? 60 : 0;
    var total = subtotal - discount + tax;

    var subEl = document.getElementById('subtotal-price');
    var totalEl = document.getElementById('total-price');
    var titleEl = document.getElementById('cartTitle');

    if (subEl) subEl.textContent = '$' + subtotal.toFixed(2);
    if (totalEl) totalEl.textContent = '$' + total.toFixed(2);

    var cart = JSON.parse(localStorage.getItem('myCart')) || [];
    if (titleEl) titleEl.textContent = 'My cart (' + cart.length + ')';
  }

  window.changeQty = function(index, newQty) {
    var cart = JSON.parse(localStorage.getItem('myCart'));
    if (!cart) return;
    cart[index].quantity = parseInt(newQty);
    localStorage.setItem('myCart', JSON.stringify(cart));
    displayCart();
  };

  window.removeItem = function(index) {
    var cart = JSON.parse(localStorage.getItem('myCart'));
    if (!cart) return;
    cart.splice(index, 1);
    localStorage.setItem('myCart', JSON.stringify(cart));
    displayCart();
  };

  window.clearAll = function() {
    localStorage.removeItem('myCart');
    displayCart();
  };

  displayCart();
})();
