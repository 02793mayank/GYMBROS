// DARK MODE TOGGLE
const toggle = document.getElementById("darkModeSwitch");

// Load dark mode preference from localStorage
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark-mode");
  toggle.checked = true;
}

toggle.addEventListener("change", function () {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", this.checked);
});

// SEARCH ICON SLIDE EFFECT
const searchLabel = document.getElementById("search");
const searchIcon = document.getElementById("searchIcon");
const searchInput = document.getElementById("searchBar");

if (searchIcon && searchLabel && searchInput) {
  searchIcon.addEventListener("click", () => {
    searchLabel.classList.toggle("expanded");
    if (searchLabel.classList.contains("expanded")) {
      searchInput.focus();
    }
  });

  // Optional: close search bar when clicking outside
  document.addEventListener("click", (e) => {
    if (!searchLabel.contains(e.target)) {
      searchLabel.classList.remove("expanded");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".nav-item");

  navLinks.forEach(link => {
    const hrefPage = link.getAttribute("href");
    if (hrefPage === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
