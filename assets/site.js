// UDAR Aid — shared behavior (vanilla JS, no dependencies)

(function () {
  // Mobile navigation toggle
  var menuBtn = document.getElementById('menu-btn');
  var mobileNav = document.getElementById('mobile-nav');

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', function () {
      var open = mobileNav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    document.addEventListener('click', function (e) {
      if (!menuBtn.contains(e.target) && !mobileNav.contains(e.target)) {
        mobileNav.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Auto-update footer year
  var yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Generic lightbox (used on the gallery page)
  var lightbox = document.getElementById('lightbox');
  if (lightbox) {
    var lightboxImg = document.getElementById('lightbox-img');
    var lightboxCaption = document.getElementById('lightbox-caption');

    document.querySelectorAll('.gallery-item[data-full]').forEach(function (item) {
      item.addEventListener('click', function () {
        lightboxImg.src = item.getAttribute('data-full');
        lightboxImg.alt = item.getAttribute('data-caption') || '';
        lightboxCaption.textContent = item.getAttribute('data-caption') || '';
        lightbox.classList.add('open');
      });
    });

    function closeLightbox() {
      lightbox.classList.remove('open');
      lightboxImg.src = '';
    }

    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    });
  }
})();
