<script lang="ts">
    // SVELTEKIT IMPORTS
    import { onDestroy, onMount } from 'svelte';

    // LIBRARIES
    import { m } from '@/shared/lib/paraglide/messages';

    // CONFIG
    import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/constants';

    // HOOKS
    import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver';

    // COMPONENTS
    import CtaButton from '@/shared/components/ui/cta-button/cta-button.svelte';

    // DATA
    import { PROCESS_DATA } from '@/shared/data/processData';

    // LUCIDE ICONS
    import ArrowRight from '@lucide/svelte/icons/arrow-right';

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

<section id="process" class="bg-secondary py-12 md:py-32">
    <div class="container mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
        <div
            bind:this={sectionRef}
            class="animate-on-in-view space-y-10 md:space-y-20"
            class:in-view={inView}
        >
            <div class="flex flex-col gap-4 text-center">
                <span class="animate-slide-up block font-bold tracking-widest text-primary uppercase">
                    {m['RootPage.ProcessSection.eyebrow']()}
                </span>

                <h2 class="animate-slide-up-delay-150 italic">
                    {m['RootPage.ProcessSection.title']()}
                </h2>
            </div>

            <div class="grid grid-cols-1 gap-0 md:grid-cols-4">
                {#each PROCESS_DATA as step, i (step.number)}
                    <div class="animate-slide-up-delay-300 group relative flex flex-col gap-4 border-t-2 border-black px-4 py-8 md:pr-6 {i > 0 ? 'md:border-l-2 md:border-t-2 md:pl-8' : 'md:pl-4'} {i === 0 ? 'z-40' : i === 1 ? 'z-30' : i === 2 ? 'z-20' : ''}">
                        <span class="block text-5xl font-black text-neutral-600 transition-colors group-hover:text-primary">
                            {step.number}
                        </span>

                        <h3 class="font-bold uppercase">
                            {step.title}
                        </h3>
                        
                        <p class="text-sm leading-relaxed text-neutral-600">
                            {step.description}
                        </p>

                        {#if i < PROCESS_DATA.length - 1}
                            <div class="absolute -right-3 top-8 z-20 isolate hidden h-6 w-6 items-center justify-center bg-background md:flex">
                                <ArrowRight class="h-4 w-4 text-primary" />
                            </div>
                        {/if}
                    </div>
                {/each}
            </div>

            <div class="flex animate-slide-up-delay-300 justify-center">
                <CtaButton href={UNPROTECTED_PAGE_ENDPOINTS.CONTACT} withArrow>
                    {m['RootPage.ProcessSection.cta']()}
                </CtaButton>
            </div>
        </div>
    </div>
</section>
