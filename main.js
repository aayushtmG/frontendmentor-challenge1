"use strict";

const dropdownMenu1 = document.querySelector(".dropdown-menu-wrapper--1");
const dropdownMenu2 = document.querySelector(".dropdown-menu-wrapper--2");
const dropdownWrapper1 = document.querySelector(".dropdown-links-wrapper--1");
const dropdownWrapper2 = document.querySelector(".dropdown-links-wrapper--2");
const dropdownWrappers = [dropdownWrapper1, dropdownWrapper2];
const dropdownLink = document.querySelectorAll(".dropdown-links");
const closeBtn = document.querySelector(".close-icon");
const openBtn = document.querySelector(".open-icon");

const body = document.querySelector("body");
const arrow1 = document.querySelectorAll(".arrow");
const arrow2 = document.querySelectorAll(".arrow-1");
document.querySelector(".dropdown-menu-wrapper--1").style.opacity = "0";
document.querySelector(".dropdown-menu-wrapper--2").style.opacity = "0";
const nav = document.querySelector("nav");
const bg = document.querySelector(".background-image");
function openNav() {
  bg.style.width = '100%';
  nav.style.transform = `translateX(${0})`;
  closeBtn.style.width = '3rem';
}
function closeNav() {
  bg.style.width ='0%';
  nav.style.transform = `translateX(${100}%)`;
  closeBtn.style.width = '0';

}
openBtn.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);
bg.addEventListener('click',closeNav);
function toggleOpacity(link) {
  // if (dropdownMenu1.style.opacity == "0") {
  //   console.log("hidden");
  //   dropdownMenu1.style.opacity = "1";
  //   arrowToggle();
  // } else if (dropdownMenu1.style.opacity == "1") {
  //   console.log("shown");
  //   dropdownMenu1.style.opacity = "0";
  //   arrowToggle();
  // }
  if (link.classList.contains("dropdown-links-wrapper--1")) {
    if (dropdownMenu1.style.opacity == "0") {
      console.log("hidden");
      dropdownMenu1.style.opacity = "1";
      dropdownMenu1.style.display = "grid";
      arrowToggle(arrow1);
    } else if (dropdownMenu1.style.opacity == "1") {
      console.log("shown");
      dropdownMenu1.style.opacity = "0";
      arrowToggle(arrow1);
      dropdownMenu1.style.display = "none";
    }
  } else if (link.classList.contains("dropdown-links-wrapper--2")) {
    console.log("sucessfull___+++");
    if (dropdownMenu2.style.opacity == "0") {
      console.log("hidden");
      dropdownMenu2.style.opacity = "1";
      dropdownMenu2.style.display = "grid";

      arrowToggle(arrow2);
    } else if (dropdownMenu2.style.opacity == "1") {
      console.log("shown");
      dropdownMenu2.style.opacity = "0";
      dropdownMenu2.style.display = "none";

      arrowToggle(arrow2);
    }
  }
}
function clickedOutside(click) {
  if (![...dropdownLink].includes(click) && click != arrow1) {
    console.log("not");
    if (
      dropdownMenu1.style.opacity == "1" &&
      dropdownMenu2.style.opacity == "1"
    ) {
      dropdownMenu1.style.opacity = "0";
      dropdownMenu2.style.opacity = "0";
      dropdownMenu1.style.display = "none";
      dropdownMenu2.style.display = "none";
      arrowToggle(arrow1);
      arrowToggle(arrow2);
    } else if (
      document.querySelector(".dropdown-menu-wrapper--1").style.opacity == "1"
    ) {
      document.querySelector(".dropdown-menu-wrapper--1").style.opacity = "0";
      dropdownMenu1.style.display = "none";

      arrowToggle(arrow1);
    } else if (![...dropdownLink].includes(click) && click != arrow2) {
      if (dropdownMenu2.style.opacity == "1") {
        dropdownMenu2.style.opacity = "0";

        dropdownMenu2.style.display = "none";
        arrowToggle(arrow2);
      }
    }
  } else if (click == dropdownLink) {
    console.log("succesfully clicked");
  }
}
function arrowToggle(arrows) {
  arrows.forEach((arrow) => {
    arrow.classList.toggle("hidden");
  });
}

// dropdownWrapper1.addEventListener("click", function () {
//   console.log("clicked");
//   toggleOpacity();
// });
dropdownWrappers.forEach((dropdown) => {
  dropdown.addEventListener("click", function () {
    console.log("clicked", this);
    toggleOpacity(this);
  });
});
body.addEventListener("click", function (e) {
  console.log(e.target);
  console.log(e.target.dataset.num);
  clickedOutside(e.target);
  //   if (
  //     e.target != dropdownLink &&
  //     e.target != document.querySelector(".arrow-down")
  //   ) {
  //     console.log("not");
  //     dropdownMenu.style.opacity = "0";
  //   } else if (e.target == dropdownLink) {
  //     console.log("succesfully clicked");
  //   }
});
