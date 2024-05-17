'use strict';

const navMenu = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');
const headerIcon = document.querySelector('.header__icon');
const body = document.body;

headerIcon.addEventListener('click', buttonHandler);
navLinks.forEach((link) => link.addEventListener('click', itemLinkHandler));

function buttonHandler() {
	if (!navMenu.classList.contains('active')) {
		navMenu.classList.add('active');
		body.classList.add('lock');
		headerIcon.classList.add('active');
		window.scrollTo(0, 0);
	} else {
		navMenu.classList.remove('active');
		body.classList.remove('lock');
		headerIcon.classList.remove('active');
	}
}

function itemLinkHandler() {
	navMenu.classList.remove('active');
	body.classList.remove('lock');
	headerIcon.classList.remove('active');
}
