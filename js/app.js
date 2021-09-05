// Fading Floating Button
const floatingBtn = document.querySelector(".floating-btn");

window.addEventListener("scroll", () => {
  let scroll = this.scrollY;
  if (scroll >= 680) {
    floatingBtn.style.opacity = "1";
  }
});
window.addEventListener("scroll", () => {
  let scroll = this.scrollY;
  if (scroll <= 680) {
    floatingBtn.style.opacity = "0";
  }
});

// Fading Top Bar
const topBar = document.querySelector(".top-bar");

window.addEventListener("scroll", () => {
  let scroll = this.scrollY;
  console.log(scroll);
  if (scroll >= 1100) {
    topBar.style.display = "block";
  }
});
window.addEventListener("scroll", () => {
  let scroll = this.scrollY;
  if (scroll <= 1100) {
    topBar.style.display = "none";
  }
});

// Fading Images
const image = document.querySelectorAll(".small-box img");
const img = document.querySelector(".image-wrapper img");

window.addEventListener("scroll", () => {
  // after crossing header section i will show first two image
  let distanceFromTop =
    window.pageYOffset -
    document.querySelector(".showcase-container").offsetTop;
  console.log(distanceFromTop);
  if (distanceFromTop >= -100 && distanceFromTop <= 30) {
    image[0].style.transform = "translateX(0)";
    image[0].style.opacity = "1";
  }
  if (distanceFromTop >= 80 && distanceFromTop <= 150) {
    image[1].style.transform = "translateX(0)";
    image[1].style.opacity = "1";
  }

  // after crossing franchise section i have to show below image
  distanceFromTop =
    window.pageYOffset - document.querySelector(".franchise .title").offsetTop;
  if (distanceFromTop >= 100 && distanceFromTop <= 200) {
    img.style.transform = "translate(0) scale(1)";
    img.style.opacity = "1";
  }
});
