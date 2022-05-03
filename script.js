// function selected() {
//   document.getElementById("specialties-col").style.border = "solid #014ed5";
// }

var tabLink = document.querySelectorAll(".specialties-col")
    // tabPane = document.querySelectorAll(".tab-pane");

tabLink.forEach(function (item) {
  item.addEventListener(
    "click",
    function (e) {
      // ADDS AND REMOVES ACTIVE CLASS ON TABLINKS
      tabLink.forEach(function (item) {
        item.classList.remove("active");
        // document.getElementById("specialties").style.border = "solid #014ed5";
      });
      item.classList.add("active");
      document.getElementById("specialties").style.border = "solid #014ed5";
      

      // SOMEHOW EQUATE TAB LINKS TO TAB PANES
      console.log(e.target);
    },
    false
  );
});
