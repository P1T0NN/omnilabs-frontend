<script lang="ts">
	// CONFIG
	import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/constants';

	// COMPONENTS
	import WordChange from '@/shared/components/ui/animations/word-change.svelte';
	import TrustedBySection from '@/shared/components/pages/(unprotected)/root/trusted-by-section.svelte';

	// LUCIDE ICONS
	import ArrowRight from '@lucide/svelte/icons/arrow-right';

	const heroPhrases = ['sell.', 'convert.', 'scale.'] as const;
</script>

<section class="relative flex min-h-screen flex-col justify-between pt-24 md:pt-20 overflow-hidden">
	<div class="container mx-auto flex flex-1 items-center max-w-7xl px-6 md:px-12 lg:px-24">
		<div class="flex w-full flex-col items-center justify-center py-10 md:py-20 text-center hero-content">
			<h1
				class="mb-8 font-sans text-5xl leading-[0.85] font-black uppercase md:text-7xl lg:text-9xl"
			>
				Digital <br />
				Products <br />
				<span class="font-serif text-primary lowercase italic">
					That <WordChange words={heroPhrases} />
				</span>
			</h1>

			<div class="mb-10 max-w-xl border-l-4 border-primary py-2 pl-6 text-left hero-quote">
				<p class="text-xl leading-tight text-neutral-600 italic md:text-2xl">
					"We combine marketing strategy with engineering precision to build digital products that don't
					just look good — they turn visitors into customers. Web platforms, mobile apps, or both — built to convert."
				</p>
			</div>

			<div class="hero-cta">
				<a
					href={UNPROTECTED_PAGE_ENDPOINTS.CONTACT}
					class="group inline-flex h-14 items-center justify-center rounded-none bg-black px-10 font-sans text-md font-bold tracking-widest uppercase text-white transition-colors hover:bg-primary"
				>
					Book a Strategy Call
					<ArrowRight class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
				</a>
			</div>
		</div>
	</div>

	<TrustedBySection />
</section>