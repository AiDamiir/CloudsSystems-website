export const Animate = () => {
	const elementsToAnimate = document.querySelectorAll('.animate-on-scroll')
	const observer = new IntersectionObserver(handleIntersection, {
		threshold: 0.5,
	})
	function handleIntersection(entries, observer) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('animate')
				observer.unobserve(entry.target)
			}
		})
	}
	elementsToAnimate.forEach((element) => {
		observer.observe(element)
	})
}
