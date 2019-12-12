// open and close hamburger menu
let isOpen = false;

document.getElementById('hamburger-menu').addEventListener('click', openMenu);

function openMenu() {
  isOpen = !isOpen;
  if(isOpen) {
    document.getElementById("hamburger-menu-img").src = "./img/menu_X.png";
    document.getElementById("hamburger-menu-img").style.cssFloat = "left";
    document.querySelector(".menu").style.display = 'flex';
  } else {
    document.getElementById("hamburger-menu-img").src = "./img/menu_Ham.png";
    document.querySelector(".menu").style.display = 'none';
  }
}
// end of menu