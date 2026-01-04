<script lang="ts">
	// LUCIDE ICONS
	import UserIcon from '@lucide/svelte/icons/user';
</script>

<section class="bg-card px-6 py-24">
	<div class="mx-auto max-w-6xl">
		<h2 class="mb-16 text-center text-3xl font-bold text-balance text-foreground md:text-4xl">
			Meet The Team Behind Your Growth
		</h2>

		<div class="mb-12 grid gap-12 md:grid-cols-2">
			<!-- Left column - Developer -->
			<div class="text-center">
				<div class="mb-6 mx-auto h-32 w-32 rounded-full bg-muted flex items-center justify-center">
					<!-- Placeholder for photo - replace with actual image -->
					<UserIcon class="h-16 w-16 text-muted-foreground" />
				</div>
				<h3 class="mb-2 text-xl font-bold text-foreground">Technical Architect</h3>
				<div class="mb-4 flex flex-wrap justify-center gap-2">
					<span class="rounded-md border border-border bg-card px-3 py-1 text-xs font-medium text-foreground">Rust & Svelte Expert</span>
					<span class="rounded-md border border-border bg-card px-3 py-1 text-xs font-medium text-foreground">Enterprise-Grade Development</span>
					<span class="rounded-md border border-border bg-card px-3 py-1 text-xs font-medium text-foreground">Ecommerce • Booking • Analytics</span>
				</div>
				<p class="leading-relaxed text-muted-foreground">
					I build with the same technologies Netflix and Spotify use for speed and reliability. I've created complex systems handling thousands of users — ecommerce platforms, booking systems, and business analytics dashboards. When I build something, it doesn't break.
				</p>
			</div>

			<!-- Right column - Marketing CEO -->
			<div class="text-center">
				<div class="mb-6 mx-auto h-32 w-32 rounded-full bg-muted flex items-center justify-center">
					<!-- Placeholder for photo - replace with actual image -->
					<UserIcon class="h-16 w-16 text-muted-foreground" />
				</div>
				<h3 class="mb-2 text-xl font-bold text-foreground">Marketing Strategist & CEO</h3>
				<div class="mb-4 flex flex-wrap justify-center gap-2">
					<span class="rounded-md border border-border bg-card px-3 py-1 text-xs font-medium text-foreground">Million-Dollar Company CEO</span>
					<span class="rounded-md border border-border bg-card px-3 py-1 text-xs font-medium text-foreground">Conversion Psychology Expert</span>
					<span class="rounded-md border border-border bg-card px-3 py-1 text-xs font-medium text-foreground">15+ Industries</span>
				</div>
				<p class="leading-relaxed text-muted-foreground">
					I built and scaled a million-dollar marketing company by understanding one thing: what makes people buy. I know the psychological triggers that convert visitors into customers, and how to position you as the obvious choice against competitors.
				</p>
			</div>
		</div>

		<p class="mx-auto mb-8 max-w-3xl text-center text-lg font-bold text-foreground">
			Strategy + execution. Most agencies give you one or the other. We give you both.
		</p>

		<div class="mx-auto flex max-w-2xl flex-wrap justify-center gap-6 text-sm text-muted-foreground">
			<span>Combined 20+ years experience</span>
			<span>•</span>
			<span>100+ websites launched</span>
			<span>•</span>
			<span>Avg. client ROI: 8x in first year</span>
		</div>
	</div>
</section>

