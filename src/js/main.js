import axios from 'axios'
import 'macro-css'
import '../scss/style.scss'
import { particlesJs } from './modules/particlesJs'

document.addEventListener('DOMContentLoaded', () => {
	const menuNode = document.getElementById('menu')
	const menuIcon = document.getElementById('menuIcon')
	const navLinks = document.querySelectorAll('#navLink')
	const showMoreSkillsButton = document.getElementById('showMoreButton')
	const showMoreProjectsButton = document.getElementById(
		'showMoreProjectsButton'
	)
	const hiddenSkills = document.querySelectorAll(
		'.key-skills__item:nth-child(n+9)'
	)
	const hiddenProjects = document.querySelectorAll('.project:nth-child(n+7)')
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

	function openPopup() {
		popup.classList.toggle('hidden')
		document.documentElement.classList.toggle('lock')
	}

	function closePopup() {
		popup.classList.remove('hidden')
		document.documentElement.classList.toggle('lock')
	}

	async function validateForm() {
		const email = document.getElementById('contactFormEmail').value.trim()
		const name = document.getElementById('contactFormUserName').value.trim()
		const telephone = document.getElementById('contactFormPhone').value.trim()
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

		if (!email || !name || !telephone) {
			document.getElementById('popupMessage').innerHTML =
				'Пожалуйста, заполните все поля формы.'
			openPopup()
			return false
		}

		if (!emailPattern.test(email)) {
			document.getElementById('popupMessage').innerHTML =
				'Пожалуйста, введите корректный адрес электронной почты.'
			openPopup()
			return false
		}

		return true
	}

	async function send(event) {
		event.preventDefault()

		if (!(await validateForm())) {
			return
		}

		const email = document.getElementById('contactFormEmail').value.trim()
		const name = document.getElementById('contactFormUserName').value.trim()
		const telephone = document.getElementById('contactFormPhone').value.trim()
		const data = {
			email: email,
			name: name,
			telephone: telephone,
		}

		try {
			const response = await axios.post('YOUR_API_ENDPOINT', data)
			console.log(response)
			document.getElementById('popupMessage').innerHTML =
				'Данные успешно отправлены.'
			openPopup()
		} catch (error) {
			console.error(error)
			document.getElementById('popupMessage').innerHTML =
				'Произошла ошибка при отправке данных. Пожалуйста, попробуйте снова позже.'
			openPopup()
		}
	}

	document.getElementById('closePopup').addEventListener('click', closePopup)
	navLinks.forEach((navLink) => {
		navLink.addEventListener('click', handleMenuLinkClick)
	})
	showMoreSkillsButton.addEventListener(
		'click',
		handleShowMoreSkillsButtonClick
	)
	showMoreProjectsButton.addEventListener(
		'click',
		handleShowMoreProjectsButtonClick
	)
	document
		.getElementById('handleMenu')
		.addEventListener('click', handleMenuClick)
	document.getElementById('sendForm').addEventListener('click', send)

	const mySwiper = new Swiper('.swiper-container', {
		slidesPerView: 'auto',
		spaceBetween: 30,
	})

	particlesJs()
})
