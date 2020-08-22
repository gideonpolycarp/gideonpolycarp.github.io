var loader = document.querySelector(".loader");

window.addEventListener("load", fadeOut);

function fadeOut() {
  loader.classList.add("disappear");
}