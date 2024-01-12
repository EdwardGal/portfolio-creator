//Документація слайдера: https://swiperjs.com/
//Сниппет(HTML): swiper

// Модули слайдера: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
/*
Основные модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/



function initSliders() {
	// Список слайдеров
	// Перевіряємо, чи є слайдер на сторінці
	if (document.querySelector('.swiper')) {
		// Указываем класс нужного слайдера
		// Создаем слайдер
		new Swiper('.slider-projects ', { // Указываем класс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			//slidesPerView: 2.7,
			spaceBetween: 24,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.slider-projects__nav .slider-nav__arrow-prev',
				nextEl: '.slider-projects__nav .slider-nav__arrow-next',
			},


			breakpoints: {
				330: {
					slidesPerView: 2.1,
					spaceBetween: 10,
					//autoHeight: true,
				},
				768: {
					slidesPerView: 2.3,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 2.3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 2.3,
					spaceBetween: 24,
				},
			},

			// События
			on: {

			}
		});
		new Swiper('.testimonials__slider ', { // Указываем класс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 10,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			//Кнопки "влево/вправо"
			navigation: {
				prevEl: '.testimonials__nav .slider-nav__arrow-prev',
				nextEl: '.testimonials__nav .slider-nav__arrow-next',
			},


			//breakpoints: {
			//	330: {
			//		slidesPerView: 2.1,
			//		spaceBetween: 10,
			//		//autoHeight: true,
			//	},
			//	768: {
			//		slidesPerView: 2.3,
			//		spaceBetween: 20,
			//	},
			//	992: {
			//		slidesPerView: 2.3,
			//		spaceBetween: 20,
			//	},
			//	1268: {
			//		slidesPerView: 2.3,
			//		spaceBetween: 24,
			//	},
			//},

			// События
			on: {

			}
		});
	}
}


window.addEventListener("load", function (e) {
	initSliders();
});