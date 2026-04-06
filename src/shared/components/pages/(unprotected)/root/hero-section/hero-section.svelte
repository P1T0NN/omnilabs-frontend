<script lang="ts">
	// SVELTEKIT IMPORTS
	import { onDestroy, onMount } from 'svelte';

	// LIBRARIES
	import { m } from '@/shared/lib/paraglide/messages';

	// HOOKS
	import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver';

	// COMPONENTS
	import WordChange from '@/shared/components/ui/animations/word-change.svelte';
	import HeroSectionTrustedBy from './hero-section-trusted-by.svelte';

	const heroPhrases = [
		m['RootPage.HeroSection.sell'](),
		m['RootPage.HeroSection.convert'](),
		m['RootPage.HeroSection.scale']()
	] as const;

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

<section
	class="relative isolate flex min-h-screen flex-col bg-background lg:h-screen lg:max-h-screen lg:overflow-hidden"
	aria-labelledby="trusted-by-heading"
>
	<div
		class="container relative z-10 mx-auto flex min-h-0 w-full max-w-8xl flex-1 flex-col justify-center gap-2 px-6 pt-28 pb-8 md:gap-6 md:px-12 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-24 lg:pt-0 lg:pb-0"
	>
		<div
			bind:this={heroContentRef}
			class="hero-content animate-on-in-view flex w-full flex-col items-center justify-center lg:max-w-2xl lg:flex-none lg:items-start"
			class:in-view={heroInView}
		>
			<h1 class="text-center font-black leading-none uppercase lg:text-left">
				<span class="inline-flex max-w-full flex-col items-center gap-0.5 lg:items-start">
					<span class="block leading-none text-foreground">
						{m['RootPage.HeroSection.digital']()} <br />
						{m['RootPage.HeroSection.products']()} <br />
					</span>

					<span class="animate-slide-up inline lowercase italic leading-none text-primary">
						{m['RootPage.HeroSection.that']()}
						<WordChange words={heroPhrases} />
					</span>
				</span>
			</h1>

			<p
				class="animate-slide-up-delay-150 mt-4 max-w-xl text-center text-base leading-relaxed text-muted-foreground md:text-lg lg:mt-6 lg:text-left"
			>
				{m['RootPage.HeroSection.subheadline']()}
			</p>
		</div>

		<div class="flex min-h-0 w-full shrink justify-center lg:w-1/2 lg:max-w-2xl lg:translate-y-14 lg:justify-end xl:max-w-3xl">
			<img
				src="/home/hero-image.png"
				alt=""
				class="h-auto max-h-full w-full max-w-xs object-contain sm:max-w-sm md:max-w-md lg:max-w-full"
				decoding="async"
				fetchpriority="high"
			/>
			<!--
			<video
				class="h-auto max-h-full w-full max-w-xs object-contain sm:max-w-sm md:max-w-md lg:max-w-full"
				autoplay
				muted
				loop
				playsinline
				preload="metadata"
				aria-hidden="true"
			>
				<source src="/home/hero-video.webm" type="video/webm" />
			</video>
			-->
		</div>
	</div>

	<HeroSectionTrustedBy />
</section>
