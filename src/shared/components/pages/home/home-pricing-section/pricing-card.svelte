<script lang="ts">
	interface PricingCardProps {
		tier: string;
		title: string;
		price: string | number;
		priceDescription?: string;
		priceNote?: string;
		perfectFor?: string;
		features: string[];
		monthlyMaintenance: string;
		maintenanceFeatures?: string[];
		buttonText: string;
		buttonAction: () => void;
		subtext?: string;
		note?: string;
		featuresPrefix?: string;
		isHighlighted?: boolean;
		isCustom?: boolean;
		highlightedLabel?: string;
		roiExample?: string;
	}

	let {
		tier,
		title,
		price,
		priceDescription,
		priceNote,
		perfectFor,
		features,
		monthlyMaintenance,
		maintenanceFeatures,
		buttonText,
		buttonAction,
		subtext,
		note,
		featuresPrefix,
		isHighlighted = false,
		isCustom = false,
		highlightedLabel = 'MOST POPULAR',
		roiExample
	}: PricingCardProps = $props();
</script>

<div
	class="relative overflow-hidden rounded-xl transition-all {isHighlighted
		? 'border-2 border-primary bg-background lg:scale-105 hover:shadow-xl'
		: 'border border-border bg-background hover:scale-105 hover:border-primary/50 hover:shadow-lg'}"
>
	{#if isHighlighted}
		<div class="bg-primary py-2 text-center text-sm font-bold text-primary-foreground">
			{highlightedLabel}
		</div>
	{/if}
    
	<div class="p-8">
		<p class="mb-2 text-sm {isHighlighted ? 'text-primary' : 'text-muted-foreground'}">{tier}</p>
		<h3 class="mb-4 text-2xl font-bold text-foreground">{title}</h3>

		<div class="mb-4">
			<p class="mb-2 text-sm font-medium text-muted-foreground">One-Time:</p>
			<span class="text-4xl font-bold text-foreground">
				{typeof price === 'number' ? `$${price.toLocaleString()}` : price}
			</span>
			{#if priceNote}
				<p class="mt-1 text-sm text-muted-foreground italic">{priceNote}</p>
			{/if}
		</div>

		{#if perfectFor}
			<p class="mb-6 text-sm italic text-muted-foreground">"{perfectFor}"</p>
		{/if}

		{#if featuresPrefix}
			<p class="mb-4 text-xs text-muted-foreground">{featuresPrefix}</p>
		{/if}

		{#if features.length > 0}
			<ul class="mb-8 space-y-3">
				{#each features as feature}
					<li class="flex items-start gap-3 text-sm text-muted-foreground">
						<span class="mt-0.5 text-primary">✓</span>
						<span>{@html feature}</span>
					</li>
				{/each}
			</ul>
		{/if}

		<div class="mb-6 border-t border-border pt-6">
			<p class="mb-3 text-sm font-medium text-foreground">Monthly Maintenance: {monthlyMaintenance}</p>
			{#if maintenanceFeatures && maintenanceFeatures.length > 0}
				<ul class="space-y-2 text-xs text-muted-foreground">
					{#each maintenanceFeatures as feature}
						<li class="flex items-start gap-2">
							<span class="mt-0.5 text-primary">•</span>
							<span>{@html feature}</span>
						</li>
					{/each}
				</ul>
			{/if}
		</div>

		<button
			onclick={buttonAction}
			class="w-full rounded-lg {isHighlighted
				? 'bg-primary py-3 font-bold text-primary-foreground transition-all hover:bg-primary/90'
				: 'border border-border py-3 font-medium text-foreground transition-all hover:border-primary'}"
		>
			{buttonText}
		</button>

		{#if subtext}
			<p class="mt-4 text-center text-xs text-muted-foreground">{subtext}</p>
		{/if}

		{#if note}
			<p class="mt-2 text-center text-xs text-muted-foreground italic">{note}</p>
		{/if}

		{#if roiExample}
			<div class="mt-4 rounded-lg border border-primary/30 bg-primary/10 p-3">
				<p class="text-xs font-medium text-foreground">ROI Example:</p>
				<p class="text-xs text-muted-foreground">{roiExample}</p>
			</div>
		{/if}
	</div>
</div>

