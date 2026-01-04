<script lang="ts">
	// SVELTEKIT IMPORTS
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	let scrollProgress = $state(0);

	function handleScroll() {
		if (browser) {
			const windowHeight = window.innerHeight;
			const documentHeight = document.documentElement.scrollHeight;
			const scrollTop = window.scrollY;
			const scrollableHeight = documentHeight - windowHeight;
			scrollProgress = (scrollTop / scrollableHeight) * 100;
		}
	}

	onMount(() => {
		if (browser) {
			window.addEventListener('scroll', handleScroll);
			handleScroll(); // Initial calculation
		}
	});

	onDestroy(() => {
		if (browser) {
			window.removeEventListener('scroll', handleScroll);
		}
	});
</script>

<div class="fixed top-0 left-0 right-0 z-50 h-1 bg-muted">
	<div
		class="h-full bg-primary transition-all duration-150"
		style="width: {scrollProgress}%"
	></div>
</div>

