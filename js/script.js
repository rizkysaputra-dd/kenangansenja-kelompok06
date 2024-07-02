// Toggle class active
const naavbarNav = document.querySelector(".navbar-nav");
// Ketika hamburger Menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  naavbarNav.classList.toogle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !naavbarNav.contains(e.target)) {
    naavbarNav.classList.remove("active");
  }
});
