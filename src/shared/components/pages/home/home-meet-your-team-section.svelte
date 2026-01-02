<script lang="ts">
	// LUCIDE ICONS
	import UserIcon from '@lucide/svelte/icons/user';
</script>

<section class="bg-card px-6 py-24">
	<div class="mx-auto max-w-6xl">
		<h2 class="mb-16 text-center text-3xl font-bold text-balance text-foreground md:text-4xl">
			Meet Your <span class="text-primary">Unfair Advantage</span>
		</h2>

		<div class="mb-12 grid gap-12 md:grid-cols-2">
			<!-- Left column - Developer -->
			<div class="text-center">
				<div class="mb-6 mx-auto h-32 w-32 rounded-full bg-muted flex items-center justify-center">
					<!-- Placeholder for photo - replace with actual image -->
					<UserIcon class="h-16 w-16 text-muted-foreground" />
				</div>
				<h3 class="mb-2 text-xl font-bold text-foreground">Lead Developer & Technical Expert</h3>
				<p class="leading-relaxed text-muted-foreground">
					I build websites that load in under 1 second and can handle massive growth. I've built complex systems for ecommerce, booking platforms, and business analytics. My focus: speed, reliability, and making sure your site never becomes your bottleneck.
				</p>
			</div>

			<!-- Right column - Marketing CEO -->
			<div class="text-center">
				<div class="mb-6 mx-auto h-32 w-32 rounded-full bg-muted flex items-center justify-center">
					<!-- Placeholder for photo - replace with actual image -->
					<UserIcon class="h-16 w-16 text-muted-foreground" />
				</div>
				<h3 class="mb-2 text-xl font-bold text-foreground">Marketing Strategist & CEO</h3>
				<p class="leading-relaxed text-muted-foreground">
					As CEO of a major marketing company, I've spent years helping businesses convert more customers. I know what makes people buy, how to position you against competitors, and what conversion triggers work in different industries. I bring that expertise to every project we take on.
				</p>
			</div>
		</div>

		<p class="mx-auto max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">
			Together, we give you something rare: <span class="font-medium text-foreground">world-class marketing strategy AND technical execution.</span> Most agencies give you one or the other. We give you both.
		</p>
	</div>
</section>

