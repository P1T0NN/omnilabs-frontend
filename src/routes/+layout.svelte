<script lang="ts">
	import './layout.css';
	import favicon from '@/shared/lib/assets/favicon.svg';

	// COMPONENTS
	import { Toaster } from '@/shared/components/ui/sonner';
	import Footer from '@/shared/components/ui/footer/footer.svelte';
	import Header from '@/shared/components/ui/header/header.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<Header />
{@render children()}
<Footer />
<Toaster richColors />