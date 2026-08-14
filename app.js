console.log("Hooray JS working");

var menu = document.getElementById("menu");

var hamburger = document.getElementById("hamburger");

function toggle() {
  console.log("button clicked");

  if (menu.classList.contains("show-menu")) {
    menu.classList.remove("show-menu");
  } else {
    menu.classList.add("show-menu");
  }
}
