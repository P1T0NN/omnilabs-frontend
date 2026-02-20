<script lang="ts">
    // UTILS
    import { reveal } from '@/shared/actions/reveal';

    // IMPORTANT TO KNOW: The stats used below (73%, 3×, 43%, 1 second = 7% conversion drop) are real industry
    // figures. If a savvy technical client asks "where's that from?" you should be able to cite them.
    // Sources: Google/Deloitte for the speed stat, Verizon DBIR for the 43% cyberattack stat.
    // Be aware these are real numbers — not made up.
</script>

<section id="narrative" class="py-32">
    <div class="container mx-auto max-w-7xl px-6 md:px-12 lg:px-24">

        <!-- Chapter 01 -->
        <div class="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
            <div use:reveal class="lg:sticky lg:top-32 lg:h-fit">
                <span class="mb-4 block font-sans font-bold tracking-widest text-primary uppercase">
                    Chapter 01 · Strategy
                </span>
                <h2 class="mb-8 text-5xl font-bold md:text-6xl">We Engineer Conversions.</h2>
                <p class="mb-8 font-sans text-xl leading-relaxed text-neutral-600">
                    We don't just build websites. We apply CEO-level marketing expertise so every page is
                    engineered for maximum potential to convert visitors into customers.
                </p>
                <p class="mb-8 font-sans text-lg leading-relaxed text-neutral-600">
                    We strategically choose which text to use and where to put it — headlines, subcopy,
                    CTAs — so the psychology of persuasion works for your business, not against it.
                </p>
                <ul class="space-y-6 font-sans font-medium">
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
                </ul>
            </div>

            <!-- Chapter 01 Visual: Key conversion principles as bold typographic blocks -->
            <div use:reveal={{ delay: 100 }} class="flex flex-col gap-4">
                <div class="border-2 border-black bg-white p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                    <p class="mb-3 font-sans text-xs font-bold uppercase tracking-widest text-primary">Principle</p>
                    <p class="font-serif text-2xl italic leading-snug">"Most websites tell. Ours sell. Every headline, every section, every CTA is placed where the psychology of the buyer expects it."</p>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div class="border-2 border-black bg-black p-6 text-white">
                        <p class="mb-1 font-sans text-4xl font-black text-primary">73%</p>
                        <p class="font-sans text-xs font-bold uppercase tracking-widest text-neutral-600">of visitors decide in under 8 seconds</p>
                    </div>
                    <div class="border-2 border-black bg-white p-6">
                        <p class="mb-1 font-sans text-4xl font-black">3×</p>
                        <p class="font-sans text-xs font-bold uppercase tracking-widest text-neutral-600">higher conversion with strategic structure</p>
                    </div>
                </div>
                <div class="border-2 border-black border-l-4 border-l-primary bg-white p-6">
                    <p class="font-sans text-sm leading-relaxed text-neutral-600">Structure isn't decoration. The order of your sections, the size of your headlines, and the words on your buttons are all psychological decisions — and we make them deliberately.</p>
                </div>
            </div>
        </div>

        <!-- Chapter 02 -->
        <div class="mt-32 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
            <!-- Chapter 02 Visual: Performance metrics -->
            <div use:reveal class="order-2 flex flex-col gap-4 lg:order-1">
                <div class="grid grid-cols-3 gap-4">
                    <div class="border-2 border-black bg-black p-6 text-center text-white">
                        <p class="font-sans text-3xl font-black text-primary">100</p>
                        <p class="mt-1 font-sans text-xs font-bold uppercase tracking-widest text-neutral-600">Performance</p>
                    </div>
                    <div class="border-2 border-black bg-black p-6 text-center text-white">
                        <p class="font-sans text-3xl font-black text-primary">100</p>
                        <p class="mt-1 font-sans text-xs font-bold uppercase tracking-widest text-neutral-600">SEO</p>
                    </div>
                    <div class="border-2 border-black bg-black p-6 text-center text-white">
                        <p class="font-sans text-3xl font-black text-primary">100</p>
                        <p class="mt-1 font-sans text-xs font-bold uppercase tracking-widest text-neutral-600">Best Practices</p>
                    </div>
                </div>
                <div class="border-2 border-black bg-white p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                    <p class="mb-3 font-sans text-xs font-bold uppercase tracking-widest text-primary">Why It Matters</p>
                    <p class="font-sans leading-relaxed text-neutral-600">A 1-second delay in page load time reduces conversions by 7%. We build for perfect Lighthouse scores — not as a vanity metric, but because speed is the cheapest conversion optimization you can do.</p>
                </div>
                <div class="border-2 border-black bg-white p-6">
                    <p class="mb-3 font-sans text-xs font-bold uppercase tracking-widest text-neutral-600">Stack chosen for your needs, not ours</p>
                    <div class="flex flex-wrap gap-2">
                        {#each ['SvelteKit', 'TypeScript', 'PostgreSQL', 'Rust'] as tech}
                            <span class="border border-black px-3 py-1 font-sans text-xs font-bold uppercase tracking-widest">{tech}</span>
                        {/each}
                    </div>
                </div>
            </div>

            <div use:reveal={{ delay: 100 }} class="order-1 space-y-12 lg:order-2">
                <div>
                    <span class="mb-4 block font-sans font-bold tracking-widest text-primary uppercase">
                        Chapter 02 · Performance
                    </span>
                    <h2 class="mb-8 text-5xl font-bold md:text-6xl">Reliability and Performance.</h2>
                    <p class="mb-8 font-sans text-xl leading-relaxed text-neutral-600">
                        In a world of AI slop, authenticity is the only currency. We use the best technology for your needs — you'll never have to worry about whether your website can handle it.
                    </p>
                    <ul class="space-y-6 font-sans font-medium">
                        <li class="flex items-center gap-4 text-lg">
                            <span class="flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm font-bold text-white">D</span>
                            Optimized Load Times
                        </li>
                        <li class="flex items-center gap-4 text-lg">
                            <span class="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">E</span>
                            Built to Scale
                        </li>
                        <li class="flex items-center gap-4 text-lg">
                            <span class="flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm font-bold text-white">F</span>
                            Technology That Fits
                        </li>
                    </ul>
                </div>
                <div class="border-t-2 border-black p-8">
                    <h3 class="mb-4 font-sans text-2xl font-bold uppercase">No Medium Ticket.</h3>
                    <p class="leading-relaxed text-neutral-600">
                        We operate in extremes. Either we build you a focused, high-velocity landing page, or
                        we architect a complete digital empire. Mediocrity has no place here.
                    </p>
                </div>
            </div>
        </div>

        <!-- Chapter 03 -->
        <div class="mt-32 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
            <div use:reveal class="lg:sticky lg:top-32 lg:h-fit">
                <span class="mb-4 block font-sans font-bold tracking-widest text-primary uppercase">
                    Chapter 03 · Security
                </span>
                <h2 class="mb-8 text-5xl font-bold md:text-6xl">Security by Default.</h2>
                <p class="mb-8 font-sans text-xl leading-relaxed text-neutral-600">
                    Your website is your storefront. One breach can destroy years of trust overnight — lost
                    customers, leaked data, damaged reputation. Most agencies build first and think about
                    security later. We don't.
                </p>
                <p class="mb-8 font-sans text-lg leading-relaxed text-neutral-600">
                    Our developers are trained in penetration testing. The same people who build your
                    website actively try to break it — finding and eliminating vulnerabilities before anyone
                    else can. You get a site that's battle-tested from day one.
                </p>
                <ul class="space-y-6 font-sans font-medium">
                    <li class="flex items-center gap-4 text-lg">
                        <span class="flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm font-bold text-white">G</span>
                        Penetration-Tested Code
                    </li>
                    <li class="flex items-center gap-4 text-lg">
                        <span class="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">H</span>
                        Vulnerability-First Development
                    </li>
                    <li class="flex items-center gap-4 text-lg">
                        <span class="flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm font-bold text-white">I</span>
                        Your Data, Fully Protected
                    </li>
                </ul>
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
                    <p class="mb-2 font-sans text-xs font-bold uppercase tracking-widest text-primary">The Reality</p>
                    <p class="font-sans text-sm leading-relaxed text-neutral-600">43% of cyberattacks target small businesses. Most are preventable with proper development practices. We treat security as a feature, not an afterthought.</p>
                </div>
            </div>
        </div>

    </div>
</section>
