<script lang="ts">
	// SVELTEKIT IMPORTS
	import { onMount, onDestroy } from 'svelte';

	import './layout.css';
	import favicon from '@/shared/lib/assets/favicon.svg';

	// CLASSES
	import { freeAuditPopupManager } from '@/shared/components/ui/free-audit-popup/index.svelte';

	// COMPONENTS
	import Header from '@/shared/components/ui/header/header.svelte';
	import Footer from '@/shared/components/ui/footer/footer.svelte';
	import { Toaster } from '@/shared/components/ui/sonner';
	import FreeAuditPopup from '@/shared/components/ui/free-audit-popup/free-audit-popup.svelte';

	let { children } = $props();
	let showPopup = $state(false);

	onMount(() => {
		const scrollHandler = freeAuditPopupManager.getScrollHandler();
		
		if (scrollHandler) {
			window.addEventListener('scroll', scrollHandler, { passive: true });
			// Check on mount in case user is already scrolled
			scrollHandler();
		}
	});

	// Sync popup state
	$effect(() => {
		if (freeAuditPopupManager) {
			showPopup = freeAuditPopupManager.showPopup;
		}
	});
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<Header />
{@render children()}
<Footer />
<Toaster richColors />
<FreeAuditPopup bind:open={showPopup} />