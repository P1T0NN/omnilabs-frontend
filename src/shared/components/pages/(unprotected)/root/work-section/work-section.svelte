<script lang="ts">
	// LIBRARIES
	import { m } from '@/shared/lib/paraglide/messages';

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

	const projects: Project[] = WORK_DATA.map((item) => ({
		id: item.id,
		title: item.title,
		category: item.client ?? m['RootPage.WorkSection.fallbackCategory'](),
		description: item.description,
		imgDesktop: item.imgDesktop,
		imgMobile: item.imgMobile,
		link: item.href
	}));

	const arrowBtnClass =
		'size-10 z-20 shrink-0 rounded-full border border-cream/40 bg-charcoal text-cream shadow-sm hover:bg-cream/15 hover:text-charcoal hover:[&_svg]:text-charcoal';
</script>

<section id="work" class="flex flex-col items-center justify-center bg-charcoal py-20 md:py-32">
	<div class="relative mx-auto flex max-w-8xl flex-col px-6 md:px-12 lg:px-24">
		<Carousel
			class="w-full overflow-visible"
			opts={{ loop: true, align: 'start' }}
			plugins={[autoplayPlugin]}
			onmouseenter={() => autoplayPlugin.stop()}
			onmouseleave={() => autoplayPlugin.play()}
		>
			<div class="mb-6 flex w-full min-w-0 items-center justify-between gap-4 md:mb-20">
				<h2
					class="mt-2 min-w-0 flex-1 text-4xl font-medium tracking-tight text-balance text-cream md:text-6xl"
				>
					{m['RootPage.WorkSection.title']()}
				</h2>
				<div class="flex shrink-0 items-center gap-2 md:hidden">
					<CarouselPrevious
						variant="ghost"
						size="icon-lg"
						class="{arrowBtnClass} relative inset-auto top-auto translate-y-0"
					/>
					<CarouselNext
						variant="ghost"
						size="icon-lg"
						class="{arrowBtnClass} relative inset-auto top-auto translate-y-0"
					/>
				</div>
			</div>

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
				class="{arrowBtnClass} hidden md:flex md:absolute md:top-1/2 md:-translate-y-1/2 md:start-2 lg:start-3 xl:-start-14"
			/>
			<CarouselNext
				variant="ghost"
				size="icon-lg"
				class="{arrowBtnClass} hidden md:flex md:absolute md:top-1/2 md:-translate-y-1/2 md:end-2 lg:end-3 xl:-end-14"
			/>
		</Carousel>
	</div>
</section>
