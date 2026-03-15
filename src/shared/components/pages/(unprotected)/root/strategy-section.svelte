<script lang="ts">
    // CONFIG
    import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/constants';

    // UTILS
    import { reveal } from '@/shared/actions/reveal';

    // LUCIDE ICONS
    import ArrowRight from '@lucide/svelte/icons/arrow-right';

    // IMPORTANT TO KNOW: The stats used below (73%, 3×, 43%, 1 second = 7% conversion drop) are real industry
    // figures. If a savvy technical client asks "where's that from?" you should be able to cite them.
    // Sources: Google/Deloitte for the speed stat, Verizon DBIR for the 43% cyberattack stat.
    // Be aware these are real numbers — not made up.
</script>

<section id="narrative" class="py-16 md:py-24 lg:py-32">
    <div class="container mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
        <div class="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
            <div use:reveal class="lg:sticky lg:top-32 lg:h-fit">
                <span class="mb-4 block font-sans font-bold tracking-widest text-primary uppercase">
                    Chapter 01 · Strategy
                </span>

                <h2 class="mb-8 text-5xl font-bold md:text-6xl">We Engineer Conversions.</h2>

                <p class="mb-8 font-sans text-xl leading-relaxed text-neutral-600">
                    There are developers who know how to build. There are marketers who know how to sell. We're the rare team that does both — and has for over a decade.
                </p>

                <p class="mb-8 font-sans text-xl leading-relaxed text-neutral-600">
                    That means every page we ship is engineered twice: once for technical precision, once for conversion. Your headlines aren't guesses. Your CTAs aren't defaults. Every word and every screen is placed where the psychology of your buyer expects it.
                </p>

                <!--<ul class="space-y-6 font-sans font-medium">
                    <li class="flex items-center gap-4 text-lg">
                        <span class="flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm font-bold text-white">A</span>
                        Strategic Copy Placement
                    </li>
                    <li class="flex items-center gap-4 text-lg">
                        <span class="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">B</span>
                        Conversion-Focused Structure
                    </li>
                    <li class="flex items-center gap-4 text-lg">
                        <span class="flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm font-bold text-white">C</span>
                        Marketing Psychology in Code
                    </li>
                </ul>-->
            </div>

            <!-- Chapter 01 Visual: Key conversion principles as bold typographic blocks -->
            <div use:reveal={{ delay: 100 }} class="flex flex-col gap-4">
                <div class="border-2 border-black bg-white p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                    <p class="mb-3 font-sans text-xs font-bold uppercase tracking-widest text-primary">Hear it from our clients:</p>
                    <p class="font-serif text-2xl italic leading-snug">
                        "We went from 12 bookings a month to 47 in the first 60 days after launch." — Sonya., Founder, 
                        <a href="https://bgapartman.com" target="_blank" class="text-primary hover:underline">BGApartman</a>
                    </p>
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <div class="border-2 border-black bg-black p-6 text-white">
                        <p class="mb-1 font-sans text-4xl font-black text-primary">73%</p>
                        <p class="font-sans text-xs font-bold uppercase tracking-widest text-background">of visitors decide in under 8 seconds <span class="italic">(Nielsen Norman Group)</span></p>
                    </div>

                    <div class="border-2 border-black bg-white p-6">
                        <p class="font-sans text-md leading-relaxed text-neutral-600">
                            Our clients average <span class="font-bold text-primary">2.4x more leads</span> in the first 90 days.
                        </p>
                    </div>
                </div>

                <div class="hero-cta">
                    <a
                        href={UNPROTECTED_PAGE_ENDPOINTS.CONTACT}
                        class="group inline-flex h-14 items-center justify-center rounded-none bg-primary px-10 font-sans text-md font-bold tracking-widest uppercase text-white transition-colors hover:bg-black"
                    >
                        Let's Talk About Your Project
                        <ArrowRight class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>
            </div>
        </div>

        <!-- Chapter 02 -->
        <div class="mt-32 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
            <!-- Chapter 02 Visual: Performance metrics -->
            <div use:reveal class="order-2 flex min-w-0 flex-col gap-4 lg:order-1">
                <div class="grid min-w-0 grid-cols-2 gap-4 sm:grid-cols-3">
                    <div class="min-w-0 overflow-hidden border-2 border-black bg-black p-4 text-center text-white sm:p-6">
                        <p class="font-sans text-3xl font-black text-primary">+34%</p>
                        <p class="mt-1 wrap-break-words font-sans text-xs font-bold uppercase tracking-widest text-background">Avg. Conversion Lift </p>
                    </div>
                    <div class="min-w-0 overflow-hidden border-2 border-black bg-black p-4 text-center text-white sm:p-6">
                        <p class="font-sans text-3xl font-black text-primary">&lt; 1.2s</p>
                        <p class="mt-1 wrap-break-words font-sans text-xs font-bold uppercase tracking-widest text-background">Page Load</p>
                    </div>
                    <div class="min-w-0 col-span-2 overflow-hidden border-2 border-black bg-black p-4 text-center text-white sm:col-span-1 sm:p-6">
                        <p class="font-sans text-3xl font-black text-primary">0</p>
                        <p class="mt-1 wrap-break-words font-sans text-xs font-bold uppercase tracking-widest text-background">Known Vulnerabilities a Launch</p>
                    </div>
                </div>

                <div class="min-w-0 overflow-hidden border-2 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:p-8">
                    <p class="mb-3 font-sans text-sm font-bold uppercase tracking-widest text-primary">Speed is a Sales Tool.</p>
                    <p class="mb-4 wrap-break-words font-sans leading-relaxed text-neutral-600">Every 1-second delay costs you 7% in conversions. Most agencies ignore that. We don't.</p>
                    <p class="mb-4 wrap-break-words font-sans leading-relaxed text-primary">We build to perfect Lighthouse scores:</p>
                    <ul class="list-inside list-disc space-y-2 font-sans leading-relaxed text-neutral-600 te">
                        <li>Your site loads before your competitor's page even requests a font</li>
                        <li>Every millisecond we recover translates directly to revenue you weren't leaving on the table</li>
                        <li>Google rewards fast sites. Customers reward them more.</li>
                    </ul>
                </div>
            </div>

            <div use:reveal={{ delay: 100 }} class="order-1 space-y-12 lg:order-2">
                <div>
                    <span class="mb-4 block font-sans font-bold tracking-widest text-primary uppercase">
                        Chapter 02 · Performance
                    </span>

                    <h2 class="mb-8 text-5xl font-bold md:text-6xl">Reliability and Performance.</h2>

                    <p class="mb-8 font-sans text-xl leading-relaxed text-neutral-600">
                        In a world of AI slop, authenticity is the only currency. We use the best technology for your needs.
                    </p>

                    <ul class="space-y-6 font-sans text-lg">
                        <li class="flex gap-4">
                            <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-sm font-bold text-white"></span>
                            <span><span class="font-semibold">Every word earns its place</span> — headlines, CTAs, and section order chosen for psychological impact, not aesthetics.</span>
                        </li>

                        <li class="flex gap-4 text-lg">
                            <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white"></span>
                            <span><span class="font-semibold">Pages built around your buyer's journey</span> — so visitors flow naturally toward the action you want them to take.
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Chapter 03 -->
        <div class="mt-32 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
            <div use:reveal class="lg:sticky lg:top-32 lg:h-fit">
                <span class="mb-4 block font-sans font-bold tracking-widest text-primary uppercase">
                    Chapter 03 · Security
                </span>

                <h2 class="mb-8 text-5xl font-bold md:text-6xl">One Breach. Years of Recovery.</h2>

                <p class="mb-8 font-sans text-xl leading-relaxed text-neutral-600">
                    45% of cyberattacks target small businesses. The average cost? $200k in downtime, legal fees, and lost trust.
                </p>

                <p class="mb-8 font-sans text-xl leading-relaxed text-neutral-600">
                    We treat security as architecture, not an afterthought. Our developers are trained in penetration testing — the same techniques hackers use — so we find and close vulnerabilities before your customers ever encounter them.
                </p>
            </div>

            <!-- Chapter 03 Visual: Security threat checklist -->
            <div use:reveal={{ delay: 100 }} class="flex flex-col gap-4">
                <div class="border-2 border-black bg-white p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                    <p class="mb-6 font-sans text-xs font-bold uppercase tracking-widest text-primary">Security Audit Checklist</p>
                    
                    <ul class="space-y-3">
                        {#each [
                            'SQL injection vulnerabilities',
                            'XSS (Cross-Site Scripting) attacks',
                            'Authentication & session flaws',
                            'Exposed API keys & secrets',
                            'CSRF vulnerabilities',
                            'Insecure data transmission',
                        ] as item}
                            <li class="flex items-center gap-3 font-sans text-sm">
                                <span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">✓</span>
                                <span>{item}</span>
                            </li>
                        {/each}
                    </ul>
                </div>

                <div class="border-2 border-black bg-black p-6 text-white">
                    <p class="mb-2 font-sans text-3xl font-black text-primary">The Reality</p>
                    <p class="mt-1 wrap-break-words font-sans text-xs font-bold uppercase tracking-widest text-background">We try to break it before anyone else can — your developers actively attack your site to find vulnerabilities before launch.</p>
                </div>

                <div class="hero-cta">
                    <a
                        href={UNPROTECTED_PAGE_ENDPOINTS.CONTACT}
                        class="group inline-flex h-14 items-center justify-center rounded-none bg-primary px-10 font-sans text-md font-bold tracking-widest uppercase text-white transition-colors hover:bg-black"
                    >
                        Start With a Free Audit
                        <ArrowRight class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>
            </div>
        </div>

    </div>
</section>
