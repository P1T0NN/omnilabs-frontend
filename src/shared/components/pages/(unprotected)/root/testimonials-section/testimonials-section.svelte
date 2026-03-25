<script lang="ts">
	import { m } from '@/shared/lib/paraglide/messages';

	// COMPONENTS
	import TestimonialsSectionItem from './testimonials-section-item.svelte';

	// DATA
	import { TESTIMONIALS_CARDS } from '@/shared/data/testimonialsData';

	const cardShadow =
		'rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px';

	const column1 = $derived([TESTIMONIALS_CARDS[0], TESTIMONIALS_CARDS[3], TESTIMONIALS_CARDS[6]]);
	const column2 = $derived([TESTIMONIALS_CARDS[1], TESTIMONIALS_CARDS[4], TESTIMONIALS_CARDS[7]]);
	const column3 = $derived([TESTIMONIALS_CARDS[2], TESTIMONIALS_CARDS[5], TESTIMONIALS_CARDS[8]]);
</script>

<section class="overflow-hidden bg-background pt-12 pb-24">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mb-16 text-center">
			<span class="animate-slide-up block font-bold tracking-widest text-primary uppercase">
				{m['RootPage.TestimonialsSection.eyebrow']()}
			</span>

			<h2 class="animate-slide-up-delay-150 italic">
				{m['RootPage.TestimonialsSection.title']()}
			</h2>
		</div>

		<div class="relative">
			<div
				class="pointer-events-none absolute top-0 right-0 left-0 z-10 h-32 bg-linear-to-b from-background to-transparent"
			></div>
			<div
				class="pointer-events-none absolute right-0 bottom-0 left-0 z-10 h-32 bg-linear-to-t from-background to-transparent"
			></div>

			<div class="h-[600px] md:hidden">
				<div class="relative h-full overflow-hidden">
					<div class="testimonials-scroll-down testimonials-scroll-down-slow-hover">
						{#each [...TESTIMONIALS_CARDS, ...TESTIMONIALS_CARDS] as testimonial, i (i)}
							<TestimonialsSectionItem {testimonial} {cardShadow} />
						{/each}
					</div>
				</div>
			</div>

			<div class="hidden h-[600px] gap-4 md:grid md:grid-cols-3">
				<div class="relative overflow-hidden">
					<div class="testimonials-scroll-down testimonials-scroll-down-slow-hover">
						{#each [...column1, ...column1] as testimonial, i (i)}
							<TestimonialsSectionItem {testimonial} {cardShadow} />
						{/each}
					</div>
				</div>

				<div class="relative overflow-hidden">
					<div class="testimonials-scroll-up testimonials-scroll-up-slow-hover">
						{#each [...column2, ...column2] as testimonial, i (i)}
							<TestimonialsSectionItem {testimonial} {cardShadow} />
						{/each}
					</div>
				</div>

				<div class="relative overflow-hidden">
					<div class="testimonials-scroll-down testimonials-scroll-down-slow-hover">
						{#each [...column3, ...column3] as testimonial, i (i)}
							<TestimonialsSectionItem {testimonial} {cardShadow} />
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	@keyframes testimonials-scroll-down {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(-50%);
		}
	}

	@keyframes testimonials-scroll-up {
		from {
			transform: translateY(-50%);
		}
		to {
			transform: translateY(0);
		}
	}

	.testimonials-scroll-down {
		animation: testimonials-scroll-down 30s linear infinite;
	}

	.testimonials-scroll-up {
		animation: testimonials-scroll-up 30s linear infinite;
	}

	.testimonials-scroll-down-slow-hover:hover,
	.testimonials-scroll-up-slow-hover:hover {
		animation-play-state: paused;
	}
</style>
