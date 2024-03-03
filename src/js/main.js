import 'macro-css'
import '../scss/style.scss'
import { particlesJs } from './modules/particlesJs'

document.addEventListener('DOMContentLoaded', () => {
	const navLinks = document.querySelectorAll('#navLink')
	const showMoreSkillsButton = document.getElementById('showMoreButton')
	const showMoreProjectsButton = document.getElementById(
		'showMoreProjectsButton'
	)
	const hiddenSkills = document.querySelectorAll(
		'.key-skills__item:nth-child(n+9)'
	)
	const hiddenProjects = document.querySelectorAll('.project:nth-child(n+7)')
	const stackButtons = document.querySelectorAll('.stack-button')
	const stackContents = document.querySelectorAll('.stack-content')
	const menuNode = document.getElementById('menu')

	let isExpanded = false

	function handleShowMoreSkillsButtonClick() {
		hiddenSkills.forEach((item) => item.classList.toggle('hidden'))
		showMoreSkillsButton.textContent =
			showMoreSkillsButton.textContent === 'Показать еще'
				? 'Скрыть'
				: 'Показать еще'
	}

	function handleShowMoreProjectsButtonClick() {
		hiddenProjects.forEach((project) => project.classList.toggle('hidden'))
		showMoreProjectsButton.textContent = isExpanded ? 'Показать еще' : 'Скрыть'
		isExpanded = !isExpanded
	}

	function handleStackButtonClick(event) {
		const stackButton = event.target.closest('.stack-button')
		if (stackButton) {
			stackButtons.forEach((btn) => {
				if (btn !== stackButton) {
					btn.classList.remove('show')
				}
			})
			stackButton.classList.toggle('show')
			const stackContent = stackButton.nextElementSibling
			stackContents.forEach((el) => {
				el.style.maxHeight =
					el === stackContent && !stackContent.style.maxHeight
						? stackContent.scrollHeight + 'px'
						: null
			})
		}
	}

	function handleMenuIconClick() {
		menuNode.classList.toggle('show')
		document.documentElement.classList.toggle('lock')
	}

	function handleMenuLink() {
		menuNode.classList.remove('show')
		document.documentElement.classList.remove('lock')
	}

	navLinks.forEach((navLink) => {
		navLink.addEventListener('click', handleMenuLink)
	})

	showMoreSkillsButton.addEventListener(
		'click',
		handleShowMoreSkillsButtonClick
	)
	showMoreProjectsButton.addEventListener(
		'click',
		handleShowMoreProjectsButtonClick
	)
	document.addEventListener('click', handleStackButtonClick)
	document
		.getElementById('menuIcon')
		.addEventListener('click', handleMenuIconClick)

	const mySwiper = new Swiper('.swiper-container', {
		slidesPerView: 'auto',
		spaceBetween: 30,
	})

	particlesJs()
})
