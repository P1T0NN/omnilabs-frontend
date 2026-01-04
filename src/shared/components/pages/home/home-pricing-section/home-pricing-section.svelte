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
			<h2 class="mb-4 text-3xl font-bold text-balance text-foreground md:text-4xl">
				Choose Your Investment Level
			</h2>
			<p class="mx-auto max-w-2xl text-lg text-muted-foreground">
				Pay once, own forever. Add monthly maintenance for unlimited simple updates + ongoing strategy.
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
				perfectFor={tier.perfectFor}
				features={tier.features}
				monthlyMaintenance={tier.monthlyMaintenance}
				maintenanceFeatures={tier.maintenanceFeatures}
				buttonText={tier.buttonText}
				buttonAction={() => scrollTo('contact')}
				note={tier.note}
				featuresPrefix={tier.featuresPrefix}
				isHighlighted={tier.isHighlighted}
				isCustom={tier.isCustom}
				roiExample={tier.roiExample}
			/>
		{/each}
	</div>

	<div class="mx-auto max-w-4xl">
		<!-- Understanding One-Time + Monthly -->
		<div class="mb-8 rounded-xl border border-border bg-background p-6">
			<h4 class="mb-4 font-bold text-foreground">Understanding One-Time + Monthly</h4>
			<p class="mb-4 text-sm leading-relaxed text-muted-foreground">
				You always pay the one-time fee (that's your website, owned forever). Monthly maintenance is optional but smart.
			</p>
			<div class="space-y-4 text-sm">
				<div>
					<p class="mb-2 font-medium text-foreground">Without monthly, you pay per change:</p>
					<ul class="ml-4 list-disc space-y-1 text-muted-foreground">
						<li>Phone number update: $150</li>
						<li>New team member: $300</li>
						<li>Test new headline: $150</li>
						<li>Add service page: $500</li>
						<li>Strategy consultation: $200/hour</li>
						<li>Emergency fix: $350/hour</li>
					</ul>
					<p class="mt-2 font-bold text-destructive">Yearly surprise bills: $3,000-5,000</p>
				</div>
				<div>
					<p class="mb-2 font-medium text-foreground">With monthly, it's all included:</p>
					<ul class="ml-4 list-disc space-y-1 text-muted-foreground">
						<li>Simple changes: Done in 24hrs</li>
						<li>Strategy access: Ongoing</li>
						<li>No surprise bills: Ever</li>
					</ul>
					<p class="mt-2 font-bold text-primary">Predictable: $564-5,964/year</p>
				</div>
			</div>
		</div>

		<!-- Can I Add Monthly Later -->
		<div class="mb-8 rounded-xl border border-border bg-background p-6">
			<h4 class="mb-4 font-bold text-foreground">Can I Add Monthly Later?</h4>
			<p class="text-sm leading-relaxed text-muted-foreground">
				Yes. Start with one-time build. Activate monthly maintenance anytime. No setup fees. No penalties.
			</p>
		</div>

		<!-- Quick FAQ -->
		<div class="rounded-xl border border-border bg-background p-6">
			<h4 class="mb-4 font-bold text-foreground">Quick FAQ</h4>
			<div class="space-y-4 text-sm">
				<div>
					<p class="mb-1 font-medium text-foreground">Q: What's "simple" vs "major" feature?</p>
					<p class="text-muted-foreground">
						A: Simple = takes &lt;2 hours (text, images, forms, tweaks). Major = takes days (full booking system, ecommerce platform). We always tell you upfront which category your request falls into.
					</p>
				</div>
				<div>
					<p class="mb-1 font-medium text-foreground">Q: Can I upgrade tiers?</p>
					<p class="text-muted-foreground">A: Yes. Anytime. We credit what you've paid toward higher tiers.</p>
				</div>
				<div>
					<p class="mb-1 font-medium text-foreground">Q: Do I really get the CEO?</p>
					<p class="text-muted-foreground">
						A: Professional tier+: Yes. She's in strategy sessions and maintenance calls. Not junior consultants.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
