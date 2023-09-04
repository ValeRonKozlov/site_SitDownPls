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

