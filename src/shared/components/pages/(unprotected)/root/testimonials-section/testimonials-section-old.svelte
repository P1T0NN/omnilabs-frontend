<script lang="ts">
	// SVELTEKIT IMPORTS
	import { onDestroy, onMount } from 'svelte';

	// HOOKS
	import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver';

	// COMPONENTS
	import {
		Carousel,
		CarouselContent,
		CarouselItem,
		CarouselNext,
		CarouselPrevious
	} from '@/shared/components/ui/carousel';

	// DATA
	import { TESTIMONIALS_DATA } from '@/shared/data/testimonialsData';

	// TYPES
	import type { CarouselAPI } from '@/shared/components/ui/carousel/context';

	let carouselApi = $state<CarouselAPI | undefined>(undefined);
	let sectionRef: HTMLElement | undefined;
	let inView = $state(false);
	let cleanup: (() => void) | undefined;

	onMount(() => {
		const interval = setInterval(() => {
			carouselApi?.scrollNext();
		}, 5000);

		if (sectionRef) {
			cleanup = useIntersectionObserver(sectionRef, () => {
				inView = true;
			});
		}

		return () => clearInterval(interval);
	});

	onDestroy(() => cleanup?.());
</script>

<section>
	<div class="container mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
		<div bind:this={sectionRef} class="animate-on-in-view" class:in-view={inView}>
			<div class="mb-10 flex flex-col gap-4 text-center md:mb-16">
				<span class="animate-slide-up block font-bold tracking-widest text-primary uppercase">
					Client Results
				</span>

				<h2 class="animate-slide-up-delay-150 italic">Don't take our word for it.</h2>
			</div>

			<div class="animate-slide-up-delay-300 relative overflow-visible px-4 md:px-14">
				<Carousel
					opts={{ loop: true, align: 'center' }}
					setApi={(api) => {
						carouselApi = api;
					}}
					class="mx-auto w-full max-w-4xl"
				>
					<CarouselPrevious class="-start-8 md:-start-12" />
					<CarouselNext class="-end-8 md:-end-12" />
					<CarouselContent class="-ml-2 md:-ml-4">
						{#each TESTIMONIALS_DATA as t}
							<CarouselItem
								class="min-w-0 flex-[0_0_85%] pl-2 md:flex-none md:basis-1/2 md:pl-4 lg:basis-1/3"
							>
								<div
									class="group flex h-full min-w-0 flex-col gap-3 border-2 border-black bg-white p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_var(--primary)] md:gap-8 md:p-8"
								>
									<div class="text-3xl leading-none text-primary md:text-6xl">"</div>

									<p
										class="flex-1 text-sm leading-snug text-neutral-700 italic md:text-lg md:leading-relaxed"
									>
										{t.quote}
									</p>

									<div
										class="flex items-center gap-3 border-t border-neutral-200 pt-4 md:gap-4 md:pt-6"
									>
										<div
											class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-xs font-black text-background md:h-10 md:w-10 md:text-sm"
										>
											{t.initial}
										</div>

										<div>
											<p class="font-black tracking-tight uppercase">{t.author}</p>
											<p class="text-xs text-neutral-600">{t.role}</p>
										</div>
									</div>
								</div>
							</CarouselItem>
						{/each}
					</CarouselContent>
				</Carousel>
			</div>
		</div>
	</div>
</section>
