<script lang="ts">
	import './layout.css';

	// SVELTEKIT IMPORTS
	import { afterNavigate } from '$app/navigation';
	import { browser, dev } from '$app/environment';

	// LIBRARIES
	import { injectAnalytics } from '@vercel/analytics/sveltekit';

	// CONFIG
	import { LOGO_SHORT } from '@/shared/constants';

	// COMPONENTS
	import { Toaster } from '@/shared/components/ui/sonner';
	import Footer from '@/shared/components/ui/footer/footer.svelte';
	import Header from '@/shared/components/ui/header/header.svelte';

	let { children } = $props();

	injectAnalytics({ mode: dev ? 'development' : 'production' });

	/** SvelteKit client navigations often bypass native smooth scrolling for hash URLs. */
	if (browser) {
		afterNavigate(() => {
			const hash = window.location.hash;
			if (!hash) return;
			const id = decodeURIComponent(hash.slice(1));
			if (!id) return;
			requestAnimationFrame(() => {
				const el = document.getElementById(id);
				if (!el) return;
				const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
				el.scrollIntoView({ behavior: reduce ? 'instant' : 'smooth', block: 'start' });
			});
		});
	}
</script>

<svelte:head><link rel="icon" href={LOGO_SHORT} /></svelte:head>

<header>
	<Header />
</header>
<main id="main-content">
	{@render children()}
</main>
<Footer />
<Toaster richColors />