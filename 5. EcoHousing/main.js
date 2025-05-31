
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

window.onscroll = ()=>{
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}




document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper(".categorySwiper", {
      slidesPerView: 2,
      spaceBetween: 20,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        280: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        510: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        750: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        900: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });
  });
  