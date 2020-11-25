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

  pageProgress(); //humburger

  $(".hamburger").on("click", function (e) {
    e.preventDefault();
    $(".hamburger").toggleClass("is-active");
    $(".overlay").toggleClass("overlay__on");
    $("body").toggleClass("overflow-hidden");
  }); //skillbars

  $(".skillbar__bar").each(function () {
    $(this).animate({
      width: $(this).attr("data-width")
    }, 2000);
    $(this).find(".skillbar__percent").text($(this).attr("data-width"));
  }); //AOS Animation

  AOS.init();
});