//review carousel start//
$(".reviews-slider").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 900,
    items: 2,
    margin: 50,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
    },
  });
  //review carousel end//
  // 
//scroll to top start//
const scrollBtn = document.querySelector(".scroll-to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 500) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
  });
});
//scroll to top end//