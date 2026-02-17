<script lang="ts">
    // SVELTEKIT IMPORTS
    import { fly } from 'svelte/transition';
    import { onMount } from 'svelte';

    // LUCIDE ICONS
    import ArrowRight from '@lucide/svelte/icons/arrow-right';

    let mounted = $state(false);
    onMount(() => (mounted = true));
</script>

<section class="relative flex min-h-screen flex-col justify-between pt-20">
    <div class="container mx-auto flex flex-1 items-center max-w-7xl px-6 md:px-12 lg:px-24">
        <div class="flex w-full flex-col items-center justify-center py-20 text-center">
            {#if mounted}
                <h1
                    in:fly={{ y: 48, duration: 800, delay: 0 }}
                    class="mb-8 font-sans text-7xl leading-[0.85] font-black uppercase md:text-9xl"
                >
                    Websites <br />
                    That <br />
                    <span class="font-serif text-primary lowercase italic">sell.</span>
                </h1>

                <div
                    in:fly={{ y: 32, duration: 700, delay: 200 }}
                    class="mb-10 max-w-xl border-l-4 border-primary py-2 pl-6 text-left"
                >
                    <p class="text-xl leading-tight text-neutral-600 italic md:text-2xl">
                        "We combine marketing strategy with engineering precision to build websites that don't
                        just look good — they turn visitors into customers. From focused micro-sites to full-scale enterprise platforms."
                    </p>
                </div>

                <div in:fly={{ y: 24, duration: 600, delay: 400 }}>
                    <a
                        href="/contact"
                        class="group inline-flex h-14 items-center justify-center rounded-none bg-black px-10 font-sans text-lg font-bold tracking-widest uppercase text-white transition-colors hover:bg-primary"
                    >
                        Book a Strategy Call
                        <ArrowRight class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>
            {/if}
        </div>
    </div>

    <!-- Logos Footer -->
    <div class="border-t border-neutral-200 py-6">
        <div class="container mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
            <div class="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 md:gap-x-16">
                <span class="font-sans text-xs font-bold tracking-widest text-neutral-400 uppercase">Trusted by</span>
                <a href="https://www.bgapartman.com" target="_blank" rel="noopener noreferrer"
                    class="font-sans text-lg font-black tracking-tight text-neutral-300 uppercase transition-colors hover:text-black md:text-xl">
                    BGApartman
                </a>
                <a href="https://followusnyc.com" target="_blank" rel="noopener noreferrer"
                    class="font-sans text-lg font-black tracking-tight text-neutral-300 uppercase transition-colors hover:text-black md:text-xl">
                    FollowUs
                </a>
                <a href="https://www.kontentkolektiv.com" target="_blank" rel="noopener noreferrer"
                    class="font-sans text-lg font-black tracking-tight text-neutral-300 uppercase transition-colors hover:text-black md:text-xl">
                    Kontent Kolektiv
                </a>
                <a href="https://www.crys-sports.com" target="_blank" rel="noopener noreferrer"
                    class="font-sans text-lg font-black tracking-tight text-neutral-300 uppercase transition-colors hover:text-black md:text-xl">
                    Crys Sports
                </a>
            </div>
        </div>
    </div>
</section>
