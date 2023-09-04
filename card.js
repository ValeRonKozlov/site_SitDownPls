let burger = document.querySelector('.burger');
let menu = document.querySelector('.middle-nav');
let menuTop = document.querySelector('.top-nav');
let menuLinks = menu.querySelectorAll('.middle-link');
let burgerClose = document.getElementById('burger__close-btn');

burger.addEventListener('click', () => {
    burgerClose.classList.add('burger--active');
    menu.classList.add('middle-nav--active');
    menuTop.classList.add('top-nav-active');
    document.body.classList.add('stop-scroll');
  })

burgerClose.addEventListener('click', () => {
	burgerClose.classList.remove('burger--active');
	menu.classList.remove('middle-nav--active');
	menuTop.classList.remove('top-nav-active');
	document.body.classList.remove('stop-scroll');
})


const element = document.querySelector('#selectCustom');
const select = document.querySelectorAll('select');

select.forEach(element => {
	const choices = new Choices(element, {
		searchEnabled: false,
		shouldSort: false,
		duplicateItemsAllowed: false,
		editItems: true,
	});
});


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

// увеличение по нажптию на изображение товара
const cardModal = document.getElementById('product-vuie-modal')
const cardPhoto = document.getElementById('card__swiper-1')
const modalClose = document.getElementById('close-modal-btn')

cardPhoto.addEventListener('click', () => {
	cardModal.classList.add('product-vuie-modal-active')
	document.body.classList.add('stop-scroll')
})
modalClose.addEventListener('click', () => {
	cardModal.classList.remove('product-vuie-modal-active')
	document.body.classList.remove('stop-scroll')
})

// купить в один клик
const buyBtn = document.getElementById('card__product-info-btn')
const buyModal = document.getElementById('one-click-buy-button')
const buyModalClose = document.getElementById('one-click-buy-button-content-close')

buyBtn.addEventListener('click', () => {
	buyModal.classList.add('one-click-buy-button-active')
	document.body.classList.add('stop-scroll')
})

buyModalClose.addEventListener('click', () => {
	buyModal.classList.remove('one-click-buy-button-active')
	document.body.classList.remove('stop-scroll')
})

// окно после отправки формы
const sendBtn = document.getElementById('one-click-buy-button-form')
const sucsessModal = document.getElementById('sucsess-modal')
const sucsessMOdalClose = document.getElementById('sucsess-modal-close')

sendBtn.addEventListener('submit', (e) => {
	e.preventDefault
	sucsessModal.classList.add('sucsess-modal-active')
	buyModal.classList.remove('one-click-buy-button-active')
	document.body.classList.add('stop-scroll')
	setTimeout(() => {
		sucsessModal.classList.remove('sucsess-modal-active')
		buyModal.classList.remove('one-click-buy-button-active')
		document.body.classList.remove('stop-scroll')
	}, 1000);
})
sucsessMOdalClose.addEventListener('click', () => {
	sucsessModal.classList.remove('sucsess-modal-active')
	buyModal.classList.remove('one-click-buy-button-active')
	document.body.classList.remove('stop-scroll')
})

// закрытие окна по нажатию на фон
window.addEventListener('click', (e) => {
	if (e.target === cardModal) {
		cardModal.classList.remove('product-vuie-modal-active')
		document.body.classList.remove('stop-scroll')
	}
	if (e.target === buyModal) {
		buyModal.classList.remove('one-click-buy-button-active')
		document.body.classList.remove('stop-scroll')
	}
	if (e.target === sucsessModal) {
		sucsessModal.classList.remove('sucsess-modal-active')
		buyModal.classList.remove('one-click-buy-button-active')
		document.body.classList.remove('stop-scroll')
	}
});
const validationModal = new JustValidate('#one-click-buy-button-form',
  {
    errorLabelCssClass: 'is-label-invalid',
    focusInvalidField: true,
    lockForm: true,
    tooltip: {
      position: 'top',
    },
		validateBeforeSubmitting: true,
  },
);

validationModal

  .addField('#name-modal', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели имя',
    },
		{
			rule: 'customRegexp',
			value: /^([А-Я]{1}[а-яё]{1,23})$/,
			errorMessage: 'Недопустимый формат',
		},
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Вы не ввели имя',
    },
    {
      rule: 'maxLength',
      value: 30,
    },

  ])

	.addField('#tel-modal', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели телефон',
    },
		{
			rule: 'number',
			errorMessage: 'Недопустимый формат',
		},
  ])

  .addField('#check-modal', [
    {
      rule: 'required',
      errorMessage: 'Необходимо поставить галочку',
    },
  ])

const searchBtn = document.getElementById('search-btn')
const errorMessage = document.getElementById('search-error')

searchBtn.addEventListener('click', (e) => {
	e.preventDefault
	errorMessage.classList.add('search-error--active')
	setTimeout(() => {
		errorMessage.classList.remove('search-error--active')
	}, 3000);
})
window.addEventListener('click',(e) => {
	if(e.target === errorMessage) {
		errorMessage.classList.remove('search-error--active')
	}
})
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1cmdlci5qcyIsInNlbGVjdC5qcyIsInN3aXBlci5qcyIsIm1vZGFsLmpzIiwibW9kYWwtdmFsaWRhdGlvbi5qcyIsInNlYXJjaC1lcnJvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJjYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXInKTtcclxubGV0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWlkZGxlLW5hdicpO1xyXG5sZXQgbWVudVRvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3AtbmF2Jyk7XHJcbmxldCBtZW51TGlua3MgPSBtZW51LnF1ZXJ5U2VsZWN0b3JBbGwoJy5taWRkbGUtbGluaycpO1xyXG5sZXQgYnVyZ2VyQ2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnVyZ2VyX19jbG9zZS1idG4nKTtcclxuXHJcbmJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGJ1cmdlckNsb3NlLmNsYXNzTGlzdC5hZGQoJ2J1cmdlci0tYWN0aXZlJyk7XHJcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21pZGRsZS1uYXYtLWFjdGl2ZScpO1xyXG4gICAgbWVudVRvcC5jbGFzc0xpc3QuYWRkKCd0b3AtbmF2LWFjdGl2ZScpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdzdG9wLXNjcm9sbCcpO1xyXG4gIH0pXHJcblxyXG5idXJnZXJDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRidXJnZXJDbG9zZS5jbGFzc0xpc3QucmVtb3ZlKCdidXJnZXItLWFjdGl2ZScpO1xyXG5cdG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbWlkZGxlLW5hdi0tYWN0aXZlJyk7XHJcblx0bWVudVRvcC5jbGFzc0xpc3QucmVtb3ZlKCd0b3AtbmF2LWFjdGl2ZScpO1xyXG5cdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnc3RvcC1zY3JvbGwnKTtcclxufSlcclxuXHJcbiIsImNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0Q3VzdG9tJyk7XHJcbmNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpO1xyXG5cclxuc2VsZWN0LmZvckVhY2goZWxlbWVudCA9PiB7XHJcblx0Y29uc3QgY2hvaWNlcyA9IG5ldyBDaG9pY2VzKGVsZW1lbnQsIHtcclxuXHRcdHNlYXJjaEVuYWJsZWQ6IGZhbHNlLFxyXG5cdFx0c2hvdWxkU29ydDogZmFsc2UsXHJcblx0XHRkdXBsaWNhdGVJdGVtc0FsbG93ZWQ6IGZhbHNlLFxyXG5cdFx0ZWRpdEl0ZW1zOiB0cnVlLFxyXG5cdH0pO1xyXG59KTtcclxuXHJcbiIsImNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy5tYWluLXN3aXBlcicsIHtcclxuXHRcclxuXHRzbGlkZXNQZXJWaWV3OiAxLFxyXG4gIGxvb3A6IHRydWUsXHJcbiAgcGFnaW5hdGlvbjoge1xyXG4gICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgdHlwZTogJ2J1bGxldHMnLFxyXG4gICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuXHJcbmNvbnN0IHN3aXBlcjIgPSBuZXcgU3dpcGVyKCcub2ZmZXItc3dpcGVyJywge1xyXG5cclxuXHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuXHRcdHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG5cdH0sXHJcblx0YnJlYWtwb2ludHM6IHtcclxuXHJcblx0XHQ1MDA6IHtcclxuXHRcdFx0c2xpZGVzUGVyR3JvdXA6IDIsXHJcblx0XHRcdHNsaWRlc1BlclZpZXc6IDIsXHJcblx0XHRcdHNwYWNlQmV0d2VlbjogMzEsXHJcblx0XHRcdGNlbnRlcmVkU2xpZGVzOiBmYWxzZSxcclxuXHRcdFx0bG9vcDogZmFsc2UsXHJcblx0XHR9LFxyXG5cclxuXHRcdDc2OToge1xyXG5cdFx0XHRzbGlkZXNQZXJHcm91cDogMyxcclxuXHRcdFx0c2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG5cdFx0XHRzcGFjZUJldHdlZW46IDMxLFxyXG5cdFx0XHRjZW50ZXJlZFNsaWRlczogZmFsc2UsXHJcblx0XHRcdGxvb3A6IGZhbHNlLFxyXG5cdFx0fSxcclxuXHJcblx0XHQxMDI0OiB7XHJcblx0XHRcdHNsaWRlc1Blckdyb3VwOiAzLFxyXG5cdFx0XHRzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcblx0XHRcdHNwYWNlQmV0d2VlbjogMzEsXHJcblx0XHRcdGNlbnRlcmVkU2xpZGVzOiBmYWxzZSxcclxuXHRcdFx0bG9vcDogZmFsc2UsXHJcblx0XHR9XHJcblx0fSxcclxufSk7XHJcblxyXG5jb25zdCBzd2lwZXIzID0gbmV3IFN3aXBlcignLnVzZWZ1bC1zd2lwZXInLCB7XHJcblx0XHJcblx0bmF2aWdhdGlvbjoge1xyXG5cdFx0bmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcblx0XHRwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuXHR9LFxyXG5cdGJyZWFrcG9pbnRzOiB7XHJcblxyXG4gICAgNTAwOiB7XHJcblx0XHRcdHNsaWRlc1Blckdyb3VwOiAyLFxyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDMyXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICA3Njk6IHtcclxuXHRcdFx0c2xpZGVzUGVyR3JvdXA6IDMsXHJcblx0XHRcdHNsaWRlc1BlclZpZXc6IDMsXHJcblx0XHRcdHNwYWNlQmV0d2VlbjogMzIsXHJcbiAgICB9LFxyXG5cdFx0XHJcblx0XHQxMDI1OiB7XHJcblx0XHRcdHNsaWRlc1Blckdyb3VwOiAyLFxyXG5cdFx0XHRzbGlkZXNQZXJWaWV3OiAyLFxyXG5cdFx0XHRzcGFjZUJldHdlZW46IDMyLFxyXG5cdFx0fSxcclxuXHJcblx0XHQxMjkwOiB7XHJcblx0XHRcdHNsaWRlc1Blckdyb3VwOiAyLFxyXG5cdFx0XHRzbGlkZXNQZXJWaWV3OiAyLFxyXG5cdFx0XHRzcGFjZUJldHdlZW46IDI4LFxyXG5cdFx0XHRjZW50ZXJlZFNsaWRlczogZmFsc2UsXHJcblx0XHRcdGxvb3A6IGZhbHNlLFxyXG5cdFx0fSxcclxuICB9XHJcbn0pO1xyXG5cclxuLy8g0YHQstCw0LnQv9C10YAg0LrQsNGA0YLQvtGH0LrQuCDRgtC+0LLQsNGA0L7QslxyXG5jb25zdCBzd2lwZXI0ID0gbmV3IFN3aXBlcihcIi5jYXJkX19zd2lwZXItMlwiLCB7XHJcblxyXG5cdGJyZWFrcG9pbnRzOiB7XHJcblx0XHQzMjA6IHtcclxuXHRcdFx0ZGlyZWN0aW9uOiBcImhvcml6b250YWxcIixcclxuXHRcdFx0c2xpZGVzUGVyR3JvdXA6IDMsXHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMTYsXHJcblx0XHR9LFxyXG5cclxuICAgIDUwMDoge1xyXG5cdFx0XHRkaXJlY3Rpb246IFwidmVydGljYWxcIixcclxuXHRcdFx0c2xpZGVzUGVyR3JvdXA6IDQsXHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMTYsXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICA3Njk6IHtcclxuXHRcdFx0ZGlyZWN0aW9uOiBcImhvcml6b250YWxcIixcclxuXHRcdFx0c2xpZGVzUGVyR3JvdXA6IDMsXHJcblx0XHRcdHNsaWRlc1BlclZpZXc6IDMsXHJcblx0XHRcdHNwYWNlQmV0d2VlbjogMzIsXHJcbiAgICB9LFxyXG5cdFx0XHJcblx0XHQxMDI0OiB7XHJcblx0XHRcdHNsaWRlc1Blckdyb3VwOiA0LFxyXG5cdFx0XHRzbGlkZXNQZXJWaWV3OiAzLjUsXHJcblx0XHRcdHNwYWNlQmV0d2VlbjogMjAsXHJcblx0XHR9LFxyXG5cdFx0MTI4MDoge1xyXG5cdFx0XHRzcGFjZUJldHdlZW46IDM1LFxyXG5cdFx0XHRzbGlkZXNQZXJHcm91cDogNCxcclxuXHRcdFx0c2xpZGVzUGVyVmlldzogNCxcclxuXHRcdFx0ZnJlZU1vZGU6IHRydWUsXHJcblx0XHRcdHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXHJcblx0XHR9XHJcbiAgfVxyXG59KTtcclxuY29uc3Qgc3dpcGVyNSA9IG5ldyBTd2lwZXIoXCIuY2FyZF9fc3dpcGVyLTFcIiwge1xyXG5cdHNwYWNlQmV0d2VlbjogMjUsXHJcblx0Y2VudGVyZWRTbGlkZXM6IHRydWUsXHJcblx0XHJcblx0dGh1bWJzOiB7XHJcblx0XHRzd2lwZXI6IHN3aXBlcjQsXHJcblx0fSxcclxufSk7XHJcblxyXG5cclxuY29uc3Qgc3dpcGVyNiA9IG5ldyBTd2lwZXIoJy5zaW1pbGFyLXByb2R1Y3RfX3N3aXBlcicsIHtcclxuXHRcclxuXHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuXHRcdHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG5cdH0sXHJcblx0YnJlYWtwb2ludHM6IHtcclxuXHJcbiAgICAzMjA6IHtcclxuXHRcdFx0c2xpZGVzUGVyR3JvdXA6IDIsXHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMTYsXHJcblx0XHRcdGNlbnRlcmVkU2xpZGVzOiBmYWxzZSxcclxuXHRcdFx0bG9vcDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBcclxuICAgIDc2OToge1xyXG5cdFx0XHRzbGlkZXNQZXJHcm91cDogMyxcclxuXHRcdFx0c2xpZGVzUGVyVmlldzogMyxcclxuXHRcdFx0c3BhY2VCZXR3ZWVuOiAzMixcclxuXHRcdFx0Y2VudGVyZWRTbGlkZXM6IGZhbHNlLFxyXG5cdFx0XHRsb29wOiB0cnVlLFxyXG4gICAgfSxcclxuXHJcblx0XHQxMDI1OiB7XHJcblx0XHRcdHNsaWRlc1Blckdyb3VwOiA0LFxyXG5cdFx0XHRzbGlkZXNQZXJWaWV3OiA0LFxyXG5cdFx0XHRzcGFjZUJldHdlZW46IDI4LFxyXG5cdFx0XHRjZW50ZXJlZFNsaWRlczogZmFsc2UsXHJcblx0XHRcdGxvb3A6IHRydWUsXHJcblx0XHR9LFxyXG4gIH1cclxufSk7XHJcblxyXG4vLyDRgdCy0LDQudC/0LXRgCDQsiDQvNC+0LTQsNC70YzQvdC+0Lwg0L7QutC90LVcclxuY29uc3Qgc3dpcGVyNyA9IG5ldyBTd2lwZXIoXCIubW9kYWwtc3dpcGVyLTJcIiwge1xyXG5cdHNwYWNlQmV0d2VlbjogOTUsXHJcblx0c2xpZGVzUGVyR3JvdXA6IDQsXHJcblx0c2xpZGVzUGVyVmlldzogNCxcclxuXHRmcmVlTW9kZTogdHJ1ZSxcclxuXHR3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxyXG5cclxuXHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRuZXh0RWw6IFwiLnN3aXBlci1idXR0b24tbmV4dFwiLFxyXG5cdFx0cHJldkVsOiBcIi5zd2lwZXItYnV0dG9uLXByZXZcIixcclxuXHR9LFxyXG5cclxuXHRicmVha3BvaW50czoge1xyXG5cclxuICAgIDMyMDoge1xyXG5cdFx0XHRzbGlkZXNQZXJHcm91cDogMSxcclxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAxNixcclxuICAgIH0sXHJcblxyXG5cdFx0NTAwOiB7XHJcblx0XHRcdHNsaWRlc1Blckdyb3VwOiAxLFxyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG5cdFx0fSxcclxuXHJcbiAgICA3Njk6IHtcclxuXHRcdFx0c2xpZGVzUGVyR3JvdXA6IDMsXHJcblx0XHRcdHNsaWRlc1BlclZpZXc6IDIuOSxcclxuXHRcdFx0Y2VudGVyZWRTbGlkZXM6IGZhbHNlLFxyXG5cdFx0XHRsb29wOiBmYWxzZSxcclxuICAgIH0sXHJcblxyXG5cdFx0MTAyNToge1xyXG5cdFx0XHRzbGlkZXNQZXJHcm91cDogNCxcclxuXHRcdFx0c2xpZGVzUGVyVmlldzogNCxcclxuXHRcdFx0c3BhY2VCZXR3ZWVuOiAyOCxcclxuXHRcdFx0Y2VudGVyZWRTbGlkZXM6IGZhbHNlLFxyXG5cdFx0XHRsb29wOiBmYWxzZSxcclxuXHRcdH0sXHJcbiAgfVxyXG59KTtcclxuY29uc3Qgc3dpcGVyOCA9IG5ldyBTd2lwZXIoXCIubW9kYWwtc3dpcGVyLTFcIiwge1xyXG5cdHNwYWNlQmV0d2VlbjogMTM1LFxyXG5cdGNlbnRlcmVkU2xpZGVzOiB0cnVlLFx0XHJcblxyXG5cdHRodW1iczoge1xyXG5cdFx0c3dpcGVyOiBzd2lwZXI3LFxyXG5cdH0sXHJcbn0pO1xyXG4iLCIvLyDRg9Cy0LXQu9C40YfQtdC90LjQtSDQv9C+INC90LDQttC/0YLQuNGOINC90LAg0LjQt9C+0LHRgNCw0LbQtdC90LjQtSDRgtC+0LLQsNGA0LBcclxuY29uc3QgY2FyZE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3QtdnVpZS1tb2RhbCcpXHJcbmNvbnN0IGNhcmRQaG90byA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkX19zd2lwZXItMScpXHJcbmNvbnN0IG1vZGFsQ2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2UtbW9kYWwtYnRuJylcclxuXHJcbmNhcmRQaG90by5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRjYXJkTW9kYWwuY2xhc3NMaXN0LmFkZCgncHJvZHVjdC12dWllLW1vZGFsLWFjdGl2ZScpXHJcblx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdzdG9wLXNjcm9sbCcpXHJcbn0pXHJcbm1vZGFsQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0Y2FyZE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Byb2R1Y3QtdnVpZS1tb2RhbC1hY3RpdmUnKVxyXG5cdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnc3RvcC1zY3JvbGwnKVxyXG59KVxyXG5cclxuLy8g0LrRg9C/0LjRgtGMINCyINC+0LTQuNC9INC60LvQuNC6XHJcbmNvbnN0IGJ1eUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkX19wcm9kdWN0LWluZm8tYnRuJylcclxuY29uc3QgYnV5TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb25lLWNsaWNrLWJ1eS1idXR0b24nKVxyXG5jb25zdCBidXlNb2RhbENsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29uZS1jbGljay1idXktYnV0dG9uLWNvbnRlbnQtY2xvc2UnKVxyXG5cclxuYnV5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdGJ1eU1vZGFsLmNsYXNzTGlzdC5hZGQoJ29uZS1jbGljay1idXktYnV0dG9uLWFjdGl2ZScpXHJcblx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdzdG9wLXNjcm9sbCcpXHJcbn0pXHJcblxyXG5idXlNb2RhbENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdGJ1eU1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ29uZS1jbGljay1idXktYnV0dG9uLWFjdGl2ZScpXHJcblx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdzdG9wLXNjcm9sbCcpXHJcbn0pXHJcblxyXG4vLyDQvtC60L3QviDQv9C+0YHQu9C1INC+0YLQv9GA0LDQstC60Lgg0YTQvtGA0LzRi1xyXG5jb25zdCBzZW5kQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29uZS1jbGljay1idXktYnV0dG9uLWZvcm0nKVxyXG5jb25zdCBzdWNzZXNzTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3Vjc2Vzcy1tb2RhbCcpXHJcbmNvbnN0IHN1Y3Nlc3NNT2RhbENsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Y3Nlc3MtbW9kYWwtY2xvc2UnKVxyXG5cclxuc2VuZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG5cdGUucHJldmVudERlZmF1bHRcclxuXHRzdWNzZXNzTW9kYWwuY2xhc3NMaXN0LmFkZCgnc3Vjc2Vzcy1tb2RhbC1hY3RpdmUnKVxyXG5cdGJ1eU1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ29uZS1jbGljay1idXktYnV0dG9uLWFjdGl2ZScpXHJcblx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdzdG9wLXNjcm9sbCcpXHJcblx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRzdWNzZXNzTW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnc3Vjc2Vzcy1tb2RhbC1hY3RpdmUnKVxyXG5cdFx0YnV5TW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnb25lLWNsaWNrLWJ1eS1idXR0b24tYWN0aXZlJylcclxuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnc3RvcC1zY3JvbGwnKVxyXG5cdH0sIDEwMDApO1xyXG59KVxyXG5zdWNzZXNzTU9kYWxDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRzdWNzZXNzTW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnc3Vjc2Vzcy1tb2RhbC1hY3RpdmUnKVxyXG5cdGJ1eU1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ29uZS1jbGljay1idXktYnV0dG9uLWFjdGl2ZScpXHJcblx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdzdG9wLXNjcm9sbCcpXHJcbn0pXHJcblxyXG4vLyDQt9Cw0LrRgNGL0YLQuNC1INC+0LrQvdCwINC/0L4g0L3QsNC20LDRgtC40Y4g0L3QsCDRhNC+0L1cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHRpZiAoZS50YXJnZXQgPT09IGNhcmRNb2RhbCkge1xyXG5cdFx0Y2FyZE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Byb2R1Y3QtdnVpZS1tb2RhbC1hY3RpdmUnKVxyXG5cdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdzdG9wLXNjcm9sbCcpXHJcblx0fVxyXG5cdGlmIChlLnRhcmdldCA9PT0gYnV5TW9kYWwpIHtcclxuXHRcdGJ1eU1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ29uZS1jbGljay1idXktYnV0dG9uLWFjdGl2ZScpXHJcblx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3N0b3Atc2Nyb2xsJylcclxuXHR9XHJcblx0aWYgKGUudGFyZ2V0ID09PSBzdWNzZXNzTW9kYWwpIHtcclxuXHRcdHN1Y3Nlc3NNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdzdWNzZXNzLW1vZGFsLWFjdGl2ZScpXHJcblx0XHRidXlNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdvbmUtY2xpY2stYnV5LWJ1dHRvbi1hY3RpdmUnKVxyXG5cdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdzdG9wLXNjcm9sbCcpXHJcblx0fVxyXG59KTsiLCJjb25zdCB2YWxpZGF0aW9uTW9kYWwgPSBuZXcgSnVzdFZhbGlkYXRlKCcjb25lLWNsaWNrLWJ1eS1idXR0b24tZm9ybScsXHJcbiAge1xyXG4gICAgZXJyb3JMYWJlbENzc0NsYXNzOiAnaXMtbGFiZWwtaW52YWxpZCcsXHJcbiAgICBmb2N1c0ludmFsaWRGaWVsZDogdHJ1ZSxcclxuICAgIGxvY2tGb3JtOiB0cnVlLFxyXG4gICAgdG9vbHRpcDoge1xyXG4gICAgICBwb3NpdGlvbjogJ3RvcCcsXHJcbiAgICB9LFxyXG5cdFx0dmFsaWRhdGVCZWZvcmVTdWJtaXR0aW5nOiB0cnVlLFxyXG4gIH0sXHJcbik7XHJcblxyXG52YWxpZGF0aW9uTW9kYWxcclxuXHJcbiAgLmFkZEZpZWxkKCcjbmFtZS1tb2RhbCcsIFtcclxuICAgIHtcclxuICAgICAgcnVsZTogJ3JlcXVpcmVkJyxcclxuICAgICAgZXJyb3JNZXNzYWdlOiAn0JLRiyDQvdC1INCy0LLQtdC70Lgg0LjQvNGPJyxcclxuICAgIH0sXHJcblx0XHR7XHJcblx0XHRcdHJ1bGU6ICdjdXN0b21SZWdleHAnLFxyXG5cdFx0XHR2YWx1ZTogL14oW9CQLdCvXXsxfVvQsC3Rj9GRXXsxLDIzfSkkLyxcclxuXHRcdFx0ZXJyb3JNZXNzYWdlOiAn0J3QtdC00L7Qv9GD0YHRgtC40LzRi9C5INGE0L7RgNC80LDRgicsXHJcblx0XHR9LFxyXG4gICAge1xyXG4gICAgICBydWxlOiAnbWluTGVuZ3RoJyxcclxuICAgICAgdmFsdWU6IDIsXHJcbiAgICAgIGVycm9yTWVzc2FnZTogJ9CS0Ysg0L3QtSDQstCy0LXQu9C4INC40LzRjycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBydWxlOiAnbWF4TGVuZ3RoJyxcclxuICAgICAgdmFsdWU6IDMwLFxyXG4gICAgfSxcclxuXHJcbiAgXSlcclxuXHJcblx0LmFkZEZpZWxkKCcjdGVsLW1vZGFsJywgW1xyXG4gICAge1xyXG4gICAgICBydWxlOiAncmVxdWlyZWQnLFxyXG4gICAgICBlcnJvck1lc3NhZ2U6ICfQktGLINC90LUg0LLQstC10LvQuCDRgtC10LvQtdGE0L7QvScsXHJcbiAgICB9LFxyXG5cdFx0e1xyXG5cdFx0XHRydWxlOiAnbnVtYmVyJyxcclxuXHRcdFx0ZXJyb3JNZXNzYWdlOiAn0J3QtdC00L7Qv9GD0YHRgtC40LzRi9C5INGE0L7RgNC80LDRgicsXHJcblx0XHR9LFxyXG4gIF0pXHJcblxyXG4gIC5hZGRGaWVsZCgnI2NoZWNrLW1vZGFsJywgW1xyXG4gICAge1xyXG4gICAgICBydWxlOiAncmVxdWlyZWQnLFxyXG4gICAgICBlcnJvck1lc3NhZ2U6ICfQndC10L7QsdGF0L7QtNC40LzQviDQv9C+0YHRgtCw0LLQuNGC0Ywg0LPQsNC70L7Rh9C60YMnLFxyXG4gICAgfSxcclxuICBdKVxyXG4iLCJjb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJ0bicpXHJcbmNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtZXJyb3InKVxyXG5cclxuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHRlLnByZXZlbnREZWZhdWx0XHJcblx0ZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaC1lcnJvci0tYWN0aXZlJylcclxuXHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdGVycm9yTWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdzZWFyY2gtZXJyb3ItLWFjdGl2ZScpXHJcblx0fSwgMzAwMCk7XHJcbn0pXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpID0+IHtcclxuXHRpZihlLnRhcmdldCA9PT0gZXJyb3JNZXNzYWdlKSB7XHJcblx0XHRlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnc2VhcmNoLWVycm9yLS1hY3RpdmUnKVxyXG5cdH1cclxufSkiXX0=
