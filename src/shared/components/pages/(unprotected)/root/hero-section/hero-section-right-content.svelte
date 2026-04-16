<script lang="ts">
	// CONFIG
	import { HERO_IMAGE_VERTICAL } from '@/shared/constants';
</script>

<div
	class="hidden min-h-0 w-full shrink-0 justify-center lg:flex lg:w-[40%] lg:translate-y-14 lg:justify-end"
>
	<img
		src={HERO_IMAGE_VERTICAL}
		alt=""
		loading="eager"
		fetchpriority="high"
		decoding="async"
		class="mx-auto h-auto w-full max-w-[min(100%,28rem)] object-contain sm:max-w-2xl md:max-w-3xl lg:mx-0 lg:max-w-none lg:w-full min-[1024px]:scale-140 min-[1050px]:scale-125 min-[1200px]:scale-115 xl:scale-105 2xl:scale-100"
	/>
</div>
