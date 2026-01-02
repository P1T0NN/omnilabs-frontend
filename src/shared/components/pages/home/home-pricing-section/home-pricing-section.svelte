<script lang="ts">
	// COMPONENTS
	import PricingCard from './pricing-card.svelte';

	// DATA
	import { pricingTiers } from '@/shared/data/pricing-data';

	// UTILS
	import { scrollTo } from '@/shared/utils/scrollTo';
</script>

<section id="pricing" class="bg-card px-6 py-24">
	<div class="mx-auto max-w-6xl">
		<div class="mb-16 text-center">
			<p class="mb-4 text-sm font-medium tracking-wide text-primary uppercase">Pricing</p>
			<h2 class="mb-4 text-3xl font-bold text-balance text-foreground md:text-4xl">
				Simple, Transparent Investment
			</h2>
			<p class="mx-auto max-w-2xl text-muted-foreground">
				Choose the tier that fits your business. Add monthly maintenance for unlimited updates and
				ongoing strategic partnership.
			</p>
		</div>
	</div>

	<div class="mb-16 grid gap-8 lg:grid-cols-4 max-w-[1600px] mx-auto px-6">
		{#each pricingTiers as tier}
			<PricingCard
				tier={tier.tier}
				title={tier.title}
				price={tier.price}
				priceDescription={tier.priceDescription}
				features={tier.features}
				monthlyMaintenance={tier.monthlyMaintenance}
				buttonText={tier.buttonText}
				buttonAction={() => scrollTo('contact')}
				subtext={tier.subtext}
				note={tier.note}
				featuresPrefix={tier.featuresPrefix}
				isHighlighted={tier.isHighlighted}
				isCustom={tier.isCustom}
			/>
		{/each}
	</div>

	<div class="mx-auto max-w-6xl">
		<!-- Explainer boxes -->
		<div class="mx-auto mb-8 grid max-w-4xl gap-8 md:grid-cols-2">
			<div class="rounded-xl border border-border bg-background p-6">
				<h4 class="mb-4 font-bold text-foreground">Understanding the One-Time + Monthly Model</h4>
				<p class="mb-4 text-sm leading-relaxed text-muted-foreground">
					You always pay the one-time fee to build your site - that's yours forever. The monthly maintenance is optional but smart:
				</p>
				<div class="space-y-2 text-sm text-muted-foreground">
					<p class="font-medium text-foreground">Without monthly maintenance:</p>
					<ul class="ml-4 list-disc space-y-1">
						<li>Change phone number: $150</li>
						<li>Update service description: $150</li>
						<li>Test new headline: $150</li>
						<li>Add new product: $300-500</li>
						<li>Strategic advice: $200/hour</li>
					</ul>
					<p class="mt-3 italic">These add up to $3,000-5,000/year easily.</p>
				</div>
				<div class="mt-4 space-y-2 text-sm text-muted-foreground">
					<p class="font-medium text-foreground">With monthly maintenance:</p>
					<p>ALL of the above: $0 extra (done within 24 hours) + ongoing strategic partnership with marketing CEO.</p>
				</div>
				<p class="mt-4 text-sm leading-relaxed text-muted-foreground">
					Most clients go monthly within 3 months anyway after getting hit with change fees and needing strategic input. Starting with it is smarter.
				</p>
			</div>
			<div class="rounded-xl border border-border bg-background p-6">
				<h4 class="mb-4 font-bold text-foreground">Can I Start Without Monthly and Add It Later?</h4>
				<p class="text-sm leading-relaxed text-muted-foreground">
					Yes! Start with just the one-time build. When you realize you need changes or strategic advice (usually within 60 days), just activate monthly maintenance and you're covered.
				</p>
			</div>
		</div>

		<div class="mx-auto max-w-4xl">
			<div class="rounded-xl border border-border bg-background p-6">
				<h4 class="mb-4 font-bold text-foreground">What's Included in Each Tier's Marketing Strategy?</h4>
				<ul class="space-y-3 text-sm text-muted-foreground">
					<li class="flex items-start gap-3">
						<span class="mt-0.5 text-primary">•</span>
						<span><strong class="text-foreground">Starter ($997):</strong> No marketing strategy consultation - just a clean, fast website</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="mt-0.5 text-primary">•</span>
						<span><strong class="text-foreground">Professional ($4,997+):</strong> Marketing strategy consultation to optimize your site for conversions</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="mt-0.5 text-primary">•</span>
						<span><strong class="text-foreground">Business ($8,997+):</strong> Deep-dive strategy session with our CEO marketing expert</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="mt-0.5 text-primary">•</span>
						<span><strong class="text-foreground">Enterprise (Custom):</strong> Comprehensive business & conversion strategy with ongoing CEO involvement</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>
