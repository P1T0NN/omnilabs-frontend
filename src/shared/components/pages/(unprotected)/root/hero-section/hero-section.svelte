<script lang="ts">
	// SVELTEKIT IMPORTS
	import { onDestroy, onMount } from 'svelte';

	// HOOKS
	import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver';

	// COMPONENTS
	import HeroSectionTrustedBy from './hero-section-trusted-by.svelte';
	import HeroSectionLeftContent from './hero-section-left-content.svelte';
	import HeroSectionRightContent from './hero-section-right-content.svelte';

	let heroContentRef = $state<HTMLElement | undefined>(undefined);
	let heroInView = $state(false);
	let cleanup: (() => void) | undefined;

	onMount(() => {
		if (!heroContentRef) return;
		cleanup = useIntersectionObserver(heroContentRef, () => {
			heroInView = true;
		});
	});

	onDestroy(() => {
		cleanup?.();
	});
</script>

<section
	class="relative isolate flex min-h-screen flex-col bg-background lg:h-screen lg:max-h-screen lg:overflow-hidden"
	aria-labelledby="trusted-by-heading"
>
	<div
		class="container relative z-10 mx-auto flex min-h-0 w-full max-w-8xl flex-1 flex-col justify-center gap-10 px-6 pt-32 pb-6 md:gap-12 md:px-12 md:pb-8 lg:flex-row lg:items-center lg:justify-start lg:gap-8 lg:px-24 lg:pb-0 lg:pt-0 xl:gap-10"
	>
		<HeroSectionLeftContent bind:heroContentRef {heroInView} />

		<HeroSectionRightContent />
	</div>

	<HeroSectionTrustedBy />
</section>
