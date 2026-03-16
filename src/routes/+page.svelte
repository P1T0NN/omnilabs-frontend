<script lang="ts">
	// CONFIG
	import { COMPANY_DATA } from '@/shared/constants';

	// COMPONENTS
	import HeroSection from '@/shared/components/pages/(unprotected)/root/hero-section.svelte';
	import StrategySection from '@/shared/components/pages/(unprotected)/root/strategy-section/strategy-section.svelte';
	import WorkSection from '@/shared/components/pages/(unprotected)/root/work-section/work-section.svelte';
	import TestimonialsSection from '@/shared/components/pages/(unprotected)/root/testimonials-section/testimonials-section.svelte';
	import ProcessSection from '@/shared/components/pages/(unprotected)/root/process-section.svelte';
	import FaqSection from '@/shared/components/pages/(unprotected)/root/faq-section.svelte';
	import CtaSection from '@/shared/components/pages/(unprotected)/root/cta-section.svelte';
</script>

<svelte:head>
	<title>{COMPANY_DATA.NAME}</title>
	<meta name="description" content={COMPANY_DATA.DESCRIPTION} />
</svelte:head>

<div
	class="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white"
>
	<HeroSection />

	<StrategySection />

	<WorkSection />

	<TestimonialsSection />

	<ProcessSection />

	<FaqSection />

	<CtaSection />
</div>
