"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // ProgressBar
  var pageProgress = function pageProgress() {
    $(window).scroll(function () {
      var wintop = $(window).scrollTop(),
          docheight = $(".page").height(),
          winheight = $(window).height(); // console.log(wintop);

      var totalScroll = wintop / (docheight - winheight) * 100; // console.log("total scroll" + totalScroll);

      $(".KW_progressBar").css("width", totalScroll + "%");
    });
  };

  pageProgress();
  var openMenu = document.querySelector('.hamburger');
  var overlay = document.querySelector('.overlay');
  var body = document.querySelector('#is-page');
  openMenu.addEventListener('click', function (e) {
    e.preventDefault();

    if (!openMenu.classList.contains("is-active")) {
      openMenu.classList.add("is-active");
      openMenu.style.position = "fixed";
      openMenu.style.right = "0";
      openMenu.style.paddingRight = "20px";
      overlay.style.height = "100%";
      body.style.overflow = "hidden";
    } else {
      openMenu.classList.remove("is-active");
      overlay.style.height = "0%";
      openMenu.style.position = "";
      openMenu.style.right = "";
      openMenu.style.paddingRight = "0";
      body.style.overflow = "";
    }
  }); //AOS Animation

  AOS.init();
});