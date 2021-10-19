let form = document.getElementById("form");
let login = document.getElementById("login");
let close = document.getElementById("close");
login.onclick = function () {
    form.style.display = "block";
}
close.onclick = function () {
    form.style.display = "none";
}
let menu = document.getElementById("menu");
let navLinks = document.getElementById("navLinks")
let closeMenu=document.getElementById("nav-links")
menu.onclick = function () {
    navLinks.style.display = "block";
}
closeMenu.onclick = function () {
    navLinks.style.display = "none";
}
let user = document.getElementById("user");
user.onclick = function () {
    form.style.display = "block";
}
//slider-code
var swiper = new Swiper(".vehicels-slider", {
        slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    centeredSlides:true,
        autoplay: {
          delay: 9500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 3,
          },
        },
});
      var swiper = new Swiper(".features-slider", {
        slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    centeredSlides:true,
        autoplay: {
          delay: 9500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 3,
          },
        },
      });
      