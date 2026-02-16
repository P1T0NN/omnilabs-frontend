<script lang="ts">
	// COMPONENTS
	import Button from '@/shared/components/ui/button/button.svelte';

	// LUCIDE ICONS
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
</script>

<section class="bg-black py-32 text-white">
	<div class="container mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
		<div class="flex flex-col items-center text-center">
			<h2 class="mb-8 max-w-3xl font-serif text-5xl italic leading-tight md:text-7xl">
				Ready to write your <br />
				<span class="text-primary">masterpiece?</span>
			</h2>
			<p class="mb-12 max-w-xl text-lg text-neutral-400">
				Whether you need a micro-site or a full enterprise architecture, we're ready to engineer your
				digital legacy.
			</p>
			<Button>
				Start a Project
				<ArrowRight class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
			</Button>
		</div>
	</div>
</section>
