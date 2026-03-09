<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
		duration = 25,
		class: className = '',
		gap = 'gap-x-12',
	}: {
		children: Snippet;
		duration?: number;
		class?: string;
		gap?: string;
	} = $props();
</script>

<div class="marquee-wrapper overflow-hidden py-2 {className}">
	<div class="marquee-track flex w-max {gap} pr-12" style="animation-duration: {duration}s">
		{@render children()}
	</div>
</div>

<style>
	@keyframes marquee {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
		}
	}

	.marquee-track {
		animation: marquee 25s linear infinite;
	}

	@media (prefers-reduced-motion: reduce) {
		.marquee-track {
			animation: none;
		}
	}
</style>
