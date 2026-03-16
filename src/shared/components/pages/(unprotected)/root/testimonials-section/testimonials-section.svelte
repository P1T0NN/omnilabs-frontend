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

<section>
    <div class="container mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
        <div
            bind:this={sectionRef}
            class="animate-on-in-view"
            class:in-view={inView}
        >
            <div class="mb-10 md:mb-16 flex flex-col gap-4 text-center">
                <span class="animate-slide-up block font-bold tracking-widest text-primary uppercase">
                    Client Results
                </span>

                <h2 class="animate-slide-up-delay-150 italic">
                    Don't take our word for it.
                </h2>
            </div>

            <div class="animate-slide-up-delay-300 relative overflow-visible px-4 md:px-14">
            <Carousel
                opts={{ loop: true, align: 'center' }}
                setApi={(api) => { carouselApi = api; }}
                class="w-full max-w-4xl mx-auto"
            >
                <CarouselPrevious class="-start-8 md:-start-12" />
                <CarouselNext class="-end-8 md:-end-12" />
                <CarouselContent class="-ml-2 md:-ml-4">
                    {#each TESTIMONIALS_DATA as t}
                        <CarouselItem class="pl-2 md:pl-4 flex-[0_0_85%] min-w-0 md:flex-none md:basis-1/2 lg:basis-1/3">
                            <div
                                class="group flex flex-col gap-3 md:gap-8 border-2 border-black bg-white p-4 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:shadow-[10px_10px_0px_0px_var(--primary)] hover:-translate-y-1 h-full min-w-0"
                            >
                                <div class="text-3xl md:text-6xl leading-none text-primary">"</div>

                                <p class="flex-1 text-sm md:text-lg italic leading-snug md:leading-relaxed text-neutral-700">
                                    {t.quote}
                                </p>

                                <div class="flex items-center gap-3 md:gap-4 border-t border-neutral-200 pt-4 md:pt-6">
                                    <div class="flex h-8 w-8 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-full bg-black text-xs md:text-sm font-black text-background">
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
