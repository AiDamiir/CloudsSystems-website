export const SmoothScroll = () => {
	const navLinks = document.querySelectorAll('#navLink')
	const smoothLinks = document.querySelectorAll('#smoothScroll')
	function handleSmoothScroll(event) {
		event.preventDefault()
		const id = this.getAttribute('href')
		document.querySelector(id).scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
	}
	for (let link of navLinks) {
		link.addEventListener('click', function (e) {
			e.preventDefault()
			const id = link.getAttribute('href')
			document.querySelector(id).scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			})
		})
	}
	smoothLinks.forEach((smoothLink) =>
		smoothLink.addEventListener('click', handleSmoothScroll)
	)
}
