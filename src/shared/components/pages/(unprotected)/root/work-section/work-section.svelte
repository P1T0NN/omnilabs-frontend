<script lang="ts">
	// COMPONENTS
	import WorkSectionItem from './work-section-item.svelte';

	// DATA
	import { WORK_DATA } from '@/shared/data/workData';

	interface Project {
		id: string;
		title: string;
		category: string;
		description: string;
		imgDesktop: string;
		imgMobile: string;
		link: string;
	}

	const categoryById: Record<string, string> = {
		'01': 'Real Estate',
		'02': 'Personal Website',
		'03': 'UGC'
	};

	const projects: Project[] = WORK_DATA.map((item) => ({
		id: item.id,
		title: item.title,
		category: categoryById[item.id] ?? 'Project',
		description: item.description,
		imgDesktop: item.imgDesktop,
		imgMobile: item.imgMobile,
		link: item.href
	}));
</script>

<section id="work" class="bg-charcoal py-20 md:py-32">
	<div class="container mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
		<div class="mb-12 w-full md:mb-20">
			<p class="text-sm tracking-widest text-neutral-400 uppercase">Selected Work</p>
			<h2 class="mt-2 text-4xl font-medium tracking-tight text-cream md:text-6xl">Showcase</h2>
		</div>

		<div class="flex w-full min-w-0 flex-col gap-16 md:gap-24">
			{#each projects as project, i (project.id)}
				<WorkSectionItem
					{project}
					reverse={i % 2 !== 0}
					ctaVariant={i % 2 === 0 ? 'primaryHoverLight' : 'light'}
				/>
			{/each}
		</div>
	</div>
</section>
