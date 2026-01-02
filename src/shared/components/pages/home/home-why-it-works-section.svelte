<script lang="ts">
	// LUCIDE ICONS
	import CheckCircle2Icon from '@lucide/svelte/icons/check-circle-2';
	import ZapIcon from '@lucide/svelte/icons/zap';
	import CircleDollarSignIcon from '@lucide/svelte/icons/circle-dollar-sign';
	import LockIcon from '@lucide/svelte/icons/lock';
</script>

<section class="px-6 py-24">
	<div class="mx-auto max-w-6xl">
		<p class="mb-4 text-center text-sm font-medium tracking-wide text-primary uppercase">
			The Difference
		</p>
		<h2 class="mb-16 text-center text-3xl font-bold text-balance text-foreground md:text-4xl">
			Why Our Websites Actually Make You Money
		</h2>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
			<div class="text-center">
				<div
					class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10"
				>
					<CheckCircle2Icon class="h-8 w-8 text-primary" />
				</div>
				<h3 class="mb-3 text-xl font-bold text-foreground">CEO-Level Marketing Strategy</h3>
				<p class="text-sm leading-relaxed text-muted-foreground">
					Not tips from blogs. Real marketing expertise from someone who runs a major marketing company. She knows what converts because she's done it at scale.
				</p>
			</div>

			<div class="text-center">
				<div
					class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10"
				>
					<ZapIcon class="h-8 w-8 text-primary" />
				</div>
				<h3 class="mb-3 text-xl font-bold text-foreground">Elite Technical Execution</h3>
				<p class="text-sm leading-relaxed text-muted-foreground">
					Strategy means nothing if the site is slow or buggy. I build with enterprise-grade performance that loads in under 1 second. Your visitors buy while competitors' visitors wait.
				</p>
			</div>

			<div class="text-center">
				<div
					class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10"
				>
					<CircleDollarSignIcon class="h-8 w-8 text-primary" />
				</div>
				<h3 class="mb-3 text-xl font-bold text-foreground">Strategy + Execution = Unfair Advantage</h3>
				<p class="text-sm leading-relaxed text-muted-foreground">
					Most businesses get one or the other. You get both. Marketing brilliance meets technical excellence. Your competitors can't compete with that.
				</p>
			</div>

			<div class="text-center">
				<div
					class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10"
				>
					<LockIcon class="h-8 w-8 text-primary" />
				</div>
				<h3 class="mb-3 text-xl font-bold text-foreground">You Own Everything</h3>
				<p class="text-sm leading-relaxed text-muted-foreground">
					Every line of code. Every design file. Every strategy document. Want to leave? Take it all with you. We're confident you won't want to.
				</p>
			</div>
		</div>
	</div>
</section>
