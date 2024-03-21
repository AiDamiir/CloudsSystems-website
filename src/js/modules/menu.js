export const Menu = () => {
	const navLinks = document.querySelectorAll('#navLink')
	const menuIcon = document.getElementById('menuIcon')
	const menuNode = document.getElementById('menu')
	function handleMenuClick() {
		menuNode.classList.toggle('show')
		menuIcon.classList.toggle('active')
		document.documentElement.classList.toggle('lock')
	}
	function handleMenuLinkClick() {
		menuNode.classList.remove('show')
		menuIcon.classList.remove('active')
		document.documentElement.classList.remove('lock')
	}
	navLinks.forEach((navLink) =>
		navLink.addEventListener('click', handleMenuLinkClick)
	)
	document
		.getElementById('handleMenu')
		.addEventListener('click', handleMenuClick)
}
