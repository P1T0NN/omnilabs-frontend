<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	// CONFIG
	import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/constants';

	// HOOKS
	import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver';

	// COMPONENTS
	import CtaButton from '@/shared/components/ui/cta-button/cta-button.svelte';

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
    <div class="flex flex-col gap-8 lg:sticky lg:top-32 lg:h-fit">
        <span class="animate-slide-up block font-bold tracking-widest text-primary uppercase">
            Chapter 03 · Security
        </span>

        <h2 class="animate-slide-up-delay-150 font-bold">One Breach. Years of Recovery.</h2>

        <p class="animate-slide-up-delay-300 text-lg leading-relaxed text-neutral-600">
            45% of cyberattacks target small businesses. The average cost? $200k in downtime, legal fees, and lost trust.
        </p>

        <p class="animate-slide-up-delay-450 text-lg leading-relaxed text-neutral-600">
            We treat security as architecture, not an afterthought. Our developers are trained in penetration testing — the same techniques hackers use — so we find and close vulnerabilities before your customers ever encounter them.
        </p>
    </div>

    <!-- Chapter 03 Visual: Security threat checklist -->
    <div class="animate-slide-up-delay-300 flex flex-col gap-4">
        <div class="hover-lift flex flex-col gap-6 border-2 border-black bg-white p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <p class="text-xs font-bold uppercase tracking-widest text-primary">Security Audit Checklist</p>

            <ul class="space-y-3">
                {#each [
                    'SQL injection vulnerabilities',
                    'XSS (Cross-Site Scripting) attacks',
                    'Authentication & session flaws',
                    'Exposed API keys & secrets',
                    'CSRF vulnerabilities',
                    'Insecure data transmission',
                ] as item (item)}
                    <li class="flex items-center gap-3 text-sm">
                        <span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">✓</span>
                        <span>{item}</span>
                    </li>
                {/each}
            </ul>
        </div>

        <div class="hover-lift flex flex-col gap-2 border-2 border-black bg-black p-6 text-background">
            <p class="text-3xl font-black text-primary">The Reality</p>
            <p class="wrap-break-words text-xs font-bold uppercase tracking-widest text-background">We try to break it before anyone else can — your developers actively attack your site to find vulnerabilities before launch.</p>
        </div>

        <div class="animate-slide-up-delay-150">
            <CtaButton href={UNPROTECTED_PAGE_ENDPOINTS.CONTACT}>
                Start With a Free Audit
            </CtaButton>
        </div>
    </div>
</div>