var menu = document.querySelector(".bi-list");
var close = document.querySelector(".bi-x-lg");
var nav = document.querySelector(".responsive-nav");

menu.addEventListener("click", function () {
	nav.style.top = "0%";
})

close.addEventListener("click", function () {
	nav.style.top = "-100%";
})

var swiper = new Swiper(".mySwiper", {
	slidesPerView: 1.5,
	centeredSlides: true,
	spaceBetween: 30,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	loop: true,
});

var toggleButton = document.getElementById("toggleButton");
var isPlaying = true;

toggleButton.addEventListener("click", function () {
	if (isPlaying) {
		swiper.autoplay.stop();
		toggleButton.innerHTML = '<i class="bi bi-play-circle"></i>';
	} else {
		swiper.autoplay.start();
		toggleButton.innerHTML = '<i class="bi bi-pause-circle"></i>';
	}

	isPlaying = !isPlaying;
});

