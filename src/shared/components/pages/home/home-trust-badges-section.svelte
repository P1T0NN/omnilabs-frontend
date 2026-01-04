<script lang="ts">
	// LUCIDE ICONS
	import AwardIcon from '@lucide/svelte/icons/award';
	import UsersIcon from '@lucide/svelte/icons/users';
	import TrendingUpIcon from '@lucide/svelte/icons/trending-up';
	import ShieldCheckIcon from '@lucide/svelte/icons/shield-check';
</script>

<section class="bg-background px-6 py-16">
	<div class="mx-auto max-w-6xl">
		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
			<div class="flex flex-col items-center text-center">
				<div class="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
					<UsersIcon class="h-8 w-8 text-primary" />
				</div>
				<p class="mb-2 text-3xl font-bold text-foreground">100+</p>
				<p class="text-sm text-muted-foreground">Websites Launched</p>
			</div>

			<div class="flex flex-col items-center text-center">
				<div class="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
					<TrendingUpIcon class="h-8 w-8 text-primary" />
				</div>
				<p class="mb-2 text-3xl font-bold text-foreground">8x</p>
				<p class="text-sm text-muted-foreground">Average ROI</p>
			</div>

			<div class="flex flex-col items-center text-center">
				<div class="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
					<AwardIcon class="h-8 w-8 text-primary" />
				</div>
				<p class="mb-2 text-3xl font-bold text-foreground">20+</p>
				<p class="text-sm text-muted-foreground">Years Combined Experience</p>
			</div>

			<div class="flex flex-col items-center text-center">
				<div class="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
					<ShieldCheckIcon class="h-8 w-8 text-primary" />
				</div>
				<p class="mb-2 text-3xl font-bold text-foreground">100%</p>
				<p class="text-sm text-muted-foreground">Ownership Guarantee</p>
			</div>
		</div>
	</div>
</section>

