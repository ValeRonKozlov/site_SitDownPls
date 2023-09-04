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