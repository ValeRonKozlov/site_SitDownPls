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