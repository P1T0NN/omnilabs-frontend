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

	const digitalClasses = ['text-foreground', 'text-primary', 'text-muted-foreground'] as const;

	/** Foreground only while “Digital products” is primary (index 1); otherwise primary. */
	const thatLineClass = (idx: number) =>
		digitalClasses[idx] === 'text-primary' ? 'text-foreground' : 'text-primary';

	let heroContentRef: HTMLElement | undefined;
	let heroInView = $state(false);
	let activeIndex = $state(0);
	/** Previous phrase index; lags `activeIndex` until the color fill animation finishes. */
	let prevIndex = $state(0);
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

	$effect(() => {
		const next = activeIndex;
		if (next === prevIndex) return;
		const timer = setTimeout(() => {
			prevIndex = next;
		}, 500);
		return () => clearTimeout(timer);
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
			<h1 class="animate-slide-up text-center font-black leading-none uppercase lg:text-left">
				<span class="inline-flex max-w-full flex-col items-center gap-0.5 lg:items-start">
					{#if prevIndex === activeIndex}
						<span class="block leading-none {digitalClasses[activeIndex]}">
							{m['RootPage.HeroSection.digital']()} <br />
							{m['RootPage.HeroSection.products']()} <br />
						</span>
					{:else}
						<span class="relative block leading-none">
							<span
								class="pointer-events-none absolute inset-0 block select-none leading-none {digitalClasses[prevIndex]}"
								aria-hidden="true"
							>
								{m['RootPage.HeroSection.digital']()} <br />
								{m['RootPage.HeroSection.products']()} <br />
							</span>
							{#key activeIndex}
								<span class="hero-digital-fill relative block leading-none {digitalClasses[activeIndex]}">
									{m['RootPage.HeroSection.digital']()} <br />
									{m['RootPage.HeroSection.products']()} <br />
								</span>
							{/key}
						</span>
					{/if}

					<span
						class="inline lowercase italic leading-none transition-colors duration-500 ease-out {thatLineClass(activeIndex)}"
					>
						{m['RootPage.HeroSection.that']()}
						<WordChange words={heroPhrases} bind:activeIndex={activeIndex} />
					</span>
				</span>
			</h1>
		</div>

		<div class="flex min-h-0 w-full shrink justify-center lg:w-1/2 lg:max-w-2xl lg:translate-y-14 lg:justify-end xl:max-w-3xl">
			<img
				src="/home/hero-image.png"
				alt=""
				class="h-auto max-h-full w-full max-w-xs object-contain sm:max-w-sm md:max-w-md lg:max-w-full"
				decoding="async"
				fetchpriority="high"
			/>
		</div>
	</div>

	<HeroSectionTrustedBy />
</section>

<style>
	@keyframes hero-digital-clip-up {
		from {
			clip-path: inset(0 0 100% 0);
		}
		to {
			clip-path: inset(0 0 0 0);
		}
	}

	.hero-digital-fill {
		clip-path: inset(0 0 100% 0);
		animation: hero-digital-clip-up 500ms ease-out forwards;
	}

	.trusted-by-normal-case {
		text-transform: none;
	}
	.trusted-by-gradient-text {
		background: linear-gradient(135deg, #e94590 0%, #6c63ff 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}
	.trusted-by-bgapartman {
		color: oklch(0.7 0.18 65);
	}
	.trusted-by-followus {
		white-space: nowrap;
	}
	.trusted-by-followus-us {
		color: oklch(0.42 0.12 25);
	}
</style>
