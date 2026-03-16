<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	// CONFIG
	import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/constants';

	// HOOKS
	import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver';

	// COMPONENTS
	import WordChange from '@/shared/components/ui/animations/word-change.svelte';
	import CtaButton from '@/shared/components/ui/cta-button/cta-button.svelte';
	import Marquee from '@/shared/components/ui/marquee/marquee.svelte';

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

	const trustedByLinks = [
		{ href: 'https://www.bgapartman.com', label: 'BGApartman' },
		{ href: 'https://followusnyc.com', label: 'FollowUs' },
		{ href: 'https://www.kontentkolektiv.com', label: 'Kontent Kolektiv' },
		{ href: 'https://www.crys-sports.com', label: 'Crys Sports' }
	] as const;
</script>

<section class="relative flex min-h-screen flex-col justify-between pt-24 pb-32 md:pt-20 md:pb-32 overflow-hidden">
	<div class="container mx-auto flex flex-1 items-center max-w-7xl px-6 md:px-12 lg:px-24">
		<div
			bind:this={heroContentRef}
			class="animate-on-in-view flex w-full flex-col items-center justify-center gap-8 pt-10 pb-0 md:pt-20 md:pb-0 text-center hero-content"
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
		</div>
	</div>

	<div class="container mx-auto max-w-7xl flex flex-col gap-4 px-6 md:px-12 lg:px-24">
		<p class="text-center text-lg font-bold text-neutral-500">
			Trusted By
		</p>

		<Marquee>
			{#each [...trustedByLinks, ...trustedByLinks] as link, i (link.href + '-' + i)}
				<a
					href={link.href}
					target="_blank"
					rel="noopener noreferrer"
					class="text-lg font-black tracking-tight text-neutral-400 uppercase transition-colors hover:text-black shrink-0"
					aria-hidden={i >= trustedByLinks.length}
				>
					{link.label}
				</a>
			{/each}
		</Marquee>
	</div>
</section>