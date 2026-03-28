<script lang="ts">
	// SVELTEKIT IMPORTS
	import { onDestroy, onMount } from 'svelte';

	// HOOKS
	import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver';

	// COMPONENTS
	import HeroSectionLeftContent from './hero-section-left-content.svelte';
	import HeroSectionRightContent from './hero-section-right-content.svelte';

	let heroContentRef: HTMLElement | undefined;
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

<!--
	Layout strategy:
	  - The section is full-viewport-width with NO outer horizontal padding.
	  - Left (45%): has its own px-6/md:px-12/lg:px-24 padding so text lines up
	    with the rest of the page content. max-w-8xl is preserved on the inner wrapper.
	  - Right (55%): zero padding, zero margin, butts against the right viewport edge.
	    The video inside fills this column 100% width + height.
	  - Mobile: stacks vertically — text first, then video full-width.
-->
<section class="relative flex min-h-screen flex-col justify-center overflow-hidden pt-24 sm:p-0">
	<div
		bind:this={heroContentRef}
		class="hero-content animate-on-in-view flex w-full flex-col
		       lg:flex-row lg:items-stretch"
		class:in-view={heroInView}
	>

		<!-- LEFT — 45% · padded · vertically centred -->
		<div
			class="flex flex-col justify-center
			       px-6 md:px-12 lg:px-24
			       pt-14 pb-10 md:pt-24 md:pb-20
			       lg:w-[45%] lg:py-0 lg:min-h-screen"
		>
			<!-- max-w-8xl keeps text from stretching too wide on ultra-wide screens -->
			<div class="w-full max-w-8xl">
				<HeroSectionLeftContent />
			</div>
		</div>

		<!-- RIGHT — 55% · no padding · video bleeds to viewport edge -->
		<div
			class="w-full lg:w-[55%] lg:shrink-0
			       h-64 sm:h-80 lg:h-auto lg:min-h-screen"
		>
			<HeroSectionRightContent />
		</div>

	</div>
</section>