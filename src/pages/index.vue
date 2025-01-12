<script setup>
import hero from '../components/home/hero.vue'
import textSection from '../components/home/textSection.vue'
import boxSection from '../components/home/boxSection.vue'
import videoSection from '../components/home/videoSection.vue'
import imageHoverAnim from '../components/home/imageHoverAnim.vue'
import TitleAnim from '../components/UI/TitleAnim.vue'
</script>

<template>
	<main>
		<hero />
		<text-section />
		<div class="imageAnim-block">
			<title-anim class="imageAnim-block__title" :text="'The story of a hidden realm'" />
			<image-hover-anim />
		</div>
		<video-section />
		<box-section />
		<video class="element__video" playsinline="true" webkit-playsinline="true" loop preload="auto" autoplay disablepictureinpicture muted="muted">
		  	<source src="../assets/video/1.mp4" type="video/mp4" />
		</video>
		<text-section />
		<text-section />
		<text-section />
	</main>
</template>

<style lang="scss" scoped>
.imageAnim-block{
	position: relative;
	@include flex(column, center, center, false);
	padding-top: em(60);

	&__title{
		position: absolute;
		top: em(10);
		z-index: 1;;
		mix-blend-mode: difference;
	}
}
</style>