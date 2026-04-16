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
	class="relative isolate flex max-lg:h-svh flex-col gap-8 overflow-hidden bg-background lg:h-screen lg:max-h-screen"
	aria-labelledby="trusted-by-heading"
>
	<div
		class="container relative z-10 mx-auto box-border flex min-h-0 w-full max-w-8xl flex-1 flex-col items-center px-6 pb-0 pt-(--site-header-offset) md:px-12 md:pb-8 lg:px-24 lg:pb-0 lg:pt-(--site-header-offset)"
	>
		<div
			class="flex w-full min-h-0 flex-1 flex-col items-center justify-center gap-10 md:gap-12 lg:flex-row lg:items-center lg:justify-center lg:gap-8 xl:gap-10"
		>
			<HeroSectionLeftContent bind:heroContentRef {heroInView} />

			<HeroSectionRightContent />
		</div>

		<div
			class="w-full shrink-0 md:hidden min-h-[min(32vw,14rem)]"
			aria-hidden="true"
		></div>
	</div>

	<div class="shrink-0">
		<HeroSectionTrustedBy />
	</div>
</section>
