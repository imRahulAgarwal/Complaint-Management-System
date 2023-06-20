let start_Y = window.pageYOffset;
let navbar = document.querySelector(".navbar");
let navToggler = document.querySelector(".navbar-toggler");
window.onscroll = () => {
  var scroll = window.pageYOffset;
  if (start_Y != scroll) {
    navbar.classList.add("navbar-scroll");
    navToggler.classList.add("navbar-toggler-scroll");
  } else {
    navbar.classList.remove("navbar-scroll");
    navToggler.classList.remove("navbar-toggler-scroll");
  }
};

let commonBtns = document.querySelectorAll(".common-btn");
for (let index = 0; index < commonBtns.length; index++) {
  let commonBtn = commonBtns[index];
  commonBtn.addEventListener("click", () => {
    commonBtn.classList.add("btn-click");
    setTimeout(() => {
      commonBtn.classList.remove("btn-click");
    }, 250);
  });
}
