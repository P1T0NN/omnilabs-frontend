<script lang="ts">
	// SVELTEKIT IMPORTS
	import { onDestroy, onMount } from 'svelte';

	// CONFIG
	import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/constants';

	// HOOKS
	import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver';

	// COMPONENTS
	import WordChange from '@/shared/components/ui/animations/word-change.svelte';
	import CtaButton from '@/shared/components/ui/cta-button/cta-button.svelte';
	import HeroSectionTrustedBy from './hero-section-trusted-by.svelte';

	const heroPhrases = ['sell.', 'convert.', 'scale.'] as const;

	let heroContentRef: HTMLElement | undefined;
	let heroInView = false;
	let cleanup: (() => void) | undefined;

	onMount(() => {
		if (!heroContentRef) return;
		cleanup = useIntersectionObserver(heroContentRef, () => {
			heroInView = true;
		});
	});

	onDestroy(() => cleanup?.());

</script>

<section class="relative flex min-h-screen flex-col justify-center overflow-hidden pt-24 md:pt-0">
	<div class="container mx-auto flex flex-1 items-center max-w-7xl px-6 md:px-12 lg:px-24">
		<div
			bind:this={heroContentRef}
			class="animate-on-in-view flex w-full flex-col items-center justify-center gap-8 pt-10 pb-10 md:pt-20 md:pb-20 text-center hero-content"
			class:in-view={heroInView}
		>
			<h1 class="animate-slide-up leading-[0.85] font-black uppercase">
				Digital <br />
				Products <br />
				<span class="text-primary lowercase italic">
					That <WordChange words={heroPhrases} />
				</span>
			</h1>

			<p class="animate-slide-up-delay-150 text-lg leading-relaxed text-neutral-600">
				<b>Booking platforms. Ecommerce stores. Custom web apps.</b> Built to convert from day one.
				We combine marketing strategy with engineering precision to build digital products that don't just look good
			</p>

			<div class="animate-slide-up-delay-300">
				<CtaButton href={UNPROTECTED_PAGE_ENDPOINTS.CONTACT} variant="black">
					Book a Strategy Call
				</CtaButton>
			</div>

			<HeroSectionTrustedBy />
		</div>
	</div>
</section>