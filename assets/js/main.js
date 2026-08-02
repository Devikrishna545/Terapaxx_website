(function () {
  var menuButton = document.getElementById("menuButton");
  var mobileMenu = document.getElementById("mobileMenu");
  var header = document.querySelector(".site-header");
  var yearNode = document.getElementById("currentYear");
  var navLinks = document.querySelectorAll("[data-nav-link]");
  var pageFooter = (yearNode && yearNode.closest("footer")) || document.querySelector("body > footer") || document.querySelector("footer");

  // Safety cleanup: remove credit blocks that were injected into nested footer elements.
  document.querySelectorAll(".devitechz-credit").forEach(function (node) {
    if (!pageFooter || !pageFooter.contains(node)) {
      node.remove();
    }
  });

  if (pageFooter && !document.querySelector(".brand-marquee")) {
    var logoFiles = [
      "Adani.jpg",
      "EMMVEE.png",
      "LOGO.png",
      "Renewsys.png",
      "SMA_Solar_idkl4eTfea_0.png",
      "Sungrow.png",
      "havells-logo-png_seeklogo-343289.png",
      "microtek-logo-png_seeklogo-196359.png",
      "premier-energies.b1bb2f7bbecd36942cfa.png",
      "vguard.png",
      "waree.png"
    ];

    var logoAlt = {
      "Adani.jpg": "Adani",
      "EMMVEE.png": "Emmvee",
      "LOGO.png": "Brand logo",
      "Renewsys.png": "Renewsys",
      "SMA_Solar_idkl4eTfea_0.png": "SMA Solar",
      "Sungrow.png": "Sungrow",
      "havells-logo-png_seeklogo-343289.png": "Havells",
      "microtek-logo-png_seeklogo-196359.png": "Microtek",
      "premier-energies.b1bb2f7bbecd36942cfa.png": "Premier Energies",
      "vguard.png": "V-Guard",
      "waree.png": "Waaree"
    };

    var buildLogoChips = function () {
      return logoFiles
        .map(function (file) {
          var alt = logoAlt[file] || "Brand logo";
          return '<div class="brand-logo-chip"><img src="/assets/images/logos/' + file + '" alt="' + alt + '" loading="lazy"></div>';
        })
        .join("");
    };

    var brandSection = document.createElement("section");
    brandSection.className = "brand-marquee";
    brandSection.setAttribute("aria-label", "Partner brands");
    brandSection.innerHTML =
      '<p class="brand-marquee-heading">Brands We Work With</p>' +
      '<div class="brand-marquee-viewport">' +
      '  <div class="brand-marquee-track">' +
      '    <div class="brand-marquee-group">' + buildLogoChips() + '</div>' +
      '    <div class="brand-marquee-group" aria-hidden="true">' + buildLogoChips() + '</div>' +
      '  </div>' +
      '</div>' +
      '<p class="brand-marquee-disclaimer">All brand logos and trademarks are the property of their respective owners. Use of brand names is for identification purposes only.</p>';

    pageFooter.parentNode.insertBefore(brandSection, pageFooter);
  }

  if (menuButton && mobileMenu) {
    var closeMenu = function () {
      mobileMenu.classList.add("hidden");
      menuButton.setAttribute("aria-expanded", "false");
      if (header) {
        header.classList.remove("menu-open");
      }
    };

    mobileMenu.classList.add("mobile-menu-glass");
    closeMenu();

    menuButton.addEventListener("click", function () {
      var expanded = menuButton.getAttribute("aria-expanded") === "true";
      if (expanded) {
        closeMenu();
      } else {
        mobileMenu.classList.remove("hidden");
        menuButton.setAttribute("aria-expanded", "true");
        if (header) {
          header.classList.add("menu-open");
        }
      }
    });

    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth >= 768) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    document.addEventListener("click", function (event) {
      if (!mobileMenu.classList.contains("hidden") && header && !header.contains(event.target)) {
        closeMenu();
      }
    });
  }

  if (header) {
    window.addEventListener("scroll", function () {
      if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
        header.classList.add("scrolled");
        return;
      }

      if (window.scrollY > 8) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }

  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }

  if (pageFooter && !pageFooter.querySelector(".devitechz-credit")) {
    var creditStrip = document.createElement("div");
    creditStrip.className = "devitechz-credit";
    creditStrip.innerHTML =
      '<p class="devitechz-credit-text">Designed &amp; Developed by <a href="https://devikrishna545.github.io" target="_blank" rel="noopener">Devi Krishna</a> · <a class="devitechz-credit-mail" href="mailto:devikrishna545@gmail.com?subject=Freelance%20Enquiry" aria-label="Email Devi Krishna">' +
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" ry="2"/><path d="m3 7 9 6 9-6"/></svg>' +
      '</a></p>';

    pageFooter.appendChild(creditStrip);
  }

  var currentPath = window.location.pathname.replace(/\/$/, "") || "/";
  navLinks.forEach(function (link) {
    var linkPath = new URL(link.href).pathname.replace(/\/$/, "") || "/";
    if (linkPath === currentPath) {
      link.classList.add("link-active");
      link.setAttribute("aria-current", "page");
    }
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  document.querySelectorAll(".reveal").forEach(function (node) {
    observer.observe(node);
  });

  /* ── Floating Contact FAB ── */
  (function () {
    var fab = document.createElement("div");
    fab.className = "contact-fab";
    fab.setAttribute("aria-label", "Quick contact");
    fab.innerHTML =
      '<div class="contact-fab-options" id="contactFabOptions" aria-hidden="true">' +
        '<a href="https://wa.me/919400194362" target="_blank" rel="noopener noreferrer" class="contact-fab-item contact-fab-wa" aria-label="Chat on WhatsApp">' +
          '<span class="contact-fab-label">WhatsApp</span>' +
          '<div class="contact-fab-btn">' +
            '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
              '<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>' +
            '</svg>' +
          '</div>' +
        '</a>' +
        '<a href="tel:+919400194362" class="contact-fab-item contact-fab-call" aria-label="Call us">' +
          '<span class="contact-fab-label">Call Us</span>' +
          '<div class="contact-fab-btn">' +
            '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
              '<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.73 10.7a19.79 19.79 0 01-3.07-8.67A2 2 0 012.48 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.09 6.09l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>' +
            '</svg>' +
          '</div>' +
        '</a>' +
      '</div>' +
      '<button class="contact-fab-trigger" id="contactFabTrigger" aria-expanded="false" aria-haspopup="true" aria-label="Open contact options">' +
        '<svg class="fab-icon-chat" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
          '<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>' +
        '</svg>' +
        '<svg class="fab-icon-close" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
          '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>' +
        '</svg>' +
      '</button>';

    document.body.appendChild(fab);

    var fabTrigger = document.getElementById("contactFabTrigger");
    var fabOptions = document.getElementById("contactFabOptions");

    fabTrigger.addEventListener("click", function (e) {
      e.stopPropagation();
      var isOpen = fab.classList.toggle("is-open");
      fabTrigger.setAttribute("aria-expanded", String(isOpen));
      fabOptions.setAttribute("aria-hidden", String(!isOpen));
    });

    document.addEventListener("click", function (e) {
      if (!fab.contains(e.target) && fab.classList.contains("is-open")) {
        fab.classList.remove("is-open");
        fabTrigger.setAttribute("aria-expanded", "false");
        fabOptions.setAttribute("aria-hidden", "true");
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && fab.classList.contains("is-open")) {
        fab.classList.remove("is-open");
        fabTrigger.setAttribute("aria-expanded", "false");
        fabOptions.setAttribute("aria-hidden", "true");
        fabTrigger.focus();
      }
    });
  }());

})();
