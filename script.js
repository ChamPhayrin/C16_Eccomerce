



// Hamburger Menu
const openBtn = document.getElementById("openBtn");
const closseBtn = document.getElementById("closeBtn")
const overlay = document.getElementById("overlay")
const navMenu = document.getElementById("hamburgerMenu");

openBtn.addEventListener("click", function(){
  hamburgerMenu.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
})

closeBtn.addEventListener("click", function(){
  hamburgerMenu.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
})

overlay.addEventListener("click", function(){
  hamburgerMenu.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
})
