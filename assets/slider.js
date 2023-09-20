import Swiper from "swiper";
import { EffectFade, Navigation, Pagination, Thumbs } from "swiper/modules";
Swiper.use([EffectFade, Navigation, Pagination, Thumbs]);
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const thumbSwiper = new Swiper(".swiper-thumb", {
	direction: "horizontal",
	loop: true,
	spaceBetween: 10,
	slidesPerView: 4,
	freeMode: true,
	watchSlidesProgress: true,
});
const swiper = new Swiper(".slider__slider", {
	// Optional parameters
	direction: "horizontal",
	loop: true,
	spaceBetween: 50,
	// If we need pagination
	// pagination: {
	// 	el: ".swiper-pagination",
	// },
	thumbs: {
		swiper: thumbSwiper,
	},
	// Navigation arrows
	// navigation: {
	// 	nextEl: ".swiper-button-next",
	// 	prevEl: ".swiper-button-prev",
	// },

	// And if we need scrollbar
	// scrollbar: {
	// 	el: ".swiper-scrollbar",
	// },
});
