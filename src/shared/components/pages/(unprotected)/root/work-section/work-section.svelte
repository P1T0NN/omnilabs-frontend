<script lang="ts">
	// SVELTEKIT IMPORTS
	import { onDestroy, onMount } from 'svelte';
	import { m } from '@/shared/lib/paraglide/messages';

	// HOOKS
	import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver';

	// COMPONENTS
	import WorkSectionItem from './work-section-item.svelte';

	// DATA
	import { WORK_DATA } from '@/shared/data/workData';

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

<section id="work" class="bg-black text-background py-12 md:py-32" style="clip-path: polygon(0 5vw, 100% 0, 100% 100%, 0% 100%);">
	<div class="container mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
		<div
			bind:this={sectionRef}
			class="animate-on-in-view"
			class:in-view={inView}
		>
			<div class="mb-16 flex flex-col items-end justify-between border-b-2 border-white/20 pb-8 md:flex-row">
				<h2 class="animate-slide-up stroke-text font-black text-transparent uppercase">
					{m['RootPage.WorkSection.title']()}
				</h2>
			</div>

			<div class="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-12">
				{#each WORK_DATA as vol (vol.id)}
					<WorkSectionItem
						id={vol.id}
						title={vol.title}
						issue={vol.issue}
						client={vol.client}
						description={vol.description}
						img={vol.img}
						href={vol.href}
						class={vol.class}
					/>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.stroke-text {
		-webkit-text-stroke: 2px var(--background);
	}
</style>
