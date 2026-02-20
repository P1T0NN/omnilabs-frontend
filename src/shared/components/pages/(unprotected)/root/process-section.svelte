<script lang="ts">
    // LUCIDE ICONS
    import ArrowRight from '@lucide/svelte/icons/arrow-right';

    // ACTIONS
    import { reveal } from '@/shared/actions/reveal';

    const steps = [
        {
            number: '01',
            title: 'Strategy Call',
            description: 'We learn your business, goals, and audience. Together we define the scope and the strategy that will drive conversions.'
        },
        {
            number: '02',
            title: 'Design & Build',
            description: 'Our team architects the structure, writes conversion-optimized copy, and engineers a blazing-fast, secure website.'
        },
        {
            number: '03',
            title: 'Test & Launch',
            description: 'We penetration-test, performance-audit, and stress-test everything before your site goes live. No surprises.'
        },
        {
            number: '04',
            title: 'Grow Together',
            description: 'With our ongoing partnership, your site evolves with your business — updates, tweaks, and optimizations included.'
        }
    ];
</script>

<section id="process" class="bg-secondary py-32">
    <div class="container mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
        <div use:reveal class="mb-20 text-center">
            <span class="mb-4 block font-sans font-bold tracking-widest text-primary uppercase">
                How It Works
            </span>
            <h2 class="font-serif text-5xl italic md:text-7xl">
                From call to launch.
            </h2>
        </div>

        <div class="grid grid-cols-1 gap-0 md:grid-cols-4">
            {#each steps as step, i}
                <div use:reveal={{ delay: i * 120 }} class="group relative border-t-2 border-black pt-8 {i > 0 ? 'md:border-l-2 md:border-t-2 md:pl-8' : ''} {i === 0 ? 'z-40' : i === 1 ? 'z-30' : i === 2 ? 'z-20' : ''}">
                    <span class="mb-4 block font-sans text-5xl font-black text-neutral-600 transition-colors group-hover:text-primary">
                        {step.number}
                    </span>
                    <h3 class="mb-3 font-sans text-xl font-bold uppercase">
                        {step.title}
                    </h3>
                    <p class="font-sans text-sm leading-relaxed text-neutral-600">
                        {step.description}
                    </p>

                    {#if i < steps.length - 1}
                        <div class="absolute -right-3 top-8 z-20 isolate hidden h-6 w-6 items-center justify-center bg-background md:flex">
                            <ArrowRight class="h-4 w-4 text-primary" />
                        </div>
                    {/if}
                </div>
            {/each}
        </div>
    </div>
</section>
