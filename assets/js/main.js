(function () {
  var menuButton = document.getElementById("menuButton");
  var mobileMenu = document.getElementById("mobileMenu");
  var header = document.querySelector(".site-header");
  var yearNode = document.getElementById("currentYear");
  var navLinks = document.querySelectorAll("[data-nav-link]");

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", function () {
      var expanded = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!expanded));
      mobileMenu.classList.toggle("hidden");
    });
  }

  if (header) {
    window.addEventListener("scroll", function () {
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

})();
