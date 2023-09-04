const swiper = new Swiper('.main-swiper', {
	
	slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});


const swiper2 = new Swiper('.offer-swiper', {

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {

		500: {
			slidesPerGroup: 2,
			slidesPerView: 2,
			spaceBetween: 31,
			centeredSlides: false,
			loop: false,
		},

		769: {
			slidesPerGroup: 3,
			slidesPerView: 'auto',
			spaceBetween: 31,
			centeredSlides: false,
			loop: false,
		},

		1024: {
			slidesPerGroup: 3,
			slidesPerView: 'auto',
			spaceBetween: 31,
			centeredSlides: false,
			loop: false,
		}
	},
});

const swiper3 = new Swiper('.useful-swiper', {
	
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {

    500: {
			slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 32
    },
    
    769: {
			slidesPerGroup: 3,
			slidesPerView: 3,
			spaceBetween: 32,
    },
		
		1025: {
			slidesPerGroup: 2,
			slidesPerView: 2,
			spaceBetween: 32,
		},

		1290: {
			slidesPerGroup: 2,
			slidesPerView: 2,
			spaceBetween: 28,
			centeredSlides: false,
			loop: false,
		},
  }
});

// свайпер карточки товаров
const swiper4 = new Swiper(".card__swiper-2", {

	breakpoints: {
		320: {
			direction: "horizontal",
			slidesPerGroup: 3,
      slidesPerView: 2,
      spaceBetween: 16,
		},

    500: {
			direction: "vertical",
			slidesPerGroup: 4,
      slidesPerView: 4,
      spaceBetween: 16,
    },
    
    769: {
			direction: "horizontal",
			slidesPerGroup: 3,
			slidesPerView: 3,
			spaceBetween: 32,
    },
		
		1024: {
			slidesPerGroup: 4,
			slidesPerView: 3.5,
			spaceBetween: 20,
		},
		1280: {
			spaceBetween: 35,
			slidesPerGroup: 4,
			slidesPerView: 4,
			freeMode: true,
			watchSlidesProgress: true,
		}
  }
});
const swiper5 = new Swiper(".card__swiper-1", {
	spaceBetween: 25,
	centeredSlides: true,
	
	thumbs: {
		swiper: swiper4,
	},
});


const swiper6 = new Swiper('.similar-product__swiper', {
	
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {

    320: {
			slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 16,
			centeredSlides: false,
			loop: true,
    },
    
    769: {
			slidesPerGroup: 3,
			slidesPerView: 3,
			spaceBetween: 32,
			centeredSlides: false,
			loop: true,
    },

		1025: {
			slidesPerGroup: 4,
			slidesPerView: 4,
			spaceBetween: 28,
			centeredSlides: false,
			loop: true,
		},
  }
});

// свайпер в модальном окне
const swiper7 = new Swiper(".modal-swiper-2", {
	spaceBetween: 95,
	slidesPerGroup: 4,
	slidesPerView: 4,
	freeMode: true,
	watchSlidesProgress: true,

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	breakpoints: {

    320: {
			slidesPerGroup: 1,
      slidesPerView: 1,
      spaceBetween: 16,
    },

		500: {
			slidesPerGroup: 1,
      slidesPerView: 2,
		},

    769: {
			slidesPerGroup: 3,
			slidesPerView: 2.9,
			centeredSlides: false,
			loop: false,
    },

		1025: {
			slidesPerGroup: 4,
			slidesPerView: 4,
			spaceBetween: 28,
			centeredSlides: false,
			loop: false,
		},
  }
});
const swiper8 = new Swiper(".modal-swiper-1", {
	spaceBetween: 135,
	centeredSlides: true,	

	thumbs: {
		swiper: swiper7,
	},
});
