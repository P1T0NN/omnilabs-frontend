<script lang="ts">
	// LIBRARIES
	import { m } from '@/shared/lib/paraglide/messages';

	// COMPONENTS
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
	class="hero-content animate-on-in-view flex w-full min-w-0 flex-none flex-col items-center justify-center lg:max-w-3xl lg:flex-1 lg:items-start lg:pr-4 xl:pr-8"
	class:in-view={heroInView}
>
	<h1
		class="max-w-full text-center text-4xl font-black leading-none uppercase sm:text-6xl md:text-6xl lg:text-6xl lg:text-left xl:text-7xl 2xl:text-8xl"
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
		class="animate-slide-up-delay-150 mt-4 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground md:text-lg lg:mt-6 lg:text-left"
	>
		{m['RootPage.HeroSection.subheadlinePrefix']()}
		<span class="font-semibold text-foreground">{m['RootPage.HeroSection.subheadlineBold']()}</span>
		{m['RootPage.HeroSection.subheadlineRest']()}
	</p>
</div>
