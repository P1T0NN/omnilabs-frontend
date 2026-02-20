<script lang="ts">
	// CONFIG
	import { COMPANY_DATA, UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/constants';

	// CLASSES
	import { headerClass } from './header.svelte.ts';

	// LUCIDE ICONS
	import MenuIcon from '@lucide/svelte/icons/menu';
	import XIcon from '@lucide/svelte/icons/x';

	function handleScroll() {
		headerClass.scrolled = window.scrollY > 20;
	}

	function toggleMobile() {
		headerClass.mobileOpen = !headerClass.mobileOpen;
	}

	$effect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	const navLinks = [
		{ href: '/#narrative', label: 'Strategy' },
		{ href: '/#volumes', label: 'Work' },
		{ href: '/#process', label: 'Process' },
		{ href: '/#pricing', label: 'Pricing' },
		{ href: '/#faq', label: 'FAQ' }
	];
</script>

<nav aria-label="Main navigation"
	class="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 transition-all duration-300 {headerClass.scrolled
		? 'pt-3'
		: ''}"
>
	<div
		class="relative flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300
		max-w-[1100px] w-[calc(100%-2rem)]
		{headerClass.scrolled
			? 'bg-background/88 backdrop-blur-xl border border-black/8 shadow-[0_8px_40px_rgba(0,0,0,0.08)]'
			: 'bg-background/50 backdrop-blur-lg border border-black/5'}"
	>
		<!-- Logo -->
		<a href="/" class="flex shrink-0 items-center">
			<span class="text-2xl font-black tracking-tighter font-sans text-foreground"
				>Company<span class="text-primary">Name</span></span
			>
		</a>

		<div class="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
			{#each navLinks as link}
				<a
					href={link.href}
					class="px-4 py-2 text-[0.82rem] font-bold uppercase tracking-widest text-neutral-600 hover:text-foreground hover:bg-black/4 rounded-xl transition-all duration-150"
				>
					{link.label}
				</a>
			{/each}
		</div>

		<div class="hidden md:flex items-center shrink-0">
			<a
				href={UNPROTECTED_PAGE_ENDPOINTS.CONTACT}
				class="rounded-full bg-primary px-5 py-2.5 text-[0.82rem] font-bold text-white shadow-[0_2px_20px_color-mix(in_srgb,var(--primary)_20%,transparent)] hover:bg-primary-hover transition-all duration-150 whitespace-nowrap"
			>
				Start a Project
			</a>
		</div>

		<button
			class="flex md:hidden rounded-xl bg-transparent p-1.5 transition-colors duration-150 hover:bg-black/5"
			onclick={toggleMobile}
			aria-label="Toggle menu"
		>
			{#if headerClass.mobileOpen}
				<XIcon class="h-5 w-5 text-neutral-700" />
			{:else}
				<MenuIcon class="h-5 w-5 text-neutral-700" />
			{/if}
		</button>
	</div>
</nav>

<!-- Mobile overlay menu -->
{#if headerClass.mobileOpen}
	<div class="fixed inset-0 z-40 flex flex-col bg-background/95 backdrop-blur-xl pt-24 px-6 pb-10">
		<!-- Nav links -->
		<div class="flex flex-col gap-1 mb-8">
			{#each navLinks as link}
				<a
					href={link.href}
					onclick={() => (headerClass.mobileOpen = false)}
					class="px-4 py-4 text-lg font-bold uppercase tracking-widest text-neutral-600 hover:text-foreground hover:bg-black/3 rounded-xl transition-all duration-150 border-b border-black/6 last:border-none"
				>
					{link.label}
				</a>
			{/each}
		</div>

		<!-- Mobile CTA -->
		<div class="mt-auto">
			<a
				href={UNPROTECTED_PAGE_ENDPOINTS.CONTACT}
				onclick={() => (headerClass.mobileOpen = false)}
				class="flex items-center justify-center rounded-2xl bg-primary px-6 py-4 text-base font-bold text-white uppercase tracking-widest hover:bg-primary-hover transition-all duration-150"
			>
				Start a Project
			</a>
		</div>
	</div>
{/if}
