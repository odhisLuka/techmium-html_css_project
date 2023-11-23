document.addEventListener("DOMContentLoaded", function () {
  // Navigation menu toggle
  const menuToggle = document.querySelector(".navbar-menu");
  const nav = document.querySelector(".nav");
  menuToggle.addEventListener("click", function () {
    nav.classList.toggle("active");
  });

  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // Example: Update content dynamically
  const dynamicContent = document.getElementById("dynamic-content");
  if (dynamicContent) {
    dynamicContent.innerHTML =
      "This content is updated dynamically using JavaScript!";
  }
});
