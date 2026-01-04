<script lang="ts">
	// LUCIDE ICONS
	import AlertTriangleIcon from '@lucide/svelte/icons/alert-triangle';
	import CheckCircle2Icon from '@lucide/svelte/icons/check-circle-2';
</script>

<section class="bg-card px-6 py-24">
	<div class="mx-auto max-w-6xl">
		<h2 class="mb-4 text-center text-3xl font-bold text-balance text-foreground md:text-4xl">
			Here's What Other Developers Won't Tell You
		</h2>
		<p class="mx-auto mb-12 max-w-2xl text-center text-lg text-muted-foreground">
			After launch, you WILL need changes. Here's the smart way to handle it.
		</p>

		<!-- The Reality -->
		<div class="mx-auto mb-12 max-w-4xl rounded-xl border border-border bg-background p-8">
			<p class="mb-4 leading-relaxed text-muted-foreground">
				6 months after launch, you'll need to:
			</p>
			<ul class="mb-4 space-y-2 text-sm text-muted-foreground">
				<li>• Add a new team member (needs photo, bio)</li>
				<li>• Update your pricing (market changed)</li>
				<li>• Test a different headline (see what converts better)</li>
				<li>• Add a new service (business evolved)</li>
				<li>• Fix a broken link (someone found a bug)</li>
				<li>• Update your promo (seasonal offer)</li>
			</ul>
			<p class="font-medium text-foreground">
				This isn't a 'maybe.' It's guaranteed. Your business evolves. Your site must too.
			</p>
		</div>

		<!-- The Choice -->
		<div class="mx-auto mb-12 grid max-w-5xl gap-8 md:grid-cols-2">
			<!-- Pay Per Change -->
			<div class="rounded-xl border border-destructive/30 bg-background p-6">
				<h3 class="mb-6 flex items-center gap-2 text-xl font-bold text-foreground">
					<AlertTriangleIcon class="h-5 w-5 text-destructive" />
					Pay Per Change (Most developers)
				</h3>
				<div class="mb-4">
					<p class="mb-3 font-medium text-foreground">What it costs:</p>
					<ul class="space-y-2 text-sm text-muted-foreground">
						<li>• Text change: $150</li>
						<li>• Image update: $100</li>
						<li>• Form tweak: $200</li>
						<li>• New page: $500-1,000</li>
						<li>• Strategy call: $200/hour</li>
						<li>• Emergency fix: $350/hour</li>
					</ul>
				</div>
				<div class="rounded-lg border border-destructive/30 bg-destructive/10 p-4">
					<p class="mb-2 font-bold text-foreground">Year 1 reality:</p>
					<p class="text-lg font-bold text-destructive">$3,000-5,000 in surprise bills</p>
					<p class="mt-2 text-sm text-muted-foreground">Experience: Stress, delays, invoice shock</p>
				</div>
			</div>

			<!-- Monthly Maintenance -->
			<div class="rounded-xl border border-primary/30 bg-primary/10 p-6">
				<h3 class="mb-6 flex items-center gap-2 text-xl font-bold text-foreground">
					<CheckCircle2Icon class="h-5 w-5 text-primary" />
					Monthly Maintenance (Our way)
				</h3>
				<div class="mb-4">
					<p class="mb-3 font-medium text-foreground">What it costs:</p>
					<ul class="space-y-2 text-sm text-muted-foreground">
						<li>• Starter: $47/month</li>
						<li>• Professional: $197/month</li>
						<li>• Business: $297/month</li>
						<li>• Enterprise: $497/month</li>
					</ul>
				</div>
				<div class="mb-4">
					<p class="mb-3 font-medium text-foreground">What's included:</p>
					<ul class="space-y-2 text-sm text-muted-foreground">
						<li>✓ Unlimited text/image updates</li>
						<li>✓ Simple functionality changes</li>
						<li>✓ Optimization tests</li>
						<li>✓ Priority support (24hr)</li>
						<li>✓ Ongoing CEO strategy advice (Professional+)</li>
						<li>✓ Security monitoring (Business+)</li>
						<li>✓ Performance monitoring (Business+)</li>
						<li>✓ Monthly strategy calls (Business+)</li>
					</ul>
				</div>
				<div class="rounded-lg border border-primary/30 bg-primary/20 p-4">
					<p class="mb-2 font-bold text-foreground">Year 1 reality:</p>
					<p class="text-lg font-bold text-primary">Predictable cost, zero surprises</p>
					<p class="mt-2 text-sm text-muted-foreground">Experience: Peace of mind, always current</p>
				</div>
			</div>
		</div>

		<!-- Important Clarification -->
		<div class="mx-auto mb-12 max-w-4xl rounded-xl border border-border bg-background p-6">
			<p class="mb-2 font-medium text-foreground">Important clarification:</p>
			<p class="text-sm leading-relaxed text-muted-foreground">
				"Simple changes" = text, images, small tweaks, minor updates. Takes less than 2 hours.
			</p>
			<p class="mt-2 text-sm leading-relaxed text-muted-foreground">
				Big new features (full booking system, ecommerce rebuild, major sections) = separate project pricing. We'll always tell you upfront if something is beyond 'simple.'
			</p>
		</div>

		<!-- The Psychology -->
		<div class="mx-auto max-w-4xl rounded-xl border-l-4 border-primary bg-primary/10 p-6">
			<p class="mb-4 leading-relaxed text-muted-foreground">
				Think of monthly maintenance like car insurance. Hope you don't need it. Love having it when you do. Except this insurance also includes a marketing CEO on call.
			</p>
			<p class="font-medium text-foreground">
				Most clients try 'pay per change' first. After 2-3 invoices, they switch to monthly. Starting with monthly is smarter.
			</p>
		</div>
	</div>
</section>

