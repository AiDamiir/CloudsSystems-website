import axios from 'axios'
import '../scss/style.scss'
import { particlesJs } from './modules/particlesJs'

document.addEventListener('DOMContentLoaded', () => {
	const mySwiper = new Swiper('.swiper-container', {
		slidesPerView: 'auto',
		spaceBetween: 30,
	})

	// Элементы DOM
	const menuNode = document.getElementById('menu')
	const menuIcon = document.getElementById('menuIcon')
	const showMoreSkillsButton = document.getElementById('showMoreButton')
	const showMoreProjectsButton = document.getElementById(
		'showMoreProjectsButton'
	)
	const hiddenSkills = document.querySelectorAll(
		'.key-skills__item:nth-child(n+11)'
	)
	const hiddenProjects = document.querySelectorAll('.project:nth-child(n+7)')
	const navLinks = document.querySelectorAll('#navLink')
	const smoothLinks = document.querySelectorAll('#smoothScroll')
	const popup = document.getElementById('popup')

	// Переменные состояния
	let isExpanded = false
	let isLightTheme = false

	// Обработчик переключения темы
	function handleThemeToggle() {
		const imageElement = document.getElementById('themeIcon')
		document.documentElement.classList.toggle('light-theme')
		if (isLightTheme) {
			imageElement.src = './images/dark-theme-icon.svg'
		} else {
			imageElement.src = './images/light-theme-icon.svg'
		}
		menuNode.classList.remove('show')
		menuIcon.classList.remove('active')
		document.documentElement.classList.remove('lock')
		isLightTheme = !isLightTheme
	}

	// Обработчик переключения темы (mobile)
	function handleThemeToggleMobile() {
		const imageElement = document.getElementById('themeIconMobile')
		document.documentElement.classList.toggle('light-theme')
		if (isLightTheme) {
			imageElement.src = './images/dark-theme-icon.svg'
		} else {
			imageElement.src = './images/light-theme-icon-mobile.svg'
		}
		menuNode.classList.remove('show')
		menuIcon.classList.remove('active')
		document.documentElement.classList.remove('lock')
		isLightTheme = !isLightTheme
	}

	// Обработчик плавного скролла
	function handleSmoothScroll(event) {
		event.preventDefault()
		const id = this.getAttribute('href')
		document.querySelector(id).scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
	}

	// Обработчик клика на ссылку в меню для плавного прокручивания
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

	// Обработчик клика на кнопку "Показать еще" навыков
	function handleShowMoreSkillsButtonClick() {
		hiddenSkills.forEach((item) => item.classList.toggle('hidden'))
		showMoreSkillsButton.textContent =
			showMoreSkillsButton.textContent === 'Показать еще'
				? 'Скрыть'
				: 'Показать еще'
		if (showMoreSkillsButton.textContent === 'Показать еще') {
			window.location.href = '#keySkills'
		}
	}

	// Обработчик клика на кнопку "Показать еще" проектов
	function handleShowMoreProjectsButtonClick() {
		hiddenProjects.forEach((project) => project.classList.toggle('hidden'))
		showMoreProjectsButton.textContent = isExpanded ? 'Показать еще' : 'Скрыть'
		isExpanded = !isExpanded
		if (!isExpanded) {
			window.location.href = '#completedProjects'
		}
	}

	// Обработчик клика на иконку меню (мобильная)
	function handleMenuClick() {
		menuNode.classList.toggle('show')
		menuIcon.classList.toggle('active')
		document.documentElement.classList.toggle('lock')
	}

	// Обработчик клика на ссылку меню
	function handleMenuLinkClick() {
		menuNode.classList.remove('show')
		menuIcon.classList.remove('active')
		document.documentElement.classList.remove('lock')
	}

	// Открытие попапа
	function openPopup() {
		popup.classList.toggle('hidden')
	}

	// Закрытие попапа
	function closePopup() {
		popup.classList.remove('hidden')
	}

	// Валидация формы
	async function validateForm() {
		const email = document.getElementById('contactFormEmail').value.trim()
		const name = document.getElementById('contactFormUserName').value.trim()
		const telephone = document.getElementById('contactFormPhone').value.trim()
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		const numericPattern = /^\+?\d+$/

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

		if (!numericPattern.test(telephone)) {
			document.getElementById('popupMessage').innerHTML =
				'Пожалуйста, введите корректный номер телефона.'
			openPopup()
			return false
		}

		return true
	}

	// Отправка формы
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
				'Произошла ошибка при отправке данных. Пожалуйста, повторите попытку позже.'
			openPopup()
		}
	}

	document
		.getElementById('themeToggle')
		.addEventListener('click', handleThemeToggle)
	document
		.getElementById('themeToggleMobile')
		.addEventListener('click', handleThemeToggleMobile)
	smoothLinks.forEach((smoothLink) =>
		smoothLink.addEventListener('click', handleSmoothScroll)
	)
	navLinks.forEach((navLink) =>
		navLink.addEventListener('click', handleMenuLinkClick)
	)
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
	document.getElementById('closePopup').addEventListener('click', closePopup)

	particlesJs()
})
