export const SwitchingTheme = () => {
	const menuIcon = document.getElementById('menuIcon')
	const menuNode = document.getElementById('menu')
	let isLightTheme =
		window.matchMedia &&
		window.matchMedia('(prefers-color-scheme: light)').matches
	window
		.matchMedia('(prefers-color-scheme: light)')
		.addEventListener('change', (e) => {
			if (e.matches) {
				document.getElementById('themeIcon').src =
					'./images/light-theme-icon.svg'
				document.getElementById('themeIconMobile').src =
					'./images/light-theme-icon-mobile.svg'
				isLightTheme = true
			} else {
				document.getElementById('themeIcon').src =
					'./images/dark-theme-icon.svg'
				document.getElementById('themeIconMobile').src =
					'./images/dark-theme-icon.svg'
				isLightTheme = false
			}
		})
	function handleThemeToggle() {
		const imageElement = document.getElementById('themeIcon')
		document.documentElement.classList.toggle('theme-active')
		if (
			isLightTheme ||
			window.matchMedia('(prefers-color-scheme: light)').matches
		) {
			imageElement.src = './images/dark-theme-icon.svg'
		} else {
			imageElement.src = './images/light-theme-icon.svg'
		}
		menuNode.classList.remove('show')
		menuIcon.classList.remove('active')
		document.documentElement.classList.remove('lock')
		isLightTheme = !isLightTheme
	}
	function handleThemeToggleMobile() {
		const imageElement = document.getElementById('themeIconMobile')
		document.documentElement.classList.toggle('theme-active')
		if (
			isLightTheme ||
			window.matchMedia('(prefers-color-scheme: light)').matches
		) {
			imageElement.src = './images/dark-theme-icon.svg'
		} else {
			imageElement.src = './images/light-theme-icon-mobile.svg'
		}
		menuNode.classList.remove('show')
		menuIcon.classList.remove('active')
		document.documentElement.classList.remove('lock')
		isLightTheme = !isLightTheme
	}
	document
		.getElementById('themeToggle')
		.addEventListener('click', handleThemeToggle)
	document
		.getElementById('themeToggleMobile')
		.addEventListener('click', handleThemeToggleMobile)
}
