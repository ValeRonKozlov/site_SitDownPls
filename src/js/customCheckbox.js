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