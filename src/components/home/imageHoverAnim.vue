<script setup>
import { ref } from 'vue'
import gsap from "gsap"

const image = ref(null)

const handleMouseMove = (e) => {
	const { clientX, clientY } = e
	const element = image.value

	if (!element) return

	const rect = element.getBoundingClientRect()
	const xPos = clientX - rect.left
	const yPos = clientY - rect.top

	const centerX = rect.width / 2;
	const centerY = rect.height / 2;

	const rotateX = ((yPos - centerY) / centerY) * -10;
	const rotateY = ((xPos - centerX) / centerX) * 10;

	gsap.to(element, {
		duration: 0.3,
		rotateX,
		rotateY,
		transformPerspective: 500,
		ease: "power1.inOut",
	})
}

const handleMouseLeave = () => {
	const element = image.value

	if (element) {
		gsap.to(element, {
			duration: 0.3,
			rotateX: 0,
			rotateY: 0,
			ease: "power1.inOut",
		})
	}
};
</script>

<template>
	<div class="image-wr">
		<div class="image-wr__mask">
			<img ref="image" class="image-wr__mask--el" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave"
				src="../../assets/image/entrance.webp" alt="entrance" loading="lazy">
		</div>
	</div>
</template>

<style lang="scss" scoped>
.image-wr{
	overflow: hidden;
	position: relative;
	width: 100%;

	&__mask{
		clip-path: polygon(4% 0, 83% 21%, 100% 73%, 0% 100%);

		&--el{
			scale: 1.5;
		}
	}
}
</style>