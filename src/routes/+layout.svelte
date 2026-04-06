<script lang="ts">
	import './layout.css';
	import favicon from '@/shared/lib/assets/favicon.svg';

	// SVELTEKIT IMPORTS
	import { dev } from '$app/environment';

	// LIBRARIES
	import { injectAnalytics } from '@vercel/analytics/sveltekit';

	// COMPONENTS
	import { Toaster } from '@/shared/components/ui/sonner';
	import Footer from '@/shared/components/ui/footer/footer.svelte';
	import Header from '@/shared/components/ui/header/header.svelte';

	let { children } = $props();

	injectAnalytics({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<header>
	<Header />
</header>
<main id="main-content">
	{@render children()}
</main>
<Footer />
<Toaster richColors />