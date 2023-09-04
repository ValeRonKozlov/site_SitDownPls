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
