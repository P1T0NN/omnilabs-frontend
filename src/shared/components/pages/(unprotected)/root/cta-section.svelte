<script lang="ts">
	// CONFIG
	import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/constants';

	// UTILS
	import { reveal } from '@/shared/actions/reveal';

	// LUCIDE ICONS
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
</script>

<section class="bg-black py-32 text-white">
	<div class="container mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
		<div use:reveal class="flex flex-col items-center text-center">
			<h2 class="mb-8 max-w-3xl font-serif text-5xl italic leading-tight md:text-7xl">
				Your next customer is one website away.
			</h2>

			<p class="mb-12 max-w-xl text-lg text-neutral-600">
				Whether you need a high-converting micro-site or a full enterprise platform, we're ready to build the website your business actually deserves.
			</p>

			<a
				href={UNPROTECTED_PAGE_ENDPOINTS.CONTACT}
				class="group inline-flex h-16 min-w-[280px] items-center justify-center bg-white px-12 font-sans text-xl font-bold tracking-widest uppercase text-black transition-colors hover:bg-primary hover:text-white"
			>
				Start a Project
				<ArrowRight class="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
			</a>
		</div>
	</div>
</section>
