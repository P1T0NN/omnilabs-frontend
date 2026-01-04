<script lang="ts">
	// SVELTEKIT IMPORTS
	import { onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	// CONFIG
	import { COMPANY_NAME, UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/constants/constants';

	// CLASSES
	import { headerClass } from './index.svelte.ts';

	// UTILS
	import { scrollTo } from '@/shared/utils/scrollTo';

	// LUCIDE ICONS
	import XIcon from '@lucide/svelte/icons/x';
	import MenuIcon from '@lucide/svelte/icons/menu';

	function handleScroll() {
		if (browser) {
			headerClass.scrolled = window.scrollY > 50;
		}
	}

	if (browser) {
		window.addEventListener('scroll', handleScroll);
	}

	function toggleMenu() {
		headerClass.mobileMenuOpen = !headerClass.mobileMenuOpen;
	}

	function handleScrollTo(id: string) {
		scrollTo(id);
		headerClass.mobileMenuOpen = false;
	}

	onDestroy(() => {
		if (browser) {
			window.removeEventListener('scroll', handleScroll);
		}
	});
</script>

<nav
	class="fixed top-0 right-0 left-0 z-50 transition-all duration-300 {headerClass.scrolled
		? 'border-b border-border bg-background/95 backdrop-blur-md'
		: 'bg-transparent'}"
>
	<div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
		<a href="/" class="text-xl font-bold text-foreground">
			<span class="text-primary">●</span> {COMPANY_NAME}
		</a>

		<div class="hidden items-center gap-8 md:flex">
			<button
				onclick={() => handleScrollTo('problem')}
				class="text-sm text-muted-foreground transition-colors hover:text-foreground">Problem</button
			>
			<button
				onclick={() => handleScrollTo('showcase')}
				class="text-sm text-muted-foreground transition-colors hover:text-foreground">Our Work</button
			>
			<button
				onclick={() => handleScrollTo('pricing')}
				class="text-sm text-muted-foreground transition-colors hover:text-foreground">Pricing</button
			>
			<button
				onclick={() => handleScrollTo('process')}
				class="text-sm text-muted-foreground transition-colors hover:text-foreground">Process</button
			>
			<button
				onclick={() => handleScrollTo('faq')}
				class="text-sm text-muted-foreground transition-colors hover:text-foreground">FAQ</button
			>
			<a
				href={UNPROTECTED_PAGE_ENDPOINTS.CONTACT}
				class="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
			>
				Book a Call
			</a>
		</div>

		<button onclick={toggleMenu} class="p-2 text-foreground md:hidden">
			{#if headerClass.mobileMenuOpen}
				<XIcon class="h-6 w-6" />
			{:else}
				<MenuIcon class="h-6 w-6" />
			{/if}
		</button>
	</div>

		{#if headerClass.mobileMenuOpen}
		<div
			class="flex flex-col gap-4 border-t border-border bg-background/95 px-6 py-4 backdrop-blur-md md:hidden"
		>
			<button
				onclick={() => handleScrollTo('problem')}
				class="text-left text-muted-foreground transition-colors hover:text-foreground">Problem</button
			>
			<button
				onclick={() => handleScrollTo('showcase')}
				class="text-left text-muted-foreground transition-colors hover:text-foreground">Our Work</button
			>
			<button
				onclick={() => handleScrollTo('pricing')}
				class="text-left text-muted-foreground transition-colors hover:text-foreground">Pricing</button
			>
			<button
				onclick={() => handleScrollTo('process')}
				class="text-left text-muted-foreground transition-colors hover:text-foreground">Process</button
			>
			<button
				onclick={() => handleScrollTo('faq')}
				class="text-left text-muted-foreground transition-colors hover:text-foreground">FAQ</button
			>
			<a
				href={UNPROTECTED_PAGE_ENDPOINTS.CONTACT}
				class="w-full rounded-lg bg-primary px-4 py-2 text-center font-medium text-primary-foreground transition-colors hover:bg-primary/90"
			>
				Book a Call
			</a>
		</div>
		{/if}
</nav>
