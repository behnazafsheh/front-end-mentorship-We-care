// swiper section
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

// remove searchTool
function removeElement() {
  document.getElementById("remove").remove();
}
