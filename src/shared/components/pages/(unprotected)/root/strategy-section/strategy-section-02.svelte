<script lang="ts">
	// SVELTEKIT IMPORTS
	import { onDestroy, onMount } from 'svelte';

    // HOOKS
	import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver';

	let sectionRef: HTMLElement | undefined;
    let inView = $state(false);
	let cleanup: (() => void) | undefined;

	onMount(() => {
		if (!sectionRef) return;
		cleanup = useIntersectionObserver(sectionRef, () => {
			inView = true;
		});
	});

	onDestroy(() => cleanup?.());
</script>

<div
	bind:this={sectionRef}
	class="animate-on-in-view mt-12 md:mt-32 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24"
	class:in-view={inView}
>
    <!-- Chapter 02 Visual: Performance metrics -->
    <div class="animate-slide-up-delay-300 order-2 flex min-w-0 flex-col gap-4 lg:order-1">
        <div class="grid min-w-0 grid-cols-2 gap-4 sm:grid-cols-3">
            <div class="hover-lift min-w-0 overflow-hidden border-2 border-black bg-black p-4 text-center text-background sm:p-6">
                <p class="text-3xl font-black text-primary">+34%</p>
                <p class="mt-1 wrap-break-words text-xs font-bold uppercase text-background">Avg. Conversion Lift </p>
            </div>

            <div class="hover-lift min-w-0 overflow-hidden border-2 border-black bg-black p-4 text-center text-background sm:p-6">
                <p class="text-3xl font-black text-primary">&lt; 1.2s</p>
                <p class="mt-1 wrap-break-words text-xs font-bold uppercase text-background">Page Load</p>
            </div>

            <div class="hover-lift min-w-0 col-span-2 overflow-hidden border-2 border-black bg-black p-4 text-center text-background sm:col-span-1 sm:p-6">
                <p class="text-3xl font-black text-primary">0</p>
                <p class="mt-1 text-xs font-bold uppercase text-background">Known vulnerabilities at launch</p>
            </div>
        </div>

        <div class="hover-lift flex min-w-0 flex-col gap-4 overflow-hidden border-2 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:p-8">
            <p class="text-sm font-bold uppercase tracking-widest text-primary">Speed is a Sales Tool.</p>
            <p class="wrap-break-words leading-relaxed text-neutral-600">Every 1-second delay costs you 7% in conversions. Most agencies ignore that. We don't.</p>
            <p class="wrap-break-words leading-relaxed text-primary">We build to perfect Lighthouse scores:</p>
            <ul class="list-none space-y-2 leading-relaxed text-neutral-600">
                <li><span class="font-bold text-primary">1.</span> Your site loads before your competitor's page even requests a font</li>
                <li><span class="font-bold text-primary">2.</span> Every millisecond we recover translates directly to revenue you weren't leaving on the table</li>
                <li><span class="font-bold text-primary">3.</span> Google rewards fast sites. Customers reward them more.</li>
            </ul>
        </div>
    </div>

    <div class="order-1 space-y-12 lg:order-2">
        <div class="flex flex-col gap-8">
            <span class="animate-slide-up block font-bold tracking-widest text-primary uppercase">
                Chapter 02 · Performance
            </span>

            <h2 class="animate-slide-up-delay-150 font-bold">Reliability and Performance.</h2>

            <p class="animate-slide-up-delay-300 text-lg leading-relaxed text-neutral-600">
                In a world of AI slop, authenticity is the only currency. We use the best technology for your needs.
            </p>

            <ul class="animate-slide-up-delay-450 space-y-6 text-lg">
                <li class="flex gap-4">
                    <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-sm font-bold text-background"></span>
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