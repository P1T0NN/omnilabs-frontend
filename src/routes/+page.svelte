<script lang="ts">
    // COMPONENTS
    import HomeHeroSection from '@/shared/components/pages/home/home-hero-section.svelte';
    import HomeProblemSection from '@/shared/components/pages/home/home-problem-section.svelte';
    import HomeDiyTrapSection from '@/shared/components/pages/home/home-diy-trap-section.svelte';
    import HomeUniqueValueSection from '@/shared/components/pages/home/home-unique-value-section.svelte';
    import HomeMeetYourTeamSection from '@/shared/components/pages/home/home-meet-your-team-section.svelte';
    import HomeTrustBadgesSection from '@/shared/components/pages/home/home-trust-badges-section.svelte';
    import HomePortfolioSection from '@/shared/components/pages/home/home-portfolio-section.svelte';
    import HomeProcessSection from '@/shared/components/pages/home/home-process-section.svelte';
    import HomeMaintenanceValueSection from '@/shared/components/pages/home/home-maintenance-value-section.svelte';
    import HomePricingSection from '@/shared/components/pages/home/home-pricing-section/home-pricing-section.svelte';
    import HomeFaqSection from '@/shared/components/pages/home/home-faq-section.svelte';
    import HomeFinalCtaSection from '@/shared/components/pages/home/home-final-cta-section.svelte';
    import ScrollProgress from '@/shared/components/ui/scroll-progress/scroll-progress.svelte';
    import FloatingCta from '@/shared/components/ui/floating-cta/floating-cta.svelte';
</script>

<ScrollProgress />
<FloatingCta />

<HomeHeroSection />
<HomeProblemSection />
<HomeDiyTrapSection />
<HomeUniqueValueSection />
<HomeMeetYourTeamSection />
<HomeTrustBadgesSection />
<HomePortfolioSection />
<HomeProcessSection />
<HomeMaintenanceValueSection />
<HomePricingSection />
<HomeFaqSection />
<HomeFinalCtaSection />