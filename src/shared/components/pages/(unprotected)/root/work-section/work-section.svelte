<script lang="ts">
	// COMPONENTS
	import WorkSectionItem from './work-section-item.svelte';

	let volumes = [
		{
			id: '01',
			title: 'BGApartman',
			issue: 'No. 01',
			client: 'Real Estate',
			description:
				'Full booking platform — apartment listings, reservation management, and owner dashboard. Bookings increased within the first month of launch.',
			img: '/home/opt/bgapartman-website-960w.webp',
			href: 'https://www.bgapartman.com',
			class: 'md:col-span-7'
		},
		{
			id: '02',
			title: 'FollowUs',
			issue: 'No. 02',
			client: 'Direct Marketing',
			description: 'High-converting web presence for a direct marketing company operating across multiple markets.',
			img: '/home/opt/followus-website-960w.webp',
			href: 'https://followusnyc.com',
			class: 'md:col-span-5 md:mt-16'
		},
		{
			id: '03',
			title: 'To be Added',
			issue: 'No. 03',
			client: 'UGC',
			description: 'The Leading UGC Company in whole Balkans',
			img: '/home/opt/kontentkolektiv-website-960w.webp',
			href: '#',
			class: 'md:col-span-8 md:col-start-3 md:mt-12'
		}
	];
</script>

<section id="volumes" class="bg-black py-32 text-background" style="clip-path: polygon(0 5vw, 100% 0, 100% 100%, 0% 100%);">
	<div class="container mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
		<div class="mb-24 flex flex-col items-end justify-between border-b-2 border-white/20 pb-8 md:flex-row">
			<h2 class="stroke-text font-sans text-6xl font-black text-transparent uppercase md:text-8xl">
				Archive
			</h2>
			<style>
				.stroke-text {
					-webkit-text-stroke: 2px var(--background);
				}
			</style>

			<div class="flex items-end gap-4">
				<div class="h-px w-24 bg-background"></div>
				<p class="font-serif text-2xl text-background italic">Selected works 2024-2026</p>
			</div>
		</div>

		<div class="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-12">
			{#each volumes as vol (vol.id)}
				<WorkSectionItem
					id={vol.id}
					title={vol.title}
					issue={vol.issue}
					client={vol.client}
					description={vol.description}
					img={vol.img}
					href={vol.href}
					class={vol.class}
				/>
			{/each}
		</div>
	</div>
</section>
