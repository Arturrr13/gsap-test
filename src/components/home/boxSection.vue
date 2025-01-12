<template>
	<div class="wrapper">
		<div class="box" ref="box">Анімація з прокруткою</div>
	</div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const box = ref(null)

onMounted(() => {
	gsap.from(box.value, {
		scrollTrigger: {
			trigger: box.value,
			start: "top bottom",  // початок анімації
			end: "top top",       // кінець анімації
			scrub: true,          // плавна анімація
			markers: false,         // для тестування, відобразити маркери
		},
		x: -200,
		opacity: 0  
	})
})
</script>
  
<style lang="scss">
.wrapper {
	height: 200vh;
	background: $border-g;
}

.box {
	width: em(200);
	height: em(200);
	background: #3498db;
	margin: em(100) auto;
}
</style>
