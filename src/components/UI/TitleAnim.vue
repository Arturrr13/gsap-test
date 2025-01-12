<script setup>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'

const props = defineProps({
	text: String
})

const title = ref(null)
const mainWrapper = ref(null)

onMounted(() => {
	const titleAnimation = gsap.timeline({
        scrollTrigger: {
          	trigger: mainWrapper.value,
          	start: "bottom 90%",
          	end: "center bottom",
          	toggleActions: "play none none reverse",
        },
    });

    titleAnimation.to(
        title.value,
        {
          	opacity: 1,
          	transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
          	ease: "power2.inOut",
          	stagger: 0.02,
        }
    );
})
</script>

<template>
	<div class="title-animation" ref="mainWrapper">
		<div class="title-animation__text">
			<span 
				class="title-animation__text--letter h1-style"
				ref="title"
				v-for="item in props.text.split('')"
				:key="item"
				:class="{ space: item === ' ' }"
			>
				{{ item }}
			</span>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.title-animation{
	width: 100%;
	overflow: hidden;

	&__text{
		@include flex(false, false, center, false);
		flex-wrap: wrap;
		width: 50%;
		margin: 0 auto;

		&--letter{
			transform: translate3d(em(10), em(51), em(-60)) rotateY(60deg) rotateX(-40deg);
    		transform-origin: 50% 50% em(-150);
    		will-change: opacity, transform;
			display: block;
			color: white;
			opacity: 0;
		}
	}
}

.space{
	width: em(3);
}
</style>