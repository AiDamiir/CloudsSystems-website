import 'macro-css'
import '../scss/style.scss'

import { particlesJs } from './modules/particlesJs'

document.addEventListener('DOMContentLoaded', () => {
	const showMoreButton = document.getElementById('showMoreButton')
	const hiddenItems = document.querySelectorAll(
		'.key-skills__item:nth-child(n+9)'
	)

	showMoreButton.addEventListener('click', () => {
		hiddenItems.forEach((item) => item.classList.toggle('hidden'))
		showMoreButton.textContent =
			showMoreButton.textContent === 'Показать еще' ? 'Скрыть' : 'Показать еще'
	})

	document.querySelectorAll('.stack-button').forEach((element) => {
		element.addEventListener('click', () => {
			const stackContent = element.nextElementSibling

			if (stackContent.style.maxHeight) {
				document
					.querySelectorAll('.stack-content')
					.forEach((el) => (el.style.maxHeight = null))
			} else {
				document
					.querySelectorAll('.stack-content')
					.forEach((el) => (el.style.maxHeight = null))
				stackContent.style.maxHeight = stackContent.scrollHeight + 'px'
			}
		})
	})

	particlesJs()
})
