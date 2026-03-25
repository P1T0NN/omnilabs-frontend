<script lang="ts">
    // TYPES
    import type { typesTestimonialCard } from '@/shared/types/types';

    let {
        testimonial,
        cardShadow = '6px 6px 0px 0px rgba(0,0,0,1)'
    }: { testimonial: typesTestimonialCard; cardShadow?: string } = $props();

</script>

<div
    class="pl-2 md:pl-4 flex-[0_0_85%] min-w-0 md:flex-none md:basis-1/2 lg:basis-1/3"
>
    <div
        class="group flex flex-col gap-3 md:gap-8 border-2 border-black bg-white p-4 md:p-8 transition-all duration-300 hover:shadow-[10px_10px_0px_0px_var(--primary)] hover:-translate-y-1 h-full min-w-0"
        style={cardShadow ? `box-shadow: ${cardShadow}` : undefined}
    >
        <div class="text-3xl md:text-6xl leading-none text-primary">"</div>

        <p class="flex-1 text-sm md:text-lg italic leading-snug md:leading-relaxed text-neutral-700">
            {testimonial.text}
        </p>

        <div class="flex items-center gap-3 md:gap-4 border-t border-neutral-200 pt-4 md:pt-6">
            <div class="flex h-8 w-8 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-full bg-black text-xs md:text-sm font-black text-background">
                {testimonial.name.charAt(0)}
            </div>

            <div>
                <p class="font-black uppercase tracking-tight">{testimonial.name}</p>
                <p class="text-xs text-neutral-600">{testimonial.location}</p>
            </div>
        </div>
    </div>
</div>