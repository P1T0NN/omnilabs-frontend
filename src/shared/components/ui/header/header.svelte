<script lang="ts">
	// SVELTEKIT IMPORTS
	import { onMount } from 'svelte';

	// LIBRARIES
	import { m } from '@/shared/lib/paraglide/messages';

	// CONFIG
	import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/constants';

	// CLASSES
	import { headerClass } from './header.svelte.ts';

	// COMPONENTS
	import HeaderMobile from './header-mobile.svelte';
	import Logo from '../logo/logo.svelte';
	import { Link } from '@/shared/components/ui/link';
	import LanguageSelector from '../language-selector/language-selector.svelte';

	// LUCIDE ICONS
	import MenuIcon from '@lucide/svelte/icons/menu';
	import XIcon from '@lucide/svelte/icons/x';

	function handleScroll() {
		headerClass.scrolled = window.scrollY > 20;
	}

	function toggleMobile() {
		headerClass.mobileOpen = !headerClass.mobileOpen;
	}

	onMount(() => {
		handleScroll();
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	const navLinks = $derived([
		{ href: UNPROTECTED_PAGE_ENDPOINTS.STRATEGY, label: m['Header.navStrategy']() },
		{ href: UNPROTECTED_PAGE_ENDPOINTS.WORK, label: m['Header.navWork']() },
		{ href: UNPROTECTED_PAGE_ENDPOINTS.PROCESS, label: m['Header.navProcess']() },
		{ href: UNPROTECTED_PAGE_ENDPOINTS.FAQ, label: m['Header.navFaq']() }
	]);
</script>

<nav aria-label={m['Header.ariaMainNavigation']()}
	class="fixed top-0 left-0 right-0 z-50 pt-5 transition-all duration-300 {headerClass.scrolled
		? 'pt-3'
		: ''}"
>
	<div class="container mx-auto max-w-8xl px-6 md:px-12 lg:px-24">
		<div
			class="relative flex w-full items-center justify-between rounded-2xl px-5 py-2.5 h-17 min-h-17 max-h-17 transition-all duration-300
			{headerClass.scrolled
				? 'bg-background/88 backdrop-blur-xl border border-black/8 shadow-[0_8px_40px_rgba(0,0,0,0.08)]'
				: 'bg-background/50 backdrop-blur-lg border border-black/5'}"
		>
			<Logo />

			<div class="hidden items-center gap-1 absolute left-1/2 -translate-x-1/2 xl:flex">
				{#each navLinks as link (link.href)}
					<Link
						href={link.href}
						class="px-4 py-2 text-[0.82rem] font-bold uppercase tracking-widest text-neutral-600 hover:text-foreground hover:bg-foreground/4 rounded-xl transition-all duration-150"
					>
						{link.label}
					</Link>
				{/each}
			</div>

			<div class="hidden shrink-0 items-center gap-2 xl:flex">
				<Link
					href={UNPROTECTED_PAGE_ENDPOINTS.CONTACT}
					target="_blank"
					rel="noopener noreferrer"
					class="rounded-full bg-primary px-5 py-2.5 text-[0.82rem] font-bold text-white shadow-[0_2px_20px_color-mix(in_srgb,var(--primary)_20%,transparent)] hover:bg-primary-hover transition-all duration-150 whitespace-nowrap"
				>
					{m['Header.cta']()}
				</Link>

				<LanguageSelector />
			</div>

			<div class="flex items-center gap-2 xl:hidden">
				<LanguageSelector />

				<button
					class="rounded-xl bg-transparent p-1.5 transition-colors duration-150 hover:bg-foreground/5"
					onclick={toggleMobile}
					aria-label={m['Header.ariaToggleMenu']()}
				>
					{#if headerClass.mobileOpen}
						<span class="inline-flex h-5 w-5 items-center justify-center text-neutral-700" aria-hidden="true">
							<XIcon class="h-5 w-5 text-neutral-700" />
						</span>
					{:else}
						<MenuIcon class="h-5 w-5 text-neutral-700" />
					{/if}
				</button>
			</div>
		</div>
	</div>
</nav>

{#if headerClass.mobileOpen}
	<HeaderMobile navLinks={navLinks} />
{/if}
