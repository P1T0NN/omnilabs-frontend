<script lang="ts">
    // SVELTEKIT IMPORTS
    import { onMount } from 'svelte';

    // LIBRARIES
    import { m } from '@/shared/lib/paraglide/messages';

    // CONFIG
    import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/constants';
    import { Link } from '@/shared/components/ui/link';

    // CLASSES
    import { headerClass } from './header.svelte.ts';

    let { navLinks }: { navLinks: { href: string; label: string }[] } = $props();

    onMount(() => {
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    });
</script>

<div class="fixed inset-0 z-40 flex flex-col bg-background/95 backdrop-blur-xl pt-24 px-6 pb-10">
    <div class="flex flex-col gap-1 mb-8">
        {#each navLinks as link (link.href)}
            <Link
                href={link.href}
                onclick={() => (headerClass.mobileOpen = false)}
                class="px-4 py-4 text-lg font-bold uppercase tracking-widest text-neutral-600 hover:text-foreground hover:bg-foreground/3 rounded-xl transition-all duration-150 border-b border-black/6 last:border-none"
            >
                {link.label}
            </Link>
        {/each}
    </div>

    <div class="mt-auto">
        <Link
            href={UNPROTECTED_PAGE_ENDPOINTS.CONTACT}
            target="_blank"
            rel="noopener noreferrer"
            onclick={() => (headerClass.mobileOpen = false)}
            class="flex items-center justify-center rounded-2xl bg-primary px-6 py-4 text-base font-bold text-white uppercase tracking-widest hover:bg-primary-hover transition-all duration-150"
        >
            {m['Header.cta']()}
        </Link>
    </div>
</div>