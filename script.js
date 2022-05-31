const showBtn = document.querySelector(".navBtn");
const topNav = document.querySelector(".top-nav");

showBtn.addEventListener("click", function () {
  if (topNav.classList.contains("showNav")) {
    topNav.classList.remove("showNav");
    showBtn.innerHTML = '<i class = "fa-solid fa-bars"></i>';
  } else {
    topNav.classList.add("showNav");
    showBtn.innerHTML = '<i class = "fa-solid fa-xmark"></i>';
  }
});

/* Lightbox */
var lightbox = new SimpleLightbox(".gallery a", {
  /* options */
});
