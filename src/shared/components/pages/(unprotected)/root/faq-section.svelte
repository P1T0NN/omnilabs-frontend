<script lang="ts">
    // SVELTEKIT IMPORTS
    import { slide } from 'svelte/transition';

    // DATA
    import { FAQS_DATA } from '@/shared/data/faqsData';

    // LUCIDE ICONS
    import PlusIcon from '@lucide/svelte/icons/plus';
    import MinusIcon from '@lucide/svelte/icons/minus';

    let openIndex = $state<number | null>(null);

    function toggle(index: number) {
        openIndex = openIndex === index ? null : index;
    }
</script>

<section id="faq" class="py-32">
    <div class="container mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
        <div class="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div class="lg:col-span-4">
                <span class="mb-4 block font-sans font-bold tracking-widest text-primary uppercase">
                    FAQ
                </span>

                <h2 class="mb-4 font-serif text-5xl italic md:text-6xl">
                    Questions?
                </h2>

                <p class="font-sans text-lg text-neutral-600">
                    Everything you need to know before we start working together.
                </p>
            </div>

            <div class="lg:col-span-8">
                {#each FAQS_DATA as faq, i}
                    <div class="border-b border-neutral-200">
                        <button
                            class="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-primary"
                            onclick={() => toggle(i)}
                        >
                            <span class="pr-8 font-sans text-lg font-bold">
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
                                <p class="font-sans leading-relaxed text-neutral-600">
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
