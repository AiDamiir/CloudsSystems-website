export const OpenPopup = () => {
	const popup = document.getElementById('popup')
	popup.classList.toggle('hidden')
}

export const ClosePopup = () => {
	const popup = document.getElementById('popup')
	function closePopup() {
		popup.classList.remove('hidden')
	}
	document.getElementById('closePopup').addEventListener('click', closePopup)
}
