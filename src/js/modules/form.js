import axios from 'axios'
import { OpenPopup } from './popup'

export const Form = () => {
	async function validateForm() {
		const email = document.getElementById('contactFormEmail').value.trim()
		const name = document.getElementById('contactFormUserName').value.trim()
		const telephone = document.getElementById('contactFormPhone').value.trim()
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		const numericPattern = /^\+?\d+$/
		if (!email || !name || !telephone) {
			document.getElementById('popupMessage').innerHTML =
				'Пожалуйста, заполните все поля формы.'
			OpenPopup()
			return false
		}
		if (!emailPattern.test(email)) {
			document.getElementById('popupMessage').innerHTML =
				'Пожалуйста, введите корректный адрес электронной почты.'
			OpenPopup()
			return false
		}
		if (!numericPattern.test(telephone)) {
			document.getElementById('popupMessage').innerHTML =
				'Пожалуйста, введите корректный номер телефона.'
			OpenPopup()
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
			OpenPopup()
		} catch (error) {
			console.error(error)
			document.getElementById('popupMessage').innerHTML =
				'Произошла ошибка при отправке данных. Пожалуйста, повторите попытку позже.'
			OpenPopup()
		}
	}
	document.getElementById('sendForm').addEventListener('click', send)
}
