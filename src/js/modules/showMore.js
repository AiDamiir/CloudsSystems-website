export const ShowMore = () => {
	const showMoreSkillsButton = document.getElementById('showMoreButton')
	const showMoreProjectsButton = document.getElementById(
		'showMoreProjectsButton'
	)
	const hiddenSkills = document.querySelectorAll(
		'.key-skills__item:nth-child(n+11)'
	)
	const hiddenProjects = document.querySelectorAll('.project:nth-child(n+7)')
	function handleShowMoreProjectsButtonClick() {
		hiddenProjects.forEach((item) => item.classList.toggle('hidden'))
		showMoreProjectsButton.textContent = hiddenProjects[0].classList.contains(
			'hidden'
		)
			? 'Показать еще'
			: 'Скрыть'
		if (showMoreProjectsButton.textContent === 'Показать еще') {
			window.location.href = '#completedProjects'
		}
	}
	function handleShowMoreSkillsButtonClick() {
		hiddenSkills.forEach((item) => item.classList.toggle('hidden'))
		showMoreSkillsButton.textContent = hiddenSkills[0].classList.contains(
			'hidden'
		)
			? 'Показать еще'
			: 'Скрыть'
		if (showMoreSkillsButton.textContent === 'Показать еще') {
			window.location.href = '#keySkills'
		}
	}
	showMoreSkillsButton.addEventListener(
		'click',
		handleShowMoreSkillsButtonClick
	)
	showMoreProjectsButton.addEventListener(
		'click',
		handleShowMoreProjectsButtonClick
	)
}
