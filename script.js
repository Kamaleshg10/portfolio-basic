// sideMenu
var sidemenu = document.getElementById("sidemenu");
// openMenu
function openMenu() {
  sidemenu.style.right = "0";
}
// closeMenu
function closeMenu() {
  sidemenu.style.right = "-200px";
}

// Get the button
let mybutton = document.getElementById("myBtn");

//  show the button
window.onscroll = function () {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
//  scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
