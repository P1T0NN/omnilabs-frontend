<script lang="ts">
    import { reveal } from '@/shared/actions/reveal';

    const testimonials = [
        {
            quote: "They didn't just build us a website — they rethought how we present our listings entirely. Bookings went up significantly within the first month of launch.",
            author: "BGApartman",
            role: "Real Estate Platform",
            initial: "B"
        },
        {
            quote: "Working with this team was different from any agency we've tried before. They asked questions no other developer asked — about our customers, our funnel, our goals. The result speaks for itself.",
            author: "FollowUs",
            role: "Direct Marketing",
            initial: "F"
        },
        {
            quote: "We needed a site that positions us as the leading UGC company in the Balkans. They nailed it. The site converts cold traffic into inquiries every single week.",
            author: "Kontent Kolektiv",
            role: "UGC Agency",
            initial: "K"
        }
    ];
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

        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
            {#each testimonials as t, i}
                <div
                    use:reveal={{ delay: i * 120 }}
                    class="group flex flex-col border-2 border-black bg-white p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:shadow-[10px_10px_0px_0px_var(--primary)] hover:-translate-y-1"
                >
                    <!-- Quote mark -->
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
                            <p class="font-sans text-xs text-neutral-500">{t.role}</p>
                        </div>
                    </div>
                </div>
            {/each}
        </div>

        <!-- Results bar -->
        <div use:reveal={{ delay: 200 }} class="mt-16 grid grid-cols-1 gap-0 border-2 border-black md:grid-cols-3">
            <div class="border-b-2 border-black p-8 text-center md:border-b-0 md:border-r-2">
                <p class="mb-2 font-sans text-5xl font-black text-primary">24h</p>
                <p class="font-sans text-sm font-bold uppercase tracking-widest text-neutral-600">Response Guarantee</p>
            </div>
            <div class="border-b-2 border-black p-8 text-center md:border-b-0 md:border-r-2">
                <p class="mb-2 font-sans text-5xl font-black text-primary">4</p>
                <p class="font-sans text-sm font-bold uppercase tracking-widest text-neutral-600">Max Clients per Month</p>
            </div>
            <div class="p-8 text-center">
                <p class="mb-2 font-sans text-5xl font-black text-primary">100%</p>
                <p class="font-sans text-sm font-bold uppercase tracking-widest text-neutral-600">Client Satisfaction</p>
            </div>
        </div>
    </div>
</section>
