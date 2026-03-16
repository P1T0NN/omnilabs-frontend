<script lang="ts">
    // COMPONENTS
    import { CarouselItem } from '@/shared/components/ui/carousel';

    // DATA
    import { TESTIMONIALS_DATA } from '@/shared/data/testimonialsData';

    let { testimonial }: { testimonial: typeof TESTIMONIALS_DATA[0] } = $props();
</script>

<CarouselItem class="pl-2 md:pl-4 flex-[0_0_85%] min-w-0 md:flex-none md:basis-1/2 lg:basis-1/3">
    <div
        class="group flex flex-col gap-3 md:gap-8 border-2 border-black bg-white p-4 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:shadow-[10px_10px_0px_0px_var(--primary)] hover:-translate-y-1 h-full min-w-0"
    >
        <div class="text-3xl md:text-6xl leading-none text-primary">"</div>

        <p class="flex-1 text-sm md:text-lg italic leading-snug md:leading-relaxed text-neutral-700">
            {testimonial.quote}
        </p>

        <div class="flex items-center gap-3 md:gap-4 border-t border-neutral-200 pt-4 md:pt-6">
            <div class="flex h-8 w-8 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-full bg-black text-xs md:text-sm font-black text-background">
                {testimonial.initial}
            </div>

            <div>
                <p class="font-black uppercase tracking-tight">{testimonial.author}</p>
                <p class="text-xs text-neutral-600">{testimonial.role}</p>
            </div>
        </div>
    </div>
</CarouselItem>