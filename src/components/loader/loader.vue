<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
	const tlLoader = gsap.timeline()

	tlLoader
	.to('.loader__pixels--el', {
		opacity: 0,
		scale: .25,
		stagger: {
    	  	amount: 1,  // Це тривалість усієї анімації, яку буде розподілено на всі елементи
    	  	from: "random",  // Анімація елементів починається випадково
    	  	delay: () => Math.random() * 0.5,  // Випадкова затримка для кожного елемента (до 0.5 секунди)
    	}
	})
	.fromTo('.loader__title', {
		opacity: 0,
		x: -200
	}, {
		opacity: 1,
		x: 0,
		duration: .5
	}, '-=0.35')
	.to('.loader__pixels--el', {
		opacity: 1,
		scale: 1,
		stagger: {
    	  	amount: 1,  // Це тривалість усієї анімації, яку буде розподілено на всі елементи
    	  	from: "random",  // Анімація елементів починається випадково
    	  	delay: () => Math.random() * 0.5,  // Випадкова затримка для кожного елемента (до 0.5 секунди)
    	}
	})
	.to('.loader', {
		yPercent: -100,
		duration: .35
	})
})
</script>

<template>
	<div class="loader">
		<div class="loader__pixels">
			<div class="loader__pixels--el" v-for="item in 100" :key="item"></div>
		</div>

		<h1 class="loader__title h1-style">
			HELLO!!! IT'S TEST SITE
		</h1>
	</div>	
</template>

<style lang="scss" scoped>
.loader{
	width: 100dvw;
	height: 100dvh;
	background: $tx-w;
	position: fixed;
	top: 0;
	left: 0;
	@include flex(false, center, center, false);

	&__pixels{
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-columns: repeat(10, 1fr);
		grid-template-rows: repeat(10, 1fr);
		
		&--el{
			background: $bg-y;
		}
	}
}
</style>