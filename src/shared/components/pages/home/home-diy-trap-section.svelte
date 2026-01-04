<script lang="ts">
	// COMPONENTS
	import RoiCalculator from '@/shared/components/ui/roi-calculator/roi-calculator.svelte';

	// LUCIDE ICONS
	import AlertTriangleIcon from '@lucide/svelte/icons/alert-triangle';
</script>

<section class="px-6 py-24">
	<div class="mx-auto max-w-6xl">
		<h2 class="mb-4 text-center text-3xl font-bold text-balance text-foreground md:text-4xl">
			The $60,000 Mistake: <span class="text-destructive">Why DIY Tools Cost More</span>
		</h2>
		<p class="mx-auto mb-12 max-w-2xl text-center text-lg text-muted-foreground">
			Shopify, Wix, and AI builders seem cheaper. Until you do the math.
		</p>

		<!-- The Brutal Reality -->
		<div class="mx-auto mb-12 grid max-w-5xl gap-8 md:grid-cols-2">
			<div class="rounded-xl border border-border bg-card p-6">
				<h3 class="mb-4 text-xl font-bold text-foreground">What You Think You're Saving</h3>
				<ul class="space-y-2 text-sm text-muted-foreground">
					<li>• Platform: $29-79/month</li>
					<li>• Template: $150-300 one-time</li>
					<li>• Your time: "Free" (wrong)</li>
				</ul>
				<p class="mt-4 font-bold text-foreground">Total: $500-1,200/year</p>
			</div>

			<div class="rounded-xl border border-destructive/30 bg-destructive/10 p-6">
				<h3 class="mb-4 text-xl font-bold text-foreground">What It Actually Costs You</h3>
				<ul class="space-y-2 text-sm text-muted-foreground">
					<li>• Your time: 60+ hours = $3,000+ opportunity cost</li>
					<li>• Platform + apps: $1,200-3,000/year</li>
					<li>• Slow speed (3-4s load): 40-60% visitor loss</li>
					<li>• Template conversion (1-2%): 70% fewer customers</li>
				</ul>
				<p class="mt-4 font-bold text-destructive">Hidden cost: $30,000-60,000/year in lost revenue</p>
			</div>
		</div>

		<!-- The Real Numbers -->
		<div class="mx-auto mb-12 max-w-4xl">
			<h3 class="mb-6 text-center text-2xl font-bold text-foreground">The Real Numbers</h3>
			<RoiCalculator />
		</div>

		<!-- Comparison Table -->
		<div class="mx-auto mb-12 max-w-5xl overflow-x-auto">
			<table class="w-full border-collapse">
				<thead>
					<tr class="border-b border-border bg-muted">
						<th class="p-4 text-left font-bold text-foreground">What You Get</th>
						<th class="p-4 text-center font-bold text-foreground">DIY (Shopify/Wix)</th>
						<th class="p-4 text-center font-bold text-foreground">Cheap Developer</th>
						<th class="p-4 text-center font-bold text-primary">Us</th>
					</tr>
				</thead>
				<tbody>
					<tr class="border-b border-border">
						<td class="p-4 font-medium text-foreground">Load Speed</td>
						<td class="p-4 text-center text-muted-foreground">3-4 seconds ❌</td>
						<td class="p-4 text-center text-muted-foreground">2-3 seconds ❌</td>
						<td class="p-4 text-center font-bold text-primary">&lt;1 second ✓</td>
					</tr>
					<tr class="border-b border-border bg-card">
						<td class="p-4 font-medium text-foreground">Conversion Rate</td>
						<td class="p-4 text-center text-muted-foreground">1-2% ❌</td>
						<td class="p-4 text-center text-muted-foreground">2-3% ❌</td>
						<td class="p-4 text-center font-bold text-primary">6-8% ✓</td>
					</tr>
					<tr class="border-b border-border">
						<td class="p-4 font-medium text-foreground">Marketing Strategy</td>
						<td class="p-4 text-center text-muted-foreground">None ❌</td>
						<td class="p-4 text-center text-muted-foreground">None ❌</td>
						<td class="p-4 text-center font-bold text-primary">CEO-level ✓</td>
					</tr>
					<tr class="border-b border-border bg-card">
						<td class="p-4 font-medium text-foreground">You Own It?</td>
						<td class="p-4 text-center text-muted-foreground">Never ❌</td>
						<td class="p-4 text-center text-muted-foreground">Maybe ❌</td>
						<td class="p-4 text-center font-bold text-primary">100% ✓</td>
					</tr>
					<tr class="border-b border-border">
						<td class="p-4 font-medium text-foreground">Monthly Updates</td>
						<td class="p-4 text-center text-muted-foreground">$50-200 in apps ❌</td>
						<td class="p-4 text-center text-muted-foreground">$150-500 per change ❌</td>
						<td class="p-4 text-center font-bold text-primary">Unlimited* ✓</td>
					</tr>
					<tr class="border-b border-border bg-card">
						<td class="p-4 font-medium text-foreground">Looks Unique</td>
						<td class="p-4 text-center text-muted-foreground">Template #4,582 ❌</td>
						<td class="p-4 text-center text-muted-foreground">Generic ❌</td>
						<td class="p-4 text-center font-bold text-primary">Custom strategic ✓</td>
					</tr>
					<tr class="border-b border-border">
						<td class="p-4 font-medium text-foreground">Year 1 Cost</td>
						<td class="p-4 text-center text-muted-foreground">$4,000-8,000</td>
						<td class="p-4 text-center text-muted-foreground">$2,000-5,000</td>
						<td class="p-4 text-center font-bold text-primary">$997-8,997</td>
					</tr>
					<tr class="bg-card">
						<td class="p-4 font-medium text-foreground">Year 1 Lost Revenue</td>
						<td class="p-4 text-center font-bold text-destructive">$30,000-60,000 ❌</td>
						<td class="p-4 text-center font-bold text-destructive">$20,000-40,000 ❌</td>
						<td class="p-4 text-center font-bold text-primary">$0 ✓</td>
					</tr>
				</tbody>
			</table>
			<p class="mt-2 text-center text-xs text-muted-foreground">*with optional monthly maintenance</p>
		</div>

		<!-- The Question -->
		<div class="mx-auto max-w-4xl rounded-xl border-l-4 border-primary bg-primary/10 p-8">
			<p class="mb-4 text-xl font-bold text-foreground">
				Would you rather spend $5,000 once and make an extra $60,000/year, or 'save' $3,000 and lose $60,000/year?
			</p>
			<p class="text-lg font-bold text-destructive">
				Every day you wait is another $164 down the drain. ($60,000 ÷ 365 days)
			</p>
		</div>
	</div>
</section>
