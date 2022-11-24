window.onscroll = () => {
	const header = document.querySelector('header');
	const fixedNav = header.offsetTop;
	const toTop = document.querySelector('#toTop');

	if (window.pageYOffset > fixedNav) {
		header.classList.add('navbar-fixed');
		toTop.classList.remove('hidden');
		toTop.classList.add('flex');
	} else {
		header.classList.remove('navbar-fixed');
		toTop.classList.remove('flex');
		toTop.classList.add('hidden');
	}
};

// hambuger menu
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('hamburger-active');
	navMenu.classList.toggle('hidden');
});

window.addEventListener('click', (e) => {
	if (e.target != navMenu && e.target != hamburger) {
		hamburger.classList.remove('hamburger-active');
		navMenu.classList.add('hidden');
	}
});

// Darkmode
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', () => {
	if (darkToggle.checked) {
		html.classList.add('dark');
		localStorage.theme = 'dark';
	} else {
		html.classList.remove('dark');
		localStorage.theme = 'light';
	}
});

// darkmode toggle position
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
	darkToggle.checked = true;
} else {
	darkToggle.checked = false;
}
