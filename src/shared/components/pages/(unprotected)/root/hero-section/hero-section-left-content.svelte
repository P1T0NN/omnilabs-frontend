<script lang="ts">
    // LIBRARIES
    import { m } from '@/shared/lib/paraglide/messages';

    // CONFIG
    import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/constants';

    // COMPONENTS
    import WordChange from '@/shared/components/ui/animations/word-change.svelte';
    import CtaButton from '@/shared/components/ui/cta-button/cta-button.svelte';

    const heroPhrases = [
		m['RootPage.HeroSection.sell'](),
		m['RootPage.HeroSection.convert'](),
		m['RootPage.HeroSection.scale']()
	] as const;
</script>

<div class="flex flex-col items-start gap-7 flex-1 min-w-0">
    <h1 class="animate-slide-up leading-[0.85] font-black uppercase text-left">
        {#if m['RootPage.HeroSection.line1Prefix']()}
            <span class="text-primary italic normal-case">{m['RootPage.HeroSection.line1Prefix']()}</span>
            <br />
        {/if}
        {m['RootPage.HeroSection.digital']()} <br />
        {m['RootPage.HeroSection.products']()} <br />
        <span class="text-primary lowercase italic">
            {m['RootPage.HeroSection.that']()} <WordChange words={heroPhrases} />
        </span>
    </h1>

    <p class="animate-slide-up-delay-150 text-lg leading-relaxed text-neutral-600 max-w-md text-left">
        <b>{m['RootPage.HeroSection.offerings']()}</b> {m['RootPage.HeroSection.description']()}
    </p>

    <div class="animate-slide-up-delay-300">
        <CtaButton href={UNPROTECTED_PAGE_ENDPOINTS.CONTACT} variant="foreground">
            {m['RootPage.HeroSection.bookAStrategyCall']()}
        </CtaButton>
    </div>
</div>