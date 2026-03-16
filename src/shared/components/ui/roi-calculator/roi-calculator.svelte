<script lang="ts">
	let monthlyVisitors = $state(1000);
	let averageCustomerValue = $state(100);
	let currentConversionRate = $state(2);
	let newConversionRate = $state(7);

	let monthlyRevenueCurrent = $derived((monthlyVisitors * (currentConversionRate / 100)) * averageCustomerValue);
	let monthlyRevenueNew = $derived((monthlyVisitors * (newConversionRate / 100)) * averageCustomerValue);
	let monthlyDifference = $derived(monthlyRevenueNew - monthlyRevenueCurrent);
	let yearlyDifference = $derived(monthlyDifference * 12);
	let customersCurrent = $derived(Math.round(monthlyVisitors * (currentConversionRate / 100)));
	let customersNew = $derived(Math.round(monthlyVisitors * (newConversionRate / 100)));
</script>

<div class="rounded-xl border border-primary/30 bg-primary/10 p-6">
	<h3 class="mb-6 font-bold text-foreground">Calculate Your Potential ROI</h3>

	<div class="mb-6 space-y-4">
		<div>
			<label for="visitors" class="mb-2 block text-sm font-medium text-foreground">
				Monthly Visitors
			</label>
			<input
				id="visitors"
				type="number"
				bind:value={monthlyVisitors}
				min="100"
				step="100"
				class="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground"
			/>
		</div>

		<div>
			<label for="customer-value" class="mb-2 block text-sm font-medium text-foreground">
				Average Customer Value ($)
			</label>
			<input
				id="customer-value"
				type="number"
				bind:value={averageCustomerValue}
				min="10"
				step="10"
				class="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground"
			/>
		</div>

		<div class="grid gap-4 md:grid-cols-2">
			<div>
				<label for="current-rate" class="mb-2 block text-sm font-medium text-foreground">
					Current Conversion Rate (%)
				</label>
				<input
					id="current-rate"
					type="number"
					bind:value={currentConversionRate}
					min="0.1"
					max="10"
					step="0.1"
					class="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground"
				/>
			</div>

			<div>
				<label for="new-rate" class="mb-2 block text-sm font-medium text-foreground">
					New Conversion Rate (%)
				</label>
				<input
					id="new-rate"
					type="number"
					bind:value={newConversionRate}
					min="1"
					max="15"
					step="0.1"
					class="w-full rounded-lg border border-primary/30 bg-primary/5 px-4 py-2 font-medium text-foreground"
				/>
			</div>
		</div>
	</div>

	<div class="space-y-4 rounded-lg border border-border bg-background p-6">
		<div class="grid gap-4 md:grid-cols-2">
			<div>
				<p class="text-sm text-muted-foreground">Current Monthly Revenue</p>
				<p class="text-2xl font-bold text-foreground">
					${monthlyRevenueCurrent.toLocaleString()}
				</p>
				<p class="text-xs text-muted-foreground">{customersCurrent} customers/month</p>
			</div>
			<div>
				<p class="text-sm text-muted-foreground">New Monthly Revenue</p>
				<p class="text-2xl font-bold text-primary">
					${monthlyRevenueNew.toLocaleString()}
				</p>
				<p class="text-xs text-muted-foreground">{customersNew} customers/month</p>
			</div>
		</div>

		<div class="border-t border-border pt-4">
			<p class="mb-2 text-sm font-medium text-foreground">Extra Monthly Revenue</p>
			<p class="text-3xl font-bold text-primary">
				+${monthlyDifference.toLocaleString()}/month
			</p>
			<p class="mt-2 text-lg font-bold text-primary">
				+${yearlyDifference.toLocaleString()}/year
			</p>
		</div>
	</div>
</div>

