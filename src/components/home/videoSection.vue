<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'
import TitleAnim from '../UI/TitleAnim.vue'

onMounted(() => {
	ScrollTrigger.refresh()

	let video = document.querySelector('.element__video')
	if (video != undefined) {
			//video.play();
			video.currentTime = 0
			video.pause();
	}

	video.addEventListener('loadedmetadata', () => {
		const tlVideo = gsap.timeline({
			scrollTrigger: {
				trigger: '.video-section__video-wr',
				start: "center center",  // початок анімації
				end: "+=3500 center",       // кінець анімації
				scrub: 0.5,          // плавна анімація
				markers: true,         // для тестування, відобразити маркери
				pin: true,
				pinSpacing: true
			}
		})
	
		tlVideo
		.to('.video-section__video-wr--video', {
			width: '100vw',
			height: '100vh',
			borderRadius: 0,
			duration: 1  // Тривалість четвертої анімації
		})
		.to('.element:nth-child(2)', {
			clipPath: 'inset(0% 0% 0% 0%)',
			duration: 1
		})
		.to('.element:nth-child(3)', {
			clipPath: 'inset(0% 0% 0% 0%)',
			duration: 1
		})
		.to('.element:nth-child(4)', {
			clipPath: 'inset(0% 0% 0% 0%)',
			duration: 1
		})
		.to(video, {
			currentTime: video.duration,
			ease: "none",
			duration: 4  // Збільшуємо тривалість для анімації відео  
		})
	})
})
</script>

<template>
	<div class="video-section">
		<title-anim :text="'Some title text'" />

		<div class="video-section__video-wr">
			<div class="video-section__video-wr--video">
				<div class="element">
					<img src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp" alt="gigachad" loading="lazy">
				</div>
				<div class="element">
					<img src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure-cartoon-netwrok-1024x683.jpg" alt="gigachad" loading="lazy">
				</div>
				<div class="element">
					<img src="https://platinumlist.net/guide/wp-content/uploads/2023/03/c0e9c490-b7e7-47a6-9c43-3e10e8ddc9cb-4445-dubai-img-worlds-of-adventure-tickets-08-1024x639.jpg" alt="gigachad" loading="lazy">
				</div>
				<div class="element">
					<video class="element__video" playsinline="true" autoplay webkit-playsinline="true" loop preload="auto" disablepictureinpicture muted="muted">
					  	<source src="../../assets/video/1.mp4" type="video/mp4" />
					</video>
				</div>
			</div>
		</div>
	</div>	
</template>

<style lang="scss" scoped>
.video-section{
	//min-height: 100dvh;
	@include flex(column, center, center, false);
	overflow: hidden;

	&__video-wr{
		height: 100vh;
		width: 100vw;

		&--video{
			width: 50vw;
			// height: 25vw;
			aspect-ratio: 16 / 9;
			border-radius: em(35);
			overflow: hidden;
			margin: 0 auto;
			position: relative;
		}
	}
}

.element{
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;

	@for $i from 2 through 4 {
		&:nth-child(#{$i}){
			clip-path: inset(0% 0% 100% 0%);
		}
	}
}
</style>