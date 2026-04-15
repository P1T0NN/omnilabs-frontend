<script lang="ts">
	// SVELTEKIT IMPORTS
	import { onDestroy, onMount } from 'svelte';
	import { m } from '@/shared/lib/paraglide/messages';

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
        <!-- sm–md: 3 cols when full-width; lg–xl: stack (narrow column beside copy); xl+: 3 cols again -->
        <div
            class="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 lg:max-xl:grid-cols-1 xl:grid-cols-3 xl:gap-4"
        >
            <div
                class="hover-lift flex min-w-0 flex-col items-center justify-center border-2 border-black bg-foreground px-3 py-5 text-center text-background sm:px-4 sm:py-6 xl:min-h-30"
            >
                <p class="w-full min-w-0 text-2xl font-black tabular-nums text-primary sm:text-3xl">+34%</p>
                <p
                    class="mt-2 w-full min-w-0 text-xs font-bold uppercase leading-snug text-balance text-background wrap-break-word"
                >
                    {m['RootPage.StrategySection.chapter02Metric01Label']()}
                </p>
            </div>

            <div
                class="hover-lift flex min-w-0 flex-col items-center justify-center border-2 border-black bg-foreground px-3 py-5 text-center text-background sm:px-4 sm:py-6 xl:min-h-30"
            >
                <p class="w-full min-w-0 text-2xl font-black tabular-nums text-primary sm:text-3xl">
                    &lt; 1.2s
                </p>
                <p
                    class="mt-2 w-full min-w-0 text-xs font-bold uppercase leading-snug text-balance text-background wrap-break-word"
                >
                    {m['RootPage.StrategySection.chapter02Metric02Label']()}
                </p>
            </div>

            <div
                class="hover-lift flex min-w-0 flex-col items-center justify-center border-2 border-black bg-foreground px-3 py-5 text-center text-background sm:px-4 sm:py-6 xl:min-h-30"
            >
                <p class="w-full min-w-0 text-2xl font-black tabular-nums text-primary sm:text-3xl">0</p>
                <p
                    class="mt-2 w-full min-w-0 text-xs font-bold uppercase leading-snug text-balance text-background wrap-break-word"
                >
                    {m['RootPage.StrategySection.chapter02Metric03Label']()}
                </p>
            </div>
        </div>

        <div class="hover-lift flex min-w-0 flex-col gap-4 overflow-hidden border-2 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:p-8">
            <p class="text-sm font-bold uppercase tracking-widest text-primary">{m['RootPage.StrategySection.chapter02SpeedCardTitle']()}</p>
            <p class="wrap-break-word leading-relaxed text-neutral-600">{m['RootPage.StrategySection.chapter02SpeedCardDescription']()}</p>
            <p class="wrap-break-word leading-relaxed text-primary">{m['RootPage.StrategySection.chapter02SpeedCardListTitle']()}</p>
            <ul class="list-none space-y-2 leading-relaxed text-neutral-600">
                <li><span class="font-bold text-primary">1.</span> {m['RootPage.StrategySection.chapter02SpeedCardItem01']()}</li>
                <li><span class="font-bold text-primary">2.</span> {m['RootPage.StrategySection.chapter02SpeedCardItem02']()}</li>
                <li><span class="font-bold text-primary">3.</span> {m['RootPage.StrategySection.chapter02SpeedCardItem03']()}</li>
            </ul>
        </div>
    </div>

    <div class="order-1 space-y-12 lg:order-2">
        <div class="flex flex-col gap-8">
            <span class="animate-slide-up block font-bold tracking-widest text-primary uppercase">
                {m['RootPage.StrategySection.chapter02Eyebrow']()}
            </span>

            <h2 class="animate-slide-up-delay-150 text-4xl font-bold md:text-6xl">
                {m['RootPage.StrategySection.chapter02Title']()}
            </h2>

            <p class="animate-slide-up-delay-300 text-lg leading-relaxed text-neutral-600">
                {m['RootPage.StrategySection.chapter02Description']()}
            </p>

            <ul class="animate-slide-up-delay-450 space-y-6 text-lg">
                <li class="flex gap-4">
                    <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-foreground text-sm font-bold text-background"></span>
                    <span><span class="font-semibold">{m['RootPage.StrategySection.chapter02Point01Title']()}</span> — {m['RootPage.StrategySection.chapter02Point01Description']()}</span>
                </li>

                <li class="flex gap-4 text-lg">
                    <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white"></span>
                    <span><span class="font-semibold">{m['RootPage.StrategySection.chapter02Point02Title']()}</span> — {m['RootPage.StrategySection.chapter02Point02Description']()}
                    </span>
                </li>
            </ul>
        </div>
    </div>
</div>