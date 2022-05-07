
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
function removeElement(){
  document.getElementById("remove").remove();
  // document.getElementById('remove').style.display = 'none'
}



// $(document).ready(function(){
//   var activeCat = "";
//   function filterGroup(group){
//     if(activeCat != group){
//       $("div").filter("."+group).show();
//       $("div").filter(":not(."+group+")").hide();
//       activeCat = group;
//     }
//   }
  
//   $(".cat-all").click(function(){
//     $("div").show();
//     activeCat = "all";
//   });
//   $(".cat-1").click(function(){ filterGroup("group-1"); });

//   $(".cat-2").click(function(){ filterGroup("group-2"); });
//   $(".cat-3").click(function(){ filterGroup("group-3"); });
// });

// $(document).on('click', '.btn-cat', function(e){
//   var $type = $(this).data("cat-source");
//   if($type == "all"){
//     $('.portfolio-block').fadeOut(0);
//     $('.portfolio-block').fadeIn(1000);
//   }else{
//     $('.portfolio-block').hide();
//     $('#'+$type + ".portfolio-block").fadeIn(1000);
//   }
// })