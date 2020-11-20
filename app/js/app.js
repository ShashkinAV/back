document.addEventListener("DOMContentLoaded", () => {
  // ProgressBar
  const pageProgress = function () {
    $(window).scroll(function () {
      var wintop = $(window).scrollTop(),
        docheight = $(".page").height(),
        winheight = $(window).height();
      // console.log(wintop);
      var totalScroll = (wintop / (docheight - winheight)) * 100;
      // console.log("total scroll" + totalScroll);
      $(".KW_progressBar").css("width", totalScroll + "%");
    });
  };
	pageProgress();
	
	const openMenu = document.querySelector('.hamburger');
	const overlay = document.querySelector('.overlay');
	const body = document.querySelector('#is-page');

	openMenu.addEventListener('click', (e)=> {
		e.preventDefault();

		if(!openMenu.classList.contains("is-active")) {
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
	})

	//AOS Animation
	
	AOS.init();

});
