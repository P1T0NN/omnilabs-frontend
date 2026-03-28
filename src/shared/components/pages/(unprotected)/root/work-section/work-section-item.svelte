<script lang="ts">
	// LIBRARIES
	import { m } from '@/shared/lib/paraglide/messages';

	// COMPONENTS
	import CtaButton from '@/shared/components/ui/cta-button/cta-button.svelte';

	interface Project {
		title: string;
		category: string;
		description: string;
		imgDesktop: string;
		imgMobile: string;
		link: string;
	}

	interface Props {
		project: Project;
	}

	let { project }: Props = $props();
</script>

<div
	class="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start lg:justify-items-stretch lg:gap-16"
>
	<div class="min-w-0 w-full">
		<div class="relative w-full">
			<div class="w-full">
				<img
					src={project.imgDesktop}
					alt="{project.title} ({m['RootPage.WorkSection.screenshotDesktop']()})"
					class="h-auto w-full object-contain drop-shadow-lg"
					loading="lazy"
					decoding="async"
				/>
			</div>
			<div class="absolute top-1/2 right-0 w-[22%] translate-y-[calc(-50%+1.25rem)]">
				<img
					src={project.imgMobile}
					alt="{project.title} ({m['RootPage.WorkSection.screenshotMobile']()})"
					class="h-auto w-full object-contain drop-shadow-lg"
					loading="lazy"
					decoding="async"
				/>
			</div>
		</div>
	</div>

	<div class="flex min-w-0 flex-col gap-4">
		<p class="text-xs font-bold tracking-widest text-neutral-400 uppercase">{project.category}</p>
		<h3 class="text-3xl font-bold text-cream md:text-4xl">{project.title}</h3>
		<p class="text-lg leading-relaxed text-neutral-400">{project.description}</p>
		<CtaButton href={project.link} variant="primaryHoverLight" class="mt-2 min-w-0 self-start">
			{m['RootPage.WorkSection.viewProject']()}
		</CtaButton>
	</div>
</div>
