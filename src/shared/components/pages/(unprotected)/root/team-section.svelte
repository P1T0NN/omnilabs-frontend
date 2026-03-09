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
		<div class="mb-16">
			<span class="mb-4 block font-sans font-bold tracking-widest text-primary uppercase"
				>The Minds Behind It</span
			>
			<h2 class="font-sans text-5xl font-bold md:text-6xl">Team.</h2>
		</div>

		<div class="grid grid-cols-1 gap-12 md:grid-cols-2">
			{#each team as member (member.name)}
				<div class="group border-2 border-black bg-white p-8">
						<span
							class="mb-2 block font-sans text-sm font-bold tracking-widest text-primary uppercase"
							>{member.role}</span
						>
						<h3 class="mb-4 font-sans text-2xl font-black uppercase">{member.name}</h3>
						<p class="mb-6 leading-relaxed text-neutral-600">{member.bio}</p>
						<span
							class="inline-block border-l-4 border-primary px-4 py-1 font-sans text-sm font-bold uppercase tracking-widest"
							>{member.focus}</span
						>
				</div>
			{/each}
		</div>
	</div>
</section>
