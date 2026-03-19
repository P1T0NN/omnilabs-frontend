<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	// CONFIG
	import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/constants';

	// HOOKS
	import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver';

	// COMPONENTS
	import CtaButton from '@/shared/components/ui/cta-button/cta-button.svelte';

	let sectionRef: HTMLElement | undefined;
	let inView = $state(false);
	let cleanup: (() => void) | undefined;

	onMount(() => {
		if (!sectionRef) return;
		cleanup = useIntersectionObserver(sectionRef, () => {
			inView = true;
		});
	});

	onDestroy(() => cleanup?.());
</script>

<div
	bind:this={sectionRef}
	class="animate-on-in-view grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24"
	class:in-view={inView}
>
	<div class="flex flex-col gap-8 lg:sticky lg:top-32 lg:h-fit">
		<span class="animate-slide-up block font-bold tracking-widest text-primary uppercase">
			Chapter 01 · Strategy
		</span>

		<h2 class="animate-slide-up-delay-150 font-bold">We Engineer Conversions.</h2>

		<p class="animate-slide-up-delay-300 text-lg leading-relaxed text-neutral-600">
			There are developers who know how to build. There are marketers who know how to sell. We're the rare team that does both — and has for over a decade.
		</p>

		<p class="animate-slide-up-delay-450 text-lg leading-relaxed text-neutral-600">
			That means every page we ship is engineered twice: once for technical precision, once for conversion. Your headlines aren't guesses. Your CTAs aren't defaults. Every word and every screen is placed where the psychology of your buyer expects it.
		</p>
	</div>

	<!-- Chapter 01 Visual: Key conversion principles as bold typographic blocks -->
	<div class="animate-slide-up-delay-300 flex flex-col gap-4">
		<div class="hover-lift border-2 border-black bg-white p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
			<p class="mb-3 text-xs font-bold uppercase tracking-widest text-primary">Hear it from our clients:</p>
			<p class="text-2xl italic leading-snug">
				"We went from 12 bookings a month to 47 in the first 60 days after launch." — Sonya., Founder,
				<a href="https://bgapartman.com" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">BGApartman</a>
			</p>
		</div>

		<div class="flex flex-col gap-4 sm:grid sm:grid-cols-2">
			<div class="hover-lift border-2 border-black bg-black p-6 text-background">
				<p class="mb-1 text-4xl font-black text-primary">73%</p>
				<p class="text-xs font-bold uppercase tracking-widest text-background">of visitors decide in under 8 seconds <span class="italic">(Nielsen Norman Group)</span></p>
			</div>

			<div class="hover-lift border-2 border-black bg-white p-6">
				<p class="text-base leading-relaxed text-neutral-600">
					Our clients average <span class="font-bold text-primary">2.4x more leads</span> in the first 90 days.
				</p>
			</div>
		</div>

		<div class="animate-slide-up-delay-150">
			<CtaButton href={UNPROTECTED_PAGE_ENDPOINTS.CONTACT}>
				Let's Talk About Your Project
			</CtaButton>
		</div>
	</div>
</div>