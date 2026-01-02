<script lang="ts">
	interface PricingCardProps {
		tier: string;
		title: string;
		price: string | number;
		priceDescription?: string;
		features: string[];
		monthlyMaintenance: string;
		buttonText: string;
		buttonAction: () => void;
		subtext?: string;
		note?: string;
		featuresPrefix?: string;
		isHighlighted?: boolean;
		isCustom?: boolean;
		highlightedLabel?: string;
	}

	let {
		tier,
		title,
		price,
		priceDescription,
		features,
		monthlyMaintenance,
		buttonText,
		buttonAction,
		subtext,
		note,
		featuresPrefix,
		isHighlighted = false,
		isCustom = false,
		highlightedLabel = 'MOST POPULAR'
	}: PricingCardProps = $props();
</script>

<div
	class="relative overflow-hidden rounded-xl {isHighlighted
		? 'border-2 border-primary bg-background lg:scale-105'
		: 'border border-border bg-background'}"
>
	{#if isHighlighted}
		<div class="bg-primary py-2 text-center text-sm font-bold text-primary-foreground">
			{highlightedLabel}
		</div>
	{/if}
    
	<div class="p-8">
		<p class="mb-2 text-sm {isHighlighted ? 'text-primary' : 'text-muted-foreground'}">{tier}</p>
		<h3 class="mb-4 text-2xl font-bold text-foreground">{title}</h3>

		<div class="mb-6">
			<span class="text-4xl font-bold text-foreground">
				{typeof price === 'number' ? `$${price.toLocaleString()}` : price}
			</span>
			{#if priceDescription && !isCustom}
				<span class="text-muted-foreground"> {priceDescription}</span>
			{/if}
		</div>

		{#if isCustom && priceDescription}
			<p class="mb-4 text-sm text-muted-foreground italic">{priceDescription}</p>
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
			<p class="mb-2 text-sm text-muted-foreground">Add Monthly Maintenance</p>
			<p class="font-bold text-foreground">{monthlyMaintenance}</p>
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
	</div>
</div>

