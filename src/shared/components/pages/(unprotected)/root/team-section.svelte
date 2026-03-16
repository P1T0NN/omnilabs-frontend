<script lang="ts">
	const team = [
		{
			role: 'The Architect',
			name: 'Senior Developer',
			bio: 'A programmer with extensive experience delivering high-stakes, technically demanding projects. Zero tolerance for bloat — only blazing-fast, scalable architecture.',
			focus: 'Performance & Engineering'
		},
		{
			role: 'The Strategist',
			name: 'Marketing CEO',
			bio: 'CEO of a million-dollar marketing agency. She maps every word and section to psychological triggers that convert. Where the text goes is where the money follows.',
			focus: 'Conversion & Psychology'
		}
	];
</script>

<section id="team" class="border-t-2 border-black bg-background py-32">
	<div class="container mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
		<div class="mb-16 flex flex-col gap-4">
			<span class="block font-bold tracking-widest text-primary uppercase"
				>The Minds Behind It</span
			>
			<h2 class="font-bold">Team.</h2>
		</div>

		<div class="grid grid-cols-1 gap-12 md:grid-cols-2">
			{#each team as member (member.name)}
				<div class="group flex flex-col gap-4 border-2 border-black bg-white p-8">
						<span
							class="block text-sm font-bold tracking-widest text-primary uppercase"
							>{member.role}</span
						>
						<h3 class="font-black uppercase">{member.name}</h3>
						<p class="leading-relaxed text-neutral-600">{member.bio}</p>
						<span
							class="inline-block border-l-4 border-primary px-4 py-1 text-sm font-bold uppercase tracking-widest"
							>{member.focus}</span
						>
				</div>
			{/each}
		</div>
	</div>
</section>
