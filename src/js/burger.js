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

