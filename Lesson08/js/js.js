let navlist = document.querySelectorAll('.itemMenu');

for (let i = 0; i < navlist.length; i++) {
	navlist[i].addEventListener('click', function() {
		for (let x = 0; x < navlist.length; x++) {
			if (navlist[x] == this) {
				navlist[x].classList.add('active');
			} else {
				navlist[x].classList.remove('active');
			}
		}
	});
}