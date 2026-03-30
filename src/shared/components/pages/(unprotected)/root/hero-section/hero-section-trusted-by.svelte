<script lang="ts">
    // LIBRARIES
    import { m } from '@/shared/lib/paraglide/messages';

    // COMPONENTS
    import Marquee from '@/shared/components/ui/marquee/marquee.svelte';
    import { Link } from '@/shared/components/ui/link';
    
    // DATA
    import { TRUSTED_BY_DATA } from '@/shared/data/trustedByData';

    // SVGs
    import LukavukovicLogo from '@/shared/svgs/lukavukovic-logo.svelte';
</script>

<div class="relative shrink-0 border-t border-border/30 py-2 md:py-3 lg:py-2.5">
    <div class="container mx-auto max-w-8xl overflow-hidden px-6 md:px-12 lg:px-24">
        <div class="flex w-full flex-col gap-2 md:gap-3 lg:gap-2">
            <p id="trusted-by-heading" class="self-center text-base font-bold text-neutral-500 md:self-start md:text-2xl">
                {m['RootPage.HeroSection.trustedBy']()}
            </p>

            <Marquee>
                {#each [...TRUSTED_BY_DATA, ...TRUSTED_BY_DATA] as link, i (link.href + '-' + i)}
                    {@const label = link.label}
                    <Link
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex shrink-0 items-center gap-2 text-xl font-black uppercase tracking-tight transition-opacity hover:opacity-80 md:gap-3 md:text-2xl lg:text-xl"
                        aria-hidden={i >= TRUSTED_BY_DATA.length}
                    >
                        {#if label === 'Luka Vukovic'}
                            <span class="flex shrink-0 rounded object-contain [&_svg]:h-9 [&_svg]:w-9 md:[&_svg]:h-10 md:[&_svg]:w-10">
                                <LukavukovicLogo width={40} height={40} />
                            </span>
                        {:else}
                            <img
                                src={link.imgUrl}
                                alt=""
                                class="rounded object-contain"
                                class:h-12={label === 'BGApartman'}
                                class:w-12={label === 'BGApartman'}
                                class:h-10={label !== 'BGApartman'}
                                class:w-10={label !== 'BGApartman'}
                                loading="lazy"
                                onerror={(e) => {
                                    const el = e.currentTarget as HTMLImageElement;
                                    if (el) el.style.display = 'none';
                                }}
                            />
                        {/if}

                        <span class="trusted-by-normal-case text-foreground">{label}</span>
                    </Link>
                {/each}
            </Marquee>
        </div>
    </div>
</div>