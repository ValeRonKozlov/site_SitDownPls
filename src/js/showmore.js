
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

