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


const category = document.getElementById('chekbox-category-title')
const categoryList = document.getElementById('chekbox-category-list')
const price = document.getElementById('checkbox-price-title')
const priceList = document.getElementById('checkbox-price-list')
const discount = document.getElementById('checkbox-discount-title')
const discountList = document.getElementById('checkbox-discount-list')
const color = document.getElementById('checkbox-color-title')
const colorList = document.getElementById('checkbox-color-list')

category.addEventListener('click', () => {
	category.classList.toggle('checkbox-title--active')
	categoryList.classList.toggle('chekbox-category-list--active')
})
price.addEventListener('click', () => {
	price.classList.toggle('checkbox-title--active')
	priceList.classList.toggle('checkbox-price-list--active')
})
discount.addEventListener('click', () => {
	discount.classList.toggle('checkbox-title--active')
	discountList.classList.toggle('checkbox-discount-list--active')
})
color.addEventListener('click', () => {
	color.classList.toggle('checkbox-title--active')
	colorList.classList.toggle('checkbox-color-list--active')
})
// swiper в каталоге 
const swiper9 = new Swiper(".catalog-swiper", {

	pagination: {
		el: ".catalogue__paginate",
		clickable: true,
		
		renderBullet: 
		function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + "</span>";
		},
	},
	breakpoints: {

    320: {
			spaceBetween: 0,
			slidesPerColumn: 6,
			grid: {
				rows: 6,
			},
    },

		500: {
			spaceBetween: 0,
			slidesPerColumn: 6,
			grid: {
				rows: 6,
			},
		},

    769: {
			spaceBetween: 16,
			slidesPerColumn: 9,
			grid: {
				rows: 9,
			},
    },

	}
});

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1cmdlci5qcyIsInNlbGVjdC5qcyIsImN1c3RvbUNoZWNrYm94LmpzIiwiY2F0YWxvZy1zd2lwZXIuanMiLCJzZWFyY2gtZXJyb3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiY2F0YWxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyJyk7XHJcbmxldCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pZGRsZS1uYXYnKTtcclxubGV0IG1lbnVUb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wLW5hdicpO1xyXG5sZXQgbWVudUxpbmtzID0gbWVudS5xdWVyeVNlbGVjdG9yQWxsKCcubWlkZGxlLWxpbmsnKTtcclxubGV0IGJ1cmdlckNsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1cmdlcl9fY2xvc2UtYnRuJyk7XHJcblxyXG5idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBidXJnZXJDbG9zZS5jbGFzc0xpc3QuYWRkKCdidXJnZXItLWFjdGl2ZScpO1xyXG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdtaWRkbGUtbmF2LS1hY3RpdmUnKTtcclxuICAgIG1lbnVUb3AuY2xhc3NMaXN0LmFkZCgndG9wLW5hdi1hY3RpdmUnKTtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnc3RvcC1zY3JvbGwnKTtcclxuICB9KVxyXG5cclxuYnVyZ2VyQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0YnVyZ2VyQ2xvc2UuY2xhc3NMaXN0LnJlbW92ZSgnYnVyZ2VyLS1hY3RpdmUnKTtcclxuXHRtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21pZGRsZS1uYXYtLWFjdGl2ZScpO1xyXG5cdG1lbnVUb3AuY2xhc3NMaXN0LnJlbW92ZSgndG9wLW5hdi1hY3RpdmUnKTtcclxuXHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3N0b3Atc2Nyb2xsJyk7XHJcbn0pXHJcblxyXG4iLCJjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdEN1c3RvbScpO1xyXG5jb25zdCBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKTtcclxuXHJcbnNlbGVjdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG5cdGNvbnN0IGNob2ljZXMgPSBuZXcgQ2hvaWNlcyhlbGVtZW50LCB7XHJcblx0XHRzZWFyY2hFbmFibGVkOiBmYWxzZSxcclxuXHRcdHNob3VsZFNvcnQ6IGZhbHNlLFxyXG5cdFx0ZHVwbGljYXRlSXRlbXNBbGxvd2VkOiBmYWxzZSxcclxuXHRcdGVkaXRJdGVtczogdHJ1ZSxcclxuXHR9KTtcclxufSk7XHJcblxyXG4iLCJjb25zdCBjYXRlZ29yeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGVrYm94LWNhdGVnb3J5LXRpdGxlJylcclxuY29uc3QgY2F0ZWdvcnlMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoZWtib3gtY2F0ZWdvcnktbGlzdCcpXHJcbmNvbnN0IHByaWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoZWNrYm94LXByaWNlLXRpdGxlJylcclxuY29uc3QgcHJpY2VMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoZWNrYm94LXByaWNlLWxpc3QnKVxyXG5jb25zdCBkaXNjb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGVja2JveC1kaXNjb3VudC10aXRsZScpXHJcbmNvbnN0IGRpc2NvdW50TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGVja2JveC1kaXNjb3VudC1saXN0JylcclxuY29uc3QgY29sb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2tib3gtY29sb3ItdGl0bGUnKVxyXG5jb25zdCBjb2xvckxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2tib3gtY29sb3ItbGlzdCcpXHJcblxyXG5jYXRlZ29yeS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRjYXRlZ29yeS5jbGFzc0xpc3QudG9nZ2xlKCdjaGVja2JveC10aXRsZS0tYWN0aXZlJylcclxuXHRjYXRlZ29yeUxpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnY2hla2JveC1jYXRlZ29yeS1saXN0LS1hY3RpdmUnKVxyXG59KVxyXG5wcmljZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRwcmljZS5jbGFzc0xpc3QudG9nZ2xlKCdjaGVja2JveC10aXRsZS0tYWN0aXZlJylcclxuXHRwcmljZUxpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnY2hlY2tib3gtcHJpY2UtbGlzdC0tYWN0aXZlJylcclxufSlcclxuZGlzY291bnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0ZGlzY291bnQuY2xhc3NMaXN0LnRvZ2dsZSgnY2hlY2tib3gtdGl0bGUtLWFjdGl2ZScpXHJcblx0ZGlzY291bnRMaXN0LmNsYXNzTGlzdC50b2dnbGUoJ2NoZWNrYm94LWRpc2NvdW50LWxpc3QtLWFjdGl2ZScpXHJcbn0pXHJcbmNvbG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdGNvbG9yLmNsYXNzTGlzdC50b2dnbGUoJ2NoZWNrYm94LXRpdGxlLS1hY3RpdmUnKVxyXG5cdGNvbG9yTGlzdC5jbGFzc0xpc3QudG9nZ2xlKCdjaGVja2JveC1jb2xvci1saXN0LS1hY3RpdmUnKVxyXG59KSIsIi8vIHN3aXBlciDQsiDQutCw0YLQsNC70L7Qs9C1IFxyXG5jb25zdCBzd2lwZXI5ID0gbmV3IFN3aXBlcihcIi5jYXRhbG9nLXN3aXBlclwiLCB7XHJcblxyXG5cdHBhZ2luYXRpb246IHtcclxuXHRcdGVsOiBcIi5jYXRhbG9ndWVfX3BhZ2luYXRlXCIsXHJcblx0XHRjbGlja2FibGU6IHRydWUsXHJcblx0XHRcclxuXHRcdHJlbmRlckJ1bGxldDogXHJcblx0XHRmdW5jdGlvbiAoaW5kZXgsIGNsYXNzTmFtZSkge1xyXG5cdFx0XHRyZXR1cm4gJzxzcGFuIGNsYXNzPVwiJyArIGNsYXNzTmFtZSArICdcIj4nICsgKGluZGV4ICsgMSkgKyBcIjwvc3Bhbj5cIjtcclxuXHRcdH0sXHJcblx0fSxcclxuXHRicmVha3BvaW50czoge1xyXG5cclxuICAgIDMyMDoge1xyXG5cdFx0XHRzcGFjZUJldHdlZW46IDAsXHJcblx0XHRcdHNsaWRlc1BlckNvbHVtbjogNixcclxuXHRcdFx0Z3JpZDoge1xyXG5cdFx0XHRcdHJvd3M6IDYsXHJcblx0XHRcdH0sXHJcbiAgICB9LFxyXG5cclxuXHRcdDUwMDoge1xyXG5cdFx0XHRzcGFjZUJldHdlZW46IDAsXHJcblx0XHRcdHNsaWRlc1BlckNvbHVtbjogNixcclxuXHRcdFx0Z3JpZDoge1xyXG5cdFx0XHRcdHJvd3M6IDYsXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cclxuICAgIDc2OToge1xyXG5cdFx0XHRzcGFjZUJldHdlZW46IDE2LFxyXG5cdFx0XHRzbGlkZXNQZXJDb2x1bW46IDksXHJcblx0XHRcdGdyaWQ6IHtcclxuXHRcdFx0XHRyb3dzOiA5LFxyXG5cdFx0XHR9LFxyXG4gICAgfSxcclxuXHJcblx0fVxyXG59KTtcclxuIiwiY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1idG4nKVxyXG5jb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWVycm9yJylcclxuXHJcbnNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0ZS5wcmV2ZW50RGVmYXVsdFxyXG5cdGVycm9yTWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtZXJyb3ItLWFjdGl2ZScpXHJcblx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnc2VhcmNoLWVycm9yLS1hY3RpdmUnKVxyXG5cdH0sIDMwMDApO1xyXG59KVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKSA9PiB7XHJcblx0aWYoZS50YXJnZXQgPT09IGVycm9yTWVzc2FnZSkge1xyXG5cdFx0ZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ3NlYXJjaC1lcnJvci0tYWN0aXZlJylcclxuXHR9XHJcbn0pIl19
