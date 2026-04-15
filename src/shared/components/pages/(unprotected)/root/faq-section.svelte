
<script lang="ts">
    // SVELTEKIT IMPORTS
    import { onDestroy, onMount } from 'svelte';
    import { slide } from 'svelte/transition';
    import { m } from '@/shared/lib/paraglide/messages';

    // COMPONENTS
    import { Link } from '@/shared/components/ui/link';

    // HOOKS
    import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver';

    // DATA
    import { FAQS_DATA } from '@/shared/data/faqsData';

    // LUCIDE ICONS
    import PlusIcon from '@lucide/svelte/icons/plus';
    import MinusIcon from '@lucide/svelte/icons/minus';

    let openIndex = $state<number | null>(null);
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

    function toggle(index: number) {
        openIndex = openIndex === index ? null : index;
    }

</script>

<section id="faq" class="flex items-center justify-center">
    <div class="max-w-8xl mx-auto px-6 md:px-12 lg:px-24">
        <div
            bind:this={sectionRef}
            class="animate-on-in-view grid grid-cols-1 gap-16 lg:grid-cols-12"
            class:in-view={inView}
        >
            <div class="flex flex-col gap-4 lg:col-span-4">
                <span class="animate-slide-up block font-bold tracking-widest text-primary uppercase">
                    {m['RootPage.FaqSection.eyebrow']()}
                </span>

                <h2 class="animate-slide-up-delay-150 italic">
                    {m['RootPage.FaqSection.title']()}
                </h2>

                <p class="animate-slide-up-delay-300 text-lg text-neutral-600">
                    {m['RootPage.FaqSection.description']()}
                </p>
            </div>

            <div class="animate-slide-up-delay-300 lg:col-span-8">
                {#each FAQS_DATA as faq, i (faq.question)}
                    <div class="border-b border-neutral-200">
                        <button
                            class="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-primary"
                            onclick={() => toggle(i)}
                        >
                            <span class="pr-8 text-lg font-bold">
                                {faq.question}
                            </span>

                            <div class="flex h-8 w-8 shrink-0 items-center justify-center">
                                {#if openIndex === i}
                                    <MinusIcon class="h-5 w-5" />
                                {:else}
                                    <PlusIcon class="h-5 w-5" />
                                {/if}
                            </div>
                        </button>
                        
                        {#if openIndex === i}
                            <div transition:slide={{ duration: 300 }} class="pb-6">
                                <p class="leading-relaxed text-neutral-600">
                                    {#if faq.answerLinkHref && faq.answerLinkText}
                                        <Link
                                            href={faq.answerLinkHref}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            class="font-medium text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:text-primary/80"
                                        >
                                            {faq.answerLinkText}
                                        </Link>
                                    {/if}
                                    {faq.answer}
                                </p>
                            </div>
                        {/if}
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>
