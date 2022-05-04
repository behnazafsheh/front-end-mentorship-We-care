// function selected() {
//   document.getElementById("specialties-col").style.border = "solid #014ed5";
// }

// var tabLink = document.querySelectorAll(".specialties-col")
//     // tabPane = document.querySelectorAll(".tab-pane");

// tabLink.forEach(function (item) {
//   item.addEventListener(
//     "click",
//     function (e) {
//       // ADDS AND REMOVES ACTIVE CLASS ON TABLINKS
//       tabLink.forEach(function (item) {
//         item.classList.remove("active");
//         // document.getElementById("specialties").style.border = "solid #014ed5";
//       });
//       item.classList.add("active");
//       document.getElementById("specialties").style.border = "solid #014ed5";

//       // SOMEHOW EQUATE TAB LINKS TO TAB PANES
//       console.log(e.target);
//     },
//     false
//   );
// });

// $('.specialties-col').click(function() {
// 	$('.specialties-col').style.border = "solid #014ed5";
// 	// $(this).show();

// 	$('.specialties-col').removeClass('active');
// 	$(this).addClass('active');
// });

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 8,
  spaceBetween: 20,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// var swiper = new Swiper(".specialist-card", {
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

// core version + navigation, pagination modules:
// import Swiper, { Navigation, Pagination } from 'swiper';

// // configure Swiper to use modules
// Swiper.use([Navigation, Pagination]);

// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 3,
//   grid: {
//     rows: 2,
//   },
//   spaceBetween: 30,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });