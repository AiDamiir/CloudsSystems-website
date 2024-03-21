import Swiper from 'swiper'
import 'swiper/css'

export const SwiperInitialization = () => {
	const mySwiper = new Swiper('.swiper-container', {
		slidesPerView: 'auto',
		spaceBetween: 30,
	})
}
