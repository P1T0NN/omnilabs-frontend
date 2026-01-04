<script lang="ts">
	// LUCIDE ICONS
	import ZapIcon from '@lucide/svelte/icons/zap';
	import BrainIcon from '@lucide/svelte/icons/brain';
	import UnlockIcon from '@lucide/svelte/icons/unlock';
</script>

<section class="bg-card px-6 py-24">
	<div class="mx-auto max-w-6xl">
		<h2 class="mb-4 text-center text-3xl font-bold text-balance text-foreground md:text-4xl">
			Why Competitors Can't Copy This
		</h2>
		<p class="mx-auto mb-12 max-w-2xl text-center text-lg text-muted-foreground">
			Developer + Marketing CEO = Impossible to replicate
		</p>

		<div class="grid gap-8 md:grid-cols-3">
			<!-- Card 1: Enterprise Technology -->
			<div class="rounded-xl border border-border bg-background p-6 transition-all hover:scale-105 hover:border-primary/50 hover:shadow-lg">
				<div class="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
					<ZapIcon class="h-8 w-8 text-primary" />
				</div>
				<h3 class="mb-3 text-xl font-bold text-foreground">Built Like Netflix, Priced for Businesses</h3>
				<p class="text-sm leading-relaxed text-muted-foreground">
					We use Rust and Svelte — the same technologies powering Netflix, Spotify, and tech giants. Sites that load in &lt;1 second and handle millions of users. Your competitors are stuck on WordPress templates from 2015.
				</p>
			</div>

			<!-- Card 2: Million-Dollar Marketing Brain -->
			<div class="rounded-xl border border-border bg-background p-6 transition-all hover:scale-105 hover:border-primary/50 hover:shadow-lg">
				<div class="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
					<BrainIcon class="h-8 w-8 text-primary" />
				</div>
				<h3 class="mb-3 text-xl font-bold text-foreground">CEO-Level Strategy Included</h3>
				<p class="text-sm leading-relaxed text-muted-foreground">
					My partner runs a million-dollar marketing company. She knows what makes people buy because she's scaled real businesses. You're getting the same strategic thinking Fortune 500 companies pay $50,000+ for — included in your project.
				</p>
			</div>

			<!-- Card 3: No Hostage Situations -->
			<div class="rounded-xl border border-border bg-background p-6 transition-all hover:scale-105 hover:border-primary/50 hover:shadow-lg">
				<div class="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
					<UnlockIcon class="h-8 w-8 text-primary" />
				</div>
				<h3 class="mb-3 text-xl font-bold text-foreground">You Own Everything. Forever.</h3>
				<p class="text-sm leading-relaxed text-muted-foreground">
					Every line of code. Every design file. Every strategy document. Want to leave? Take it all with you. Try doing that with Shopify. We're confident you won't want to — but you're never trapped.
				</p>
			</div>
		</div>
	</div>
</section>

