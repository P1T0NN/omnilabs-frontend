<script lang="ts">
    // COMPONENTS
    import { CarouselItem } from '@/shared/components/ui/carousel';

    // DATA
    import { TESTIMONIALS_DATA } from '@/shared/data/testimonialsData';

    let { testimonial }: { testimonial: typeof TESTIMONIALS_DATA[0] } = $props();
</script>

<CarouselItem class="pl-4 md:basis-1/2 lg:basis-1/3">
    <div
        class="group flex flex-col border-2 border-black bg-white p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:shadow-[10px_10px_0px_0px_var(--primary)] hover:-translate-y-1 h-full"
    >
        <div class="mb-6 font-serif text-6xl leading-none text-primary">"</div>

        <p class="mb-8 flex-1 font-serif text-lg italic leading-relaxed text-neutral-700">
            {testimonial.quote}
        </p>

        <div class="flex items-center gap-4 border-t border-neutral-200 pt-6">
            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black font-sans text-sm font-black text-white">
                {testimonial.initial}
            </div>

            <div>
                <p class="font-sans font-black uppercase tracking-tight">{testimonial.author}</p>
                <p class="font-sans text-xs text-neutral-600">{testimonial.role}</p>
            </div>
        </div>
    </div>
</CarouselItem>