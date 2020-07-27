[...document.querySelectorAll('.dismiss-menu')].forEach((menuItem) => {
	menuItem.addEventListener('click', (event) => {
		document.body.classList.remove('side-panel-open');
	});
});