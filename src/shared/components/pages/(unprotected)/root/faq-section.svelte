<script lang="ts">
    // SVELTEKIT IMPORTS
    import { slide } from 'svelte/transition';
    import { reveal } from '@/shared/actions/reveal';

    // LUCIDE ICONS
    import PlusIcon from '@lucide/svelte/icons/plus';
    import MinusIcon from '@lucide/svelte/icons/minus';

    const faqs = [
        {
            question: 'How long does a project typically take?',
            answer: 'Micro-Launches are usually delivered within 2–3 weeks. Enterprise projects vary based on scope, but most launch within 6–10 weeks. We\'ll give you a clear timeline on the strategy call.'
        },
        {
            question: 'What if I need changes after launch?',
            answer: 'That\'s exactly what our ongoing partnership covers. With a monthly plan, text changes, small design tweaks, and minor functionality updates are all included — no extra charges, no tickets. Without it, every change is billed separately per request.'
        },
        {
            question: 'Why don\'t you show exact prices on the website?',
            answer: 'Because every business is different. A one-size-fits-all price doesn\'t reflect the strategy, scope, or goals unique to your project. We discuss pricing on the strategy call so you get a transparent quote tailored to exactly what you need.'
        },
        {
            question: 'Do you work with businesses outside Europe?',
            answer: 'Absolutely. We work with clients worldwide. All communication and project management is handled remotely with clear milestones and regular check-ins.'
        },
        {
            question: 'What technologies do you use?',
            answer: 'We choose the best technology stack for your specific needs — not whatever\'s trendy. We pick what gives your project the best performance, security, and scalability.'
        },
        {
            question: 'What makes you different from other agencies?',
            answer: 'Most agencies build. We engineer conversions. Our team combines CEO-level marketing strategy with senior development and penetration testing expertise. Every element on your site — from headline placement to page structure — is strategically designed to turn visitors into customers.'
        }
    ];

    let openIndex = $state<number | null>(null);

    function toggle(index: number) {
        openIndex = openIndex === index ? null : index;
    }
</script>

<section id="faq" class="py-32">
    <div class="container mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
        <div class="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div use:reveal class="lg:col-span-4">
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
                {#each faqs as faq, i}
                    <div use:reveal={{ delay: i * 80 }} class="border-b border-neutral-200">
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
