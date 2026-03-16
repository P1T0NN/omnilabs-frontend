<script lang="ts">
    // SVELTEKIT IMPORTS
    import { onDestroy, onMount } from 'svelte';

    // HOOKS
    import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver';

    // COMPONENTS
    import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/shared/components/ui/carousel';

    // DATA
    import { TESTIMONIALS_DATA } from '@/shared/data/testimonialsData';

    // TYPES
    import type { CarouselAPI } from '@/shared/components/ui/carousel/context';

    let carouselApi = $state<CarouselAPI | undefined>(undefined);
    let sectionRef: HTMLElement | undefined;
    let inView = $state(false);
    let cleanup: (() => void) | undefined;

    onMount(() => {
        const interval = setInterval(() => {
            carouselApi?.scrollNext();
        }, 5000);

        if (sectionRef) {
            cleanup = useIntersectionObserver(sectionRef, () => {
                inView = true;
            });
        }

        return () => clearInterval(interval);
    });

    onDestroy(() => cleanup?.());
</script>

<section class="py-32 border-t border-neutral-200">
    <div class="container mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
        <div
            bind:this={sectionRef}
            class="animate-on-in-view"
            class:in-view={inView}
        >
            <div class="mb-16 flex flex-col gap-4 text-center">
                <span class="animate-slide-up block font-bold tracking-widest text-primary uppercase">
                    Client Results
                </span>

                <h2 class="animate-slide-up-delay-150 italic">
                    Don't take our word for it.
                </h2>
            </div>

            <div class="animate-slide-up-delay-300 relative px-14">
            <Carousel
                opts={{ loop: true, align: 'start' }}
                setApi={(api) => { carouselApi = api; }}
                class="w-full max-w-4xl mx-auto"
            >
                <CarouselPrevious class="-start-2 md:-start-12" />
                <CarouselNext class="-end-2 md:-end-12" />
                <CarouselContent class="-ml-4">
                    {#each TESTIMONIALS_DATA as t}
                        <CarouselItem class="pl-4 md:basis-1/2 lg:basis-1/3">
                            <div
                                class="group flex flex-col gap-8 border-2 border-black bg-white p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:shadow-[10px_10px_0px_0px_var(--primary)] hover:-translate-y-1 h-full"
                            >
                                <div class="text-6xl leading-none text-primary">"</div>

                                <p class="flex-1 text-lg italic leading-relaxed text-neutral-700">
                                    {t.quote}
                                </p>

                                <div class="flex items-center gap-4 border-t border-neutral-200 pt-6">
                                    <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-sm font-black text-background">
                                        {t.initial}
                                    </div>

                                    <div>
                                        <p class="font-black uppercase tracking-tight">{t.author}</p>
                                        <p class="text-xs text-neutral-600">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    {/each}
                </CarouselContent>
            </Carousel>
            </div>
        </div>
    </div>
</section>
