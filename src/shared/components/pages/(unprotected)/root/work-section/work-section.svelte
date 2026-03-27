<script lang="ts">
	// COMPONENTS
	import WorkSectionItem from './work-section-item.svelte';
	import Autoplay from 'embla-carousel-autoplay';
	import {
		Carousel,
		CarouselContent,
		CarouselItem,
		CarouselNext,
		CarouselPrevious,
	} from '@/shared/components/ui/carousel';

	// DATA
	import { WORK_DATA } from '@/shared/data/workData';

	const autoplayPlugin = Autoplay({ delay: 2000, stopOnInteraction: true });

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

		<Carousel
			class="w-full overflow-visible pt-14 md:pt-0"
			opts={{ loop: true, align: 'start' }}
			plugins={[autoplayPlugin]}
			onmouseenter={() => autoplayPlugin.stop()}
			onmouseleave={() => autoplayPlugin.play()}
		>
			<CarouselContent class="ms-0">
				{#each projects as project (project.id)}
					<CarouselItem class="ps-0">
						<WorkSectionItem {project} />
					</CarouselItem>
				{/each}
			</CarouselContent>
			<CarouselPrevious
				variant="ghost"
				size="icon-lg"
				class="size-10 z-20 rounded-full border border-cream/40 bg-charcoal text-cream shadow-sm hover:bg-cream/15 hover:text-charcoal hover:[&_svg]:text-charcoal max-md:end-auto max-md:top-2 max-md:translate-y-0 max-md:start-[calc(50%-2.75rem)] md:top-1/2 md:-translate-y-1/2 md:-start-14"
			/>
			<CarouselNext
				variant="ghost"
				size="icon-lg"
				class="size-10 z-20 rounded-full border border-cream/40 bg-charcoal text-cream shadow-sm hover:bg-cream/15 hover:text-charcoal hover:[&_svg]:text-charcoal max-md:start-[calc(50%+0.25rem)] max-md:end-auto max-md:top-2 max-md:translate-y-0 md:top-1/2 md:-translate-y-1/2 md:-end-14"
			/>
		</Carousel>
	</div>
</section>
