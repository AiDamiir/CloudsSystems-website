import '../scss/style.scss'
import { Animate } from './modules/animate'
import { Form } from './modules/form'
import { Menu } from './modules/menu'
import { particlesJs } from './modules/particlesJs'
import { ClosePopup } from './modules/popup'
import { ShowMore } from './modules/showMore'
import { SmoothScroll } from './modules/smoothScroll'
import { SwiperInitialization } from './modules/swiperInitialization'
import { SwitchingTheme } from './modules/switchingTheme'

document.addEventListener('DOMContentLoaded', () => {
	SwiperInitialization()
	SwitchingTheme()
	SmoothScroll()
	Animate()
	Menu()
	ShowMore()
	Form()
	ClosePopup()
	particlesJs()
})
