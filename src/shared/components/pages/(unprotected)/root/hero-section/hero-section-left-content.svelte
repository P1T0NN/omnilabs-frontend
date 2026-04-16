<script lang="ts">
	// LIBRARIES
	import { m } from '@/shared/lib/paraglide/messages';

	// CONFIG
	import { HERO_IMAGE_HORIZONTAL, UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/constants';

	// COMPONENTS
	import CtaButton from '@/shared/components/ui/cta-button/cta-button.svelte';
	import WordChange from '@/shared/components/ui/animations/word-change.svelte';

	let {
		heroContentRef = $bindable(),
		heroInView
	}: {
		heroContentRef: HTMLElement | undefined;
		heroInView: boolean;
	} = $props();

	const heroPhrases = [
		m['RootPage.HeroSection.sell'](),
		m['RootPage.HeroSection.convert'](),
		m['RootPage.HeroSection.scale']()
	] as const;
</script>

<div
	bind:this={heroContentRef}
	class="hero-content animate-on-in-view flex min-h-0 w-fit max-w-full flex-col items-center gap-4 md:gap-5 lg:w-full lg:max-w-3xl lg:flex-1 lg:items-start lg:justify-center lg:gap-6 lg:pr-4 xl:pr-8"
	class:in-view={heroInView}
>
	<h1
		class="max-w-full text-center text-5xl max-[401px]:text-4xl font-black leading-none uppercase md:text-6xl lg:text-6xl lg:text-left xl:text-7xl 2xl:text-8xl"
	>
		<span class="inline-flex max-w-full flex-col items-center gap-0.5 lg:items-start">
			<span class="block leading-none text-foreground">
				{#if m['RootPage.HeroSection.creates']()}
					{m['RootPage.HeroSection.creates']()} <br />
				{/if}
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
		class="animate-slide-up-delay-150 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground md:text-lg lg:text-left"
	>
		{m['RootPage.HeroSection.subheadlinePrefix']()}
		<span class="font-semibold text-foreground">{m['RootPage.HeroSection.subheadlineBold']()}</span>
		{m['RootPage.HeroSection.subheadlineRest']()}
	</p>

	<div
		class="animate-slide-up-delay-300 flex w-fit max-w-full justify-center lg:mx-0 lg:justify-start"
	>
		<CtaButton
			href={UNPROTECTED_PAGE_ENDPOINTS.CONTACT}
			class="max-[401px]:h-11 max-[401px]:gap-1.5 max-[401px]:px-6 max-[401px]:text-xs max-[401px]:[&_svg]:size-4"
		>
			{m['Header.cta']()}
		</CtaButton>
	</div>

	<img
		src={HERO_IMAGE_HORIZONTAL}
		alt=""
		loading="lazy"
		decoding="async"
		class="hidden h-auto w-full max-w-2xl object-contain sm:mt-8 sm:block md:max-w-3xl lg:hidden"
	/>
</div>
