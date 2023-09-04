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


const product = document.getElementsByClassName('product-item');
const btn = document.getElementById('hirate-btn');
// при разрешении больше 1024px загружает 8 товаров на страницу
	if (window.innerWidth > 1024) {
		for (let i = 8; i < product.length; i++) {
			product[i].style.display = "none";}
			let count = 8;
			btn.addEventListener("click", function() {
					let items = document.getElementsByClassName('product-item');
					count += 2;
					if (count <= items.length){
							for(let i = 0; i < count; i++){
									items[i].style.display = "flex";
							}
					}
					if (count == items.length) {
						btn.style.display = "none";
					}
			})
	}
// при разрешении меньше 1024px загружает 6 товаров на страницу
	if (window.innerWidth < 1024) {
		for (let i = 6; i < product.length; i++) {
			product[i].style.display = "none";}
			let count = 6;
			btn.addEventListener("click", function() {
					let items = document.getElementsByClassName('product-item');
					count += 2;
					if (count <= items.length){
							for(let i = 0; i < count; i++){
									items[i].style.display = "flex";
							}
					}
					if (count == items.length) {
						btn.style.display = "none";
					}
				})
	}


const validationMainPage = new JustValidate('#feedback-form',
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

validationMainPage

  .addField('#name', [
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

	.addField('#tel', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели телефон',
    },
		{
			rule: 'number',
			errorMessage: 'Недопустимый формат',
		},
  ])

  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели e-mail',
    },
    {
      rule: 'email',
      errorMessage: 'Недопустимый формат',
    },
  ])

  .addField('#feedback-check', [
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1cmdlci5qcyIsInNlbGVjdC5qcyIsInN3aXBlci5qcyIsInNob3dtb3JlLmpzIiwibWFpbi1wYWdlLXZhbGlkYXRlLmpzIiwic2VhcmNoLWVycm9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXInKTtcclxubGV0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWlkZGxlLW5hdicpO1xyXG5sZXQgbWVudVRvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3AtbmF2Jyk7XHJcbmxldCBtZW51TGlua3MgPSBtZW51LnF1ZXJ5U2VsZWN0b3JBbGwoJy5taWRkbGUtbGluaycpO1xyXG5sZXQgYnVyZ2VyQ2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnVyZ2VyX19jbG9zZS1idG4nKTtcclxuXHJcbmJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGJ1cmdlckNsb3NlLmNsYXNzTGlzdC5hZGQoJ2J1cmdlci0tYWN0aXZlJyk7XHJcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21pZGRsZS1uYXYtLWFjdGl2ZScpO1xyXG4gICAgbWVudVRvcC5jbGFzc0xpc3QuYWRkKCd0b3AtbmF2LWFjdGl2ZScpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdzdG9wLXNjcm9sbCcpO1xyXG4gIH0pXHJcblxyXG5idXJnZXJDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRidXJnZXJDbG9zZS5jbGFzc0xpc3QucmVtb3ZlKCdidXJnZXItLWFjdGl2ZScpO1xyXG5cdG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbWlkZGxlLW5hdi0tYWN0aXZlJyk7XHJcblx0bWVudVRvcC5jbGFzc0xpc3QucmVtb3ZlKCd0b3AtbmF2LWFjdGl2ZScpO1xyXG5cdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnc3RvcC1zY3JvbGwnKTtcclxufSlcclxuXHJcbiIsImNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0Q3VzdG9tJyk7XHJcbmNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpO1xyXG5cclxuc2VsZWN0LmZvckVhY2goZWxlbWVudCA9PiB7XHJcblx0Y29uc3QgY2hvaWNlcyA9IG5ldyBDaG9pY2VzKGVsZW1lbnQsIHtcclxuXHRcdHNlYXJjaEVuYWJsZWQ6IGZhbHNlLFxyXG5cdFx0c2hvdWxkU29ydDogZmFsc2UsXHJcblx0XHRkdXBsaWNhdGVJdGVtc0FsbG93ZWQ6IGZhbHNlLFxyXG5cdFx0ZWRpdEl0ZW1zOiB0cnVlLFxyXG5cdH0pO1xyXG59KTtcclxuXHJcbiIsImNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy5tYWluLXN3aXBlcicsIHtcclxuXHRcclxuXHRzbGlkZXNQZXJWaWV3OiAxLFxyXG4gIGxvb3A6IHRydWUsXHJcbiAgcGFnaW5hdGlvbjoge1xyXG4gICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgdHlwZTogJ2J1bGxldHMnLFxyXG4gICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuXHJcbmNvbnN0IHN3aXBlcjIgPSBuZXcgU3dpcGVyKCcub2ZmZXItc3dpcGVyJywge1xyXG5cclxuXHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuXHRcdHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG5cdH0sXHJcblx0YnJlYWtwb2ludHM6IHtcclxuXHJcblx0XHQ1MDA6IHtcclxuXHRcdFx0c2xpZGVzUGVyR3JvdXA6IDIsXHJcblx0XHRcdHNsaWRlc1BlclZpZXc6IDIsXHJcblx0XHRcdHNwYWNlQmV0d2VlbjogMzEsXHJcblx0XHRcdGNlbnRlcmVkU2xpZGVzOiBmYWxzZSxcclxuXHRcdFx0bG9vcDogZmFsc2UsXHJcblx0XHR9LFxyXG5cclxuXHRcdDc2OToge1xyXG5cdFx0XHRzbGlkZXNQZXJHcm91cDogMyxcclxuXHRcdFx0c2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG5cdFx0XHRzcGFjZUJldHdlZW46IDMxLFxyXG5cdFx0XHRjZW50ZXJlZFNsaWRlczogZmFsc2UsXHJcblx0XHRcdGxvb3A6IGZhbHNlLFxyXG5cdFx0fSxcclxuXHJcblx0XHQxMDI0OiB7XHJcblx0XHRcdHNsaWRlc1Blckdyb3VwOiAzLFxyXG5cdFx0XHRzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcblx0XHRcdHNwYWNlQmV0d2VlbjogMzEsXHJcblx0XHRcdGNlbnRlcmVkU2xpZGVzOiBmYWxzZSxcclxuXHRcdFx0bG9vcDogZmFsc2UsXHJcblx0XHR9XHJcblx0fSxcclxufSk7XHJcblxyXG5jb25zdCBzd2lwZXIzID0gbmV3IFN3aXBlcignLnVzZWZ1bC1zd2lwZXInLCB7XHJcblx0XHJcblx0bmF2aWdhdGlvbjoge1xyXG5cdFx0bmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcblx0XHRwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuXHR9LFxyXG5cdGJyZWFrcG9pbnRzOiB7XHJcblxyXG4gICAgNTAwOiB7XHJcblx0XHRcdHNsaWRlc1Blckdyb3VwOiAyLFxyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDMyXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICA3Njk6IHtcclxuXHRcdFx0c2xpZGVzUGVyR3JvdXA6IDMsXHJcblx0XHRcdHNsaWRlc1BlclZpZXc6IDMsXHJcblx0XHRcdHNwYWNlQmV0d2VlbjogMzIsXHJcbiAgICB9LFxyXG5cdFx0XHJcblx0XHQxMDI1OiB7XHJcblx0XHRcdHNsaWRlc1Blckdyb3VwOiAyLFxyXG5cdFx0XHRzbGlkZXNQZXJWaWV3OiAyLFxyXG5cdFx0XHRzcGFjZUJldHdlZW46IDMyLFxyXG5cdFx0fSxcclxuXHJcblx0XHQxMjkwOiB7XHJcblx0XHRcdHNsaWRlc1Blckdyb3VwOiAyLFxyXG5cdFx0XHRzbGlkZXNQZXJWaWV3OiAyLFxyXG5cdFx0XHRzcGFjZUJldHdlZW46IDI4LFxyXG5cdFx0XHRjZW50ZXJlZFNsaWRlczogZmFsc2UsXHJcblx0XHRcdGxvb3A6IGZhbHNlLFxyXG5cdFx0fSxcclxuICB9XHJcbn0pO1xyXG5cclxuLy8g0YHQstCw0LnQv9C10YAg0LrQsNGA0YLQvtGH0LrQuCDRgtC+0LLQsNGA0L7QslxyXG5jb25zdCBzd2lwZXI0ID0gbmV3IFN3aXBlcihcIi5jYXJkX19zd2lwZXItMlwiLCB7XHJcblxyXG5cdGJyZWFrcG9pbnRzOiB7XHJcblx0XHQzMjA6IHtcclxuXHRcdFx0ZGlyZWN0aW9uOiBcImhvcml6b250YWxcIixcclxuXHRcdFx0c2xpZGVzUGVyR3JvdXA6IDMsXHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMTYsXHJcblx0XHR9LFxyXG5cclxuICAgIDUwMDoge1xyXG5cdFx0XHRkaXJlY3Rpb246IFwidmVydGljYWxcIixcclxuXHRcdFx0c2xpZGVzUGVyR3JvdXA6IDQsXHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMTYsXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICA3Njk6IHtcclxuXHRcdFx0ZGlyZWN0aW9uOiBcImhvcml6b250YWxcIixcclxuXHRcdFx0c2xpZGVzUGVyR3JvdXA6IDMsXHJcblx0XHRcdHNsaWRlc1BlclZpZXc6IDMsXHJcblx0XHRcdHNwYWNlQmV0d2VlbjogMzIsXHJcbiAgICB9LFxyXG5cdFx0XHJcblx0XHQxMDI0OiB7XHJcblx0XHRcdHNsaWRlc1Blckdyb3VwOiA0LFxyXG5cdFx0XHRzbGlkZXNQZXJWaWV3OiAzLjUsXHJcblx0XHRcdHNwYWNlQmV0d2VlbjogMjAsXHJcblx0XHR9LFxyXG5cdFx0MTI4MDoge1xyXG5cdFx0XHRzcGFjZUJldHdlZW46IDM1LFxyXG5cdFx0XHRzbGlkZXNQZXJHcm91cDogNCxcclxuXHRcdFx0c2xpZGVzUGVyVmlldzogNCxcclxuXHRcdFx0ZnJlZU1vZGU6IHRydWUsXHJcblx0XHRcdHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXHJcblx0XHR9XHJcbiAgfVxyXG59KTtcclxuY29uc3Qgc3dpcGVyNSA9IG5ldyBTd2lwZXIoXCIuY2FyZF9fc3dpcGVyLTFcIiwge1xyXG5cdHNwYWNlQmV0d2VlbjogMjUsXHJcblx0Y2VudGVyZWRTbGlkZXM6IHRydWUsXHJcblx0XHJcblx0dGh1bWJzOiB7XHJcblx0XHRzd2lwZXI6IHN3aXBlcjQsXHJcblx0fSxcclxufSk7XHJcblxyXG5cclxuY29uc3Qgc3dpcGVyNiA9IG5ldyBTd2lwZXIoJy5zaW1pbGFyLXByb2R1Y3RfX3N3aXBlcicsIHtcclxuXHRcclxuXHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuXHRcdHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG5cdH0sXHJcblx0YnJlYWtwb2ludHM6IHtcclxuXHJcbiAgICAzMjA6IHtcclxuXHRcdFx0c2xpZGVzUGVyR3JvdXA6IDIsXHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMTYsXHJcblx0XHRcdGNlbnRlcmVkU2xpZGVzOiBmYWxzZSxcclxuXHRcdFx0bG9vcDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBcclxuICAgIDc2OToge1xyXG5cdFx0XHRzbGlkZXNQZXJHcm91cDogMyxcclxuXHRcdFx0c2xpZGVzUGVyVmlldzogMyxcclxuXHRcdFx0c3BhY2VCZXR3ZWVuOiAzMixcclxuXHRcdFx0Y2VudGVyZWRTbGlkZXM6IGZhbHNlLFxyXG5cdFx0XHRsb29wOiB0cnVlLFxyXG4gICAgfSxcclxuXHJcblx0XHQxMDI1OiB7XHJcblx0XHRcdHNsaWRlc1Blckdyb3VwOiA0LFxyXG5cdFx0XHRzbGlkZXNQZXJWaWV3OiA0LFxyXG5cdFx0XHRzcGFjZUJldHdlZW46IDI4LFxyXG5cdFx0XHRjZW50ZXJlZFNsaWRlczogZmFsc2UsXHJcblx0XHRcdGxvb3A6IHRydWUsXHJcblx0XHR9LFxyXG4gIH1cclxufSk7XHJcblxyXG4vLyDRgdCy0LDQudC/0LXRgCDQsiDQvNC+0LTQsNC70YzQvdC+0Lwg0L7QutC90LVcclxuY29uc3Qgc3dpcGVyNyA9IG5ldyBTd2lwZXIoXCIubW9kYWwtc3dpcGVyLTJcIiwge1xyXG5cdHNwYWNlQmV0d2VlbjogOTUsXHJcblx0c2xpZGVzUGVyR3JvdXA6IDQsXHJcblx0c2xpZGVzUGVyVmlldzogNCxcclxuXHRmcmVlTW9kZTogdHJ1ZSxcclxuXHR3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxyXG5cclxuXHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRuZXh0RWw6IFwiLnN3aXBlci1idXR0b24tbmV4dFwiLFxyXG5cdFx0cHJldkVsOiBcIi5zd2lwZXItYnV0dG9uLXByZXZcIixcclxuXHR9LFxyXG5cclxuXHRicmVha3BvaW50czoge1xyXG5cclxuICAgIDMyMDoge1xyXG5cdFx0XHRzbGlkZXNQZXJHcm91cDogMSxcclxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAxNixcclxuICAgIH0sXHJcblxyXG5cdFx0NTAwOiB7XHJcblx0XHRcdHNsaWRlc1Blckdyb3VwOiAxLFxyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG5cdFx0fSxcclxuXHJcbiAgICA3Njk6IHtcclxuXHRcdFx0c2xpZGVzUGVyR3JvdXA6IDMsXHJcblx0XHRcdHNsaWRlc1BlclZpZXc6IDIuOSxcclxuXHRcdFx0Y2VudGVyZWRTbGlkZXM6IGZhbHNlLFxyXG5cdFx0XHRsb29wOiBmYWxzZSxcclxuICAgIH0sXHJcblxyXG5cdFx0MTAyNToge1xyXG5cdFx0XHRzbGlkZXNQZXJHcm91cDogNCxcclxuXHRcdFx0c2xpZGVzUGVyVmlldzogNCxcclxuXHRcdFx0c3BhY2VCZXR3ZWVuOiAyOCxcclxuXHRcdFx0Y2VudGVyZWRTbGlkZXM6IGZhbHNlLFxyXG5cdFx0XHRsb29wOiBmYWxzZSxcclxuXHRcdH0sXHJcbiAgfVxyXG59KTtcclxuY29uc3Qgc3dpcGVyOCA9IG5ldyBTd2lwZXIoXCIubW9kYWwtc3dpcGVyLTFcIiwge1xyXG5cdHNwYWNlQmV0d2VlbjogMTM1LFxyXG5cdGNlbnRlcmVkU2xpZGVzOiB0cnVlLFx0XHJcblxyXG5cdHRodW1iczoge1xyXG5cdFx0c3dpcGVyOiBzd2lwZXI3LFxyXG5cdH0sXHJcbn0pO1xyXG4iLCJcclxuY29uc3QgcHJvZHVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2R1Y3QtaXRlbScpO1xyXG5jb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlyYXRlLWJ0bicpO1xyXG4vLyDQv9GA0Lgg0YDQsNC30YDQtdGI0LXQvdC40Lgg0LHQvtC70YzRiNC1IDEwMjRweCDQt9Cw0LPRgNGD0LbQsNC10YIgOCDRgtC+0LLQsNGA0L7QsiDQvdCwINGB0YLRgNCw0L3QuNGG0YNcclxuXHRpZiAod2luZG93LmlubmVyV2lkdGggPiAxMDI0KSB7XHJcblx0XHRmb3IgKGxldCBpID0gODsgaSA8IHByb2R1Y3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0cHJvZHVjdFtpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7fVxyXG5cdFx0XHRsZXQgY291bnQgPSA4O1xyXG5cdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0bGV0IGl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvZHVjdC1pdGVtJyk7XHJcblx0XHRcdFx0XHRjb3VudCArPSAyO1xyXG5cdFx0XHRcdFx0aWYgKGNvdW50IDw9IGl0ZW1zLmxlbmd0aCl7XHJcblx0XHRcdFx0XHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpdGVtc1tpXS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKGNvdW50ID09IGl0ZW1zLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHRidG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdH1cclxuLy8g0L/RgNC4INGA0LDQt9GA0LXRiNC10L3QuNC4INC80LXQvdGM0YjQtSAxMDI0cHgg0LfQsNCz0YDRg9C20LDQtdGCIDYg0YLQvtCy0LDRgNC+0LIg0L3QsCDRgdGC0YDQsNC90LjRhtGDXHJcblx0aWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgMTAyNCkge1xyXG5cdFx0Zm9yIChsZXQgaSA9IDY7IGkgPCBwcm9kdWN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHByb2R1Y3RbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO31cclxuXHRcdFx0bGV0IGNvdW50ID0gNjtcclxuXHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGxldCBpdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2R1Y3QtaXRlbScpO1xyXG5cdFx0XHRcdFx0Y291bnQgKz0gMjtcclxuXHRcdFx0XHRcdGlmIChjb3VudCA8PSBpdGVtcy5sZW5ndGgpe1xyXG5cdFx0XHRcdFx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aXRlbXNbaV0uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmIChjb3VudCA9PSBpdGVtcy5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0YnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdH1cclxuXHJcbiIsImNvbnN0IHZhbGlkYXRpb25NYWluUGFnZSA9IG5ldyBKdXN0VmFsaWRhdGUoJyNmZWVkYmFjay1mb3JtJyxcclxuICB7XHJcbiAgICBlcnJvckxhYmVsQ3NzQ2xhc3M6ICdpcy1sYWJlbC1pbnZhbGlkJyxcclxuICAgIGZvY3VzSW52YWxpZEZpZWxkOiB0cnVlLFxyXG4gICAgbG9ja0Zvcm06IHRydWUsXHJcbiAgICB0b29sdGlwOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgIH0sXHJcblx0XHR2YWxpZGF0ZUJlZm9yZVN1Ym1pdHRpbmc6IHRydWUsXHJcbiAgfSxcclxuKTtcclxuXHJcbnZhbGlkYXRpb25NYWluUGFnZVxyXG5cclxuICAuYWRkRmllbGQoJyNuYW1lJywgW1xyXG4gICAge1xyXG4gICAgICBydWxlOiAncmVxdWlyZWQnLFxyXG4gICAgICBlcnJvck1lc3NhZ2U6ICfQktGLINC90LUg0LLQstC10LvQuCDQuNC80Y8nLFxyXG4gICAgfSxcclxuXHRcdHtcclxuXHRcdFx0cnVsZTogJ2N1c3RvbVJlZ2V4cCcsXHJcblx0XHRcdHZhbHVlOiAvXihb0JAt0K9dezF9W9CwLdGP0ZFdezEsMjN9KSQvLFxyXG5cdFx0XHRlcnJvck1lc3NhZ2U6ICfQndC10LTQvtC/0YPRgdGC0LjQvNGL0Lkg0YTQvtGA0LzQsNGCJyxcclxuXHRcdH0sXHJcbiAgICB7XHJcbiAgICAgIHJ1bGU6ICdtaW5MZW5ndGgnLFxyXG4gICAgICB2YWx1ZTogMixcclxuICAgICAgZXJyb3JNZXNzYWdlOiAn0JLRiyDQvdC1INCy0LLQtdC70Lgg0LjQvNGPJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHJ1bGU6ICdtYXhMZW5ndGgnLFxyXG4gICAgICB2YWx1ZTogMzAsXHJcbiAgICB9LFxyXG5cclxuICBdKVxyXG5cclxuXHQuYWRkRmllbGQoJyN0ZWwnLCBbXHJcbiAgICB7XHJcbiAgICAgIHJ1bGU6ICdyZXF1aXJlZCcsXHJcbiAgICAgIGVycm9yTWVzc2FnZTogJ9CS0Ysg0L3QtSDQstCy0LXQu9C4INGC0LXQu9C10YTQvtC9JyxcclxuICAgIH0sXHJcblx0XHR7XHJcblx0XHRcdHJ1bGU6ICdudW1iZXInLFxyXG5cdFx0XHRlcnJvck1lc3NhZ2U6ICfQndC10LTQvtC/0YPRgdGC0LjQvNGL0Lkg0YTQvtGA0LzQsNGCJyxcclxuXHRcdH0sXHJcbiAgXSlcclxuXHJcbiAgLmFkZEZpZWxkKCcjZW1haWwnLCBbXHJcbiAgICB7XHJcbiAgICAgIHJ1bGU6ICdyZXF1aXJlZCcsXHJcbiAgICAgIGVycm9yTWVzc2FnZTogJ9CS0Ysg0L3QtSDQstCy0LXQu9C4IGUtbWFpbCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBydWxlOiAnZW1haWwnLFxyXG4gICAgICBlcnJvck1lc3NhZ2U6ICfQndC10LTQvtC/0YPRgdGC0LjQvNGL0Lkg0YTQvtGA0LzQsNGCJyxcclxuICAgIH0sXHJcbiAgXSlcclxuXHJcbiAgLmFkZEZpZWxkKCcjZmVlZGJhY2stY2hlY2snLCBbXHJcbiAgICB7XHJcbiAgICAgIHJ1bGU6ICdyZXF1aXJlZCcsXHJcbiAgICAgIGVycm9yTWVzc2FnZTogJ9Cd0LXQvtCx0YXQvtC00LjQvNC+INC/0L7RgdGC0LDQstC40YLRjCDQs9Cw0LvQvtGH0LrRgycsXHJcbiAgICB9LFxyXG4gIF0pXHJcbiIsImNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYnRuJylcclxuY29uc3QgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1lcnJvcicpXHJcblxyXG5zZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdGUucHJldmVudERlZmF1bHRcclxuXHRlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnc2VhcmNoLWVycm9yLS1hY3RpdmUnKVxyXG5cdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0ZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ3NlYXJjaC1lcnJvci0tYWN0aXZlJylcclxuXHR9LCAzMDAwKTtcclxufSlcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSkgPT4ge1xyXG5cdGlmKGUudGFyZ2V0ID09PSBlcnJvck1lc3NhZ2UpIHtcclxuXHRcdGVycm9yTWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdzZWFyY2gtZXJyb3ItLWFjdGl2ZScpXHJcblx0fVxyXG59KSJdfQ==
