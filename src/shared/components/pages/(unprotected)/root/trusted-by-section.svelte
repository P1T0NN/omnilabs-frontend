<script lang="ts">
	// COMPONENTS
	import Marquee from '@/shared/components/ui/marquee/marquee.svelte';
	import WavyLinesBackground from '@/shared/components/ui/designs/wavy-lines-background.svelte';

	const trustedByLinks = [
		{ href: 'https://www.bgapartman.com', label: 'BGApartman' },
		{ href: 'https://followusnyc.com', label: 'FollowUs' },
		{ href: 'https://www.kontentkolektiv.com', label: 'Kontent Kolektiv' },
		{ href: 'https://www.crys-sports.com', label: 'Crys Sports' }
	] as const;

	const linkClass =
		'font-sans text-lg font-black tracking-tight text-neutral-400 uppercase transition-colors hover:text-black shrink-0';
</script>

<section class="relative overflow-hidden py-6 min-[875px]:py-20">
	<WavyLinesBackground class="absolute inset-x-0 top-[-50%] m-auto w-[1900px] h-auto opacity-40 max-[875px]:hidden" />

	<div class="relative z-10">
		<p class="mb-4 text-center font-sans text-xs font-bold tracking-widest text-neutral-500 uppercase min-[875px]:mb-4">
			Trusted by
		</p>

		<!-- Marquee: below 875px -->
		<div class="min-[875px]:hidden">
			<Marquee>
				{#each [...trustedByLinks, ...trustedByLinks] as link, i (link.href + '-' + i)}
					<a
						href={link.href}
						target="_blank"
						rel="noopener noreferrer"
						class={linkClass}
						aria-hidden={i >= trustedByLinks.length}
					>
						{link.label}
					</a>
				{/each}
			</Marquee>
		</div>

		<!-- Static: 875px and above -->
		<div class="hidden min-[875px]:flex flex-wrap items-center justify-center gap-x-12 gap-y-4 md:gap-x-16 container mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
			{#each trustedByLinks as link (link.href)}
				<a
					href={link.href}
					target="_blank"
					rel="noopener noreferrer"
					class="{linkClass} md:text-xl"
				>
					{link.label}
				</a>
			{/each}
		</div>
	</div>
</section>