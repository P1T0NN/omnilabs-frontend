<script lang="ts">
	// LUCIDE ICONS
	import CheckCircle2Icon from '@lucide/svelte/icons/check-circle-2';
</script>

<section class="px-6 py-24">
	<div class="mx-auto max-w-4xl">
		<p class="mb-4 text-sm font-medium tracking-wide text-primary uppercase">How We're Different</p>
		<h2 class="mb-8 text-3xl font-bold text-balance text-foreground md:text-4xl">
			Developer + Marketing CEO = <span class="text-primary">Websites That Actually Convert</span>
		</h2>

		<div class="space-y-6 leading-relaxed text-muted-foreground">
			<p>
				Here's what makes us different: I'm the technical expert who builds lightning-fast, bulletproof websites. My business partner is the CEO of a major marketing company who's spent years studying what makes customers buy.
			</p>
			<p>
				Most developers build what you ask for without questioning if it'll actually work. Most marketers give great advice but can't execute technically.
			</p>
			<p>
				<span class="font-medium text-foreground">We do both.</span>
			</p>
			<p>
				Before a single line of code is written, our marketing expert analyzes:
			</p>
		</div>

		<div class="mt-8 grid gap-4 sm:grid-cols-2">
			<div class="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
				<CheckCircle2Icon class="mt-1 h-5 w-5 shrink-0 text-primary" />
				<p class="text-foreground">
					<strong>Who</strong> your ideal customer is and what makes them buy
				</p>
			</div>
			<div class="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
				<CheckCircle2Icon class="mt-1 h-5 w-5 shrink-0 text-primary" />
				<p class="text-foreground"><strong>What</strong> action you want visitors to take</p>
			</div>
			<div class="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
				<CheckCircle2Icon class="mt-1 h-5 w-5 shrink-0 text-primary" />
				<p class="text-foreground">
					<strong>Where</strong> the friction points are that lose you sales
				</p>
			</div>
			<div class="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
				<CheckCircle2Icon class="mt-1 h-5 w-5 shrink-0 text-primary" />
				<p class="text-foreground"><strong>Why</strong> certain design choices convert better</p>
			</div>
		</div>

		<p class="mt-8 rounded-r-lg border-l-4 border-primary bg-card p-6 text-muted-foreground">
			Then I build it with the speed and performance that actually converts those visitors into customers.
		</p>
		<p class="mt-4 text-muted-foreground">
			You're not getting a developer who Googles marketing tips. You're getting a <span class="font-medium text-primary">CEO-level marketing strategist paired with elite technical execution.</span>
		</p>
	</div>
</section>
