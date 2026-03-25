<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { m } from '@/shared/lib/paraglide/messages';

	// CONFIG
	import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/constants';

	// HOOKS
	import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver';

	// COMPONENTS
	import CtaButton from '@/shared/components/ui/cta-button/cta-button.svelte';
	import { Link } from '@/shared/components/ui/link';

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
			{m['RootPage.StrategySection.chapter01Eyebrow']()}
		</span>

		<h2 class="animate-slide-up-delay-150 font-bold">{m['RootPage.StrategySection.chapter01Title']()}</h2>

		<p class="animate-slide-up-delay-300 text-lg leading-relaxed text-neutral-600">
			{m['RootPage.StrategySection.chapter01Description01']()}
		</p>

		<p class="animate-slide-up-delay-450 text-lg leading-relaxed text-neutral-600">
			{m['RootPage.StrategySection.chapter01Description02']()}
		</p>
	</div>

	<!-- Chapter 01 Visual: Key conversion principles as bold typographic blocks -->
	<div class="animate-slide-up-delay-300 flex flex-col gap-4">
		<div class="hover-lift border-2 border-black bg-white p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
			<p class="mb-3 text-xs font-bold uppercase tracking-widest text-primary">{m['RootPage.StrategySection.chapter01ClientQuoteLabel']()}</p>
			<p class="text-2xl italic leading-snug">
				{m['RootPage.StrategySection.chapter01ClientQuote']()} {m['RootPage.StrategySection.chapter01ClientRole']()}
				<Link href="https://bgapartman.com" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">BGApartman</Link>
			</p>
		</div>

		<div class="flex flex-col gap-4 sm:grid sm:grid-cols-2">
			<div class="hover-lift border-2 border-black bg-black p-6 text-background">
				<p class="mb-1 text-4xl font-black text-primary">73%</p>
				<p class="text-xs font-bold uppercase tracking-widest text-background">{m['RootPage.StrategySection.chapter01Stat01Text']()} <span class="italic">{m['RootPage.StrategySection.chapter01Stat01Source']()}</span></p>
			</div>

			<div class="hover-lift border-2 border-black bg-white p-6">
				<p class="text-base leading-relaxed text-neutral-600">
					{m['RootPage.StrategySection.chapter01Stat02Prefix']()} <span class="font-bold text-primary">{m['RootPage.StrategySection.chapter01Stat02Highlight']()}</span> {m['RootPage.StrategySection.chapter01Stat02Suffix']()}
				</p>
			</div>
		</div>

		<div class="animate-slide-up-delay-150">
			<CtaButton href={UNPROTECTED_PAGE_ENDPOINTS.CONTACT}>
				{m['RootPage.StrategySection.chapter01Cta']()}
			</CtaButton>
		</div>
	</div>
</div>