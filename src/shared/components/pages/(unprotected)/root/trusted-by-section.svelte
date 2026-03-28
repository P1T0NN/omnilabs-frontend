<script lang="ts">
	// LIBRARIES
	import { m } from '@/shared/lib/paraglide/messages';

	// COMPONENTS
	import Marquee from '@/shared/components/ui/marquee/marquee.svelte';
	import { Link } from '@/shared/components/ui/link';
	import LukavukovicLogo from '@/shared/svgs/lukavukovic-logo.svelte';

	// DATA
	import { TRUSTED_BY_DATA } from '@/shared/data/trustedByData';
</script>

<section class="relative overflow-hidden pb-8 pt-4 md:pb-12 md:pt-6" aria-labelledby="trusted-by-heading">
	<div class="container mx-auto max-w-8xl px-6 md:px-12 lg:px-24">
		<div class="flex w-full flex-col gap-4">
			<p id="trusted-by-heading" class="text-center text-lg font-bold text-neutral-500">
				{m['RootPage.HeroSection.trustedBy']()}
			</p>

			<Marquee>
				{#each [...TRUSTED_BY_DATA, ...TRUSTED_BY_DATA] as link, i (link.href + '-' + i)}
					{@const label = link.label}
					<Link
						href={link.href}
						target="_blank"
						rel="noopener noreferrer"
						class="flex shrink-0 items-center gap-3 text-2xl font-black uppercase tracking-tight transition-opacity hover:opacity-80"
						style={['Kontent Kolektiv', 'BGApartman', 'Crys Sports', 'FollowUs'].includes(label)
							? undefined
							: `color: ${link.color}`}
						aria-hidden={i >= TRUSTED_BY_DATA.length}
					>
						{#if label === 'Luka Vukovic'}
							<span class="flex shrink-0 rounded object-contain [&_svg]:h-10 [&_svg]:w-10">
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

						{#if label === 'BGApartman'}
							<span class="trusted-by-normal-case trusted-by-bgapartman">BGApartman</span>
						{:else if label === 'Crys Sports'}
							<span class="trusted-by-normal-case trusted-by-cryssports inline whitespace-nowrap"
								><span style="color: #2563eb">Crys</span><span style="color: #dc2626">Sports</span></span
							>
						{:else if label === 'FollowUs'}
							<span class="trusted-by-normal-case trusted-by-followus inline whitespace-nowrap"
								><span class="trusted-by-followus-follow text-neutral-500">Follow</span><span
									class="trusted-by-followus-us">US</span
								></span
							>
						{:else if label === 'Kontent Kolektiv'}
							<span class="trusted-by-normal-case trusted-by-gradient-text">{label}</span>
						{:else if label === 'Luka Vukovic'}
							<span class="trusted-by-normal-case">{label}</span>
						{:else}
							<span>{label}</span>
						{/if}
					</Link>
				{/each}
			</Marquee>
		</div>
	</div>
</section>

<style>
	/* Override parent uppercase so labels keep their casing (BGApartman, Follow, US, CrysSports, Kontent Kolektiv) */
	.trusted-by-normal-case {
		text-transform: none;
	}
	.trusted-by-gradient-text {
		background: linear-gradient(135deg, #e94590 0%, #6c63ff 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}
	/* BGApartman: single label, primary (amber/gold from their theme) */
	.trusted-by-bgapartman {
		color: oklch(0.7 0.18 65);
	}
	/* FollowUs: one unit "FollowUS", Follow neutral, US deep burgundy accent */
	.trusted-by-followus {
		white-space: nowrap;
	}
	.trusted-by-followus-us {
		color: oklch(0.42 0.12 25);
	}
</style>
