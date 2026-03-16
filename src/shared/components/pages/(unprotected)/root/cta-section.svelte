<script lang="ts">
	// SVELTEKIT IMPORTS
	import { onDestroy, onMount } from 'svelte';

	// CONFIG
	import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/constants';

	// HOOKS
	import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver';

	// COMPONENTS
	import CtaButton from '@/shared/components/ui/cta-button/cta-button.svelte';

	let sectionRef: HTMLElement | undefined;
	let inView = false;
	let cleanup: (() => void) | undefined;

	onMount(() => {
		if (!sectionRef) return;
		cleanup = useIntersectionObserver(sectionRef, () => {
			inView = true;
		});
	});

	onDestroy(() => cleanup?.());
</script>

<section class="bg-black text-background py-12 md:py-32">
	<div class="container mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
		<div
			bind:this={sectionRef}
			class="animate-on-in-view flex flex-col items-center text-center space-y-20"
			class:in-view={inView}
		>
			<h2 class="animate-slide-up max-w-3xl text-5xl lg:text-6xl italic leading-tight">
				Your next customer is one product away.
			</h2>

			<div class="animate-slide-up-delay-150">
				<CtaButton href={UNPROTECTED_PAGE_ENDPOINTS.CONTACT} variant="light">
					Start a Project
				</CtaButton>
			</div>
		</div>
	</div>
</section>
