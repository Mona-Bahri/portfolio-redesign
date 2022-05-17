document.querySelector("#togglebtn").onclick = function (event) {
  var menu = document.querySelector("#menu-overlay");
  var toggleButton = document.querySelector("#togglebtn");

  menu.classList.toggle("is-active");
  toggleButton.classList.toggle("is-active");

  event.preventDefault();
};
