<script lang="ts">
	// SVELTEKIT IMPORTS
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	// CONFIG
	import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/constants/constants';

	// LUCIDE ICONS
	import CalendarIcon from '@lucide/svelte/icons/calendar';

	let showButton = $state(false);

	function handleScroll() {
		if (browser) {
			// Show button after scrolling down 300px
			showButton = window.scrollY > 300;
		}
	}

	onMount(() => {
		if (browser) {
			window.addEventListener('scroll', handleScroll);
		}
	});

	onDestroy(() => {
		if (browser) {
			window.removeEventListener('scroll', handleScroll);
		}
	});
</script>

<!-- Floating CTA Button -->
{#if showButton}
	<div
		class="fixed bottom-6 right-6 z-50 transition-all duration-300 {showButton
			? 'translate-y-0 opacity-100'
			: 'translate-y-4 opacity-0'}"
	>
		<a
			href={UNPROTECTED_PAGE_ENDPOINTS.CONTACT}
			class="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:scale-105 hover:bg-primary/90"
		>
			<CalendarIcon class="h-5 w-5" />
			Book Free Call
		</a>
	</div>
{/if}

