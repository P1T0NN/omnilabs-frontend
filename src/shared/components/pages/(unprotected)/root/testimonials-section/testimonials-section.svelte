<script lang="ts">
    // SVELTEKIT IMPORTS
    import { onMount } from 'svelte';

    // COMPONENTS
    import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/shared/components/ui/carousel';

    // DATA
    import { TESTIMONIALS_DATA } from '@/shared/data/testimonialsData';

    // UTILS
    import { reveal } from '@/shared/actions/reveal';

    // TYPES
    import type { CarouselAPI } from '@/shared/components/ui/carousel/context';

    let carouselApi = $state<CarouselAPI | undefined>(undefined);

    onMount(() => {
        const interval = setInterval(() => {
            carouselApi?.scrollNext();
        }, 5000);
        return () => clearInterval(interval);
    });
</script>

<section class="py-32 border-t border-neutral-200">
    <div class="container mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
        <div use:reveal class="mb-20 text-center">
            <span class="mb-4 block font-sans font-bold tracking-widest text-primary uppercase">
                Client Results
            </span>

            <h2 class="font-serif text-5xl italic md:text-7xl">
                Don't take our word for it.
            </h2>
        </div>

        <div use:reveal class="relative px-14">
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
                                class="group flex flex-col border-2 border-black bg-white p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:shadow-[10px_10px_0px_0px_var(--primary)] hover:-translate-y-1 h-full"
                            >
                                <div class="mb-6 font-serif text-6xl leading-none text-primary">"</div>
                                <p class="mb-8 flex-1 font-serif text-lg italic leading-relaxed text-neutral-700">
                                    {t.quote}
                                </p>
                                <div class="flex items-center gap-4 border-t border-neutral-200 pt-6">
                                    <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black font-sans text-sm font-black text-white">
                                        {t.initial}
                                    </div>
                                    <div>
                                        <p class="font-sans font-black uppercase tracking-tight">{t.author}</p>
                                        <p class="font-sans text-xs text-neutral-600">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    {/each}
                </CarouselContent>
            </Carousel>
        </div>
    </div>
</section>
