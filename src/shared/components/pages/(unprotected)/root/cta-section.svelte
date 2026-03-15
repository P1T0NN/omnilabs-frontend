<script lang="ts">
	// CONFIG
	import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/constants';

	// LUCIDE ICONS
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
</script>

<section class="bg-black py-32 text-background">
	<div class="container mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
		<div class="flex flex-col items-center text-center">
			<h2 class="mb-8 max-w-3xl font-serif text-5xl italic leading-tight md:text-7xl">
				Your next customer is one product away.
			</h2>
			
			<a
				href={UNPROTECTED_PAGE_ENDPOINTS.CONTACT}
				class="group inline-flex h-14 min-w-[280px] items-center justify-center gap-2 bg-background px-10 font-sans text-base font-bold tracking-widest uppercase text-black transition-colors hover:bg-primary hover:text-white"
			>
				Start a Project
				<ArrowRight class="h-5 w-5 transition-transform group-hover:translate-x-1" />
			</a>
		</div>
	</div>
</section>
