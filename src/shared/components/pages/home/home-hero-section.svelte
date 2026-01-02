<script lang="ts">
	// UTILS
	import { scrollTo } from '@/shared/utils/scrollTo';
</script>

<section class="flex min-h-screen items-center px-6 pt-20 pb-16">
	<div class="mx-auto w-full max-w-6xl">
		<div class="grid items-center gap-12 lg:grid-cols-2">
			<div>
				<p class="mb-4 text-sm font-medium tracking-wide text-primary uppercase">
					Conversion-Focused Development
				</p>
				<h1
					class="mb-6 text-4xl leading-tight font-bold text-balance text-foreground md:text-5xl lg:text-6xl"
				>
					Your Website Should Be Your Best Salesperson. <span class="text-muted-foreground">Is It?</span>
				</h1>
				<p class="mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
					We don't just build websites — we design strategic sales machines that turn visitors into
					customers while your competitors wonder what happened.
				</p>
				<div class="flex flex-col gap-4 sm:flex-row">
					<button
						onclick={() => scrollTo('pricing')}
						class="rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-all hover:scale-105 hover:bg-primary/90"
					>
						See Pricing
					</button>
					<button
						onclick={() => scrollTo('proof')}
						class="rounded-lg border border-border px-8 py-4 text-lg font-medium text-foreground transition-all hover:border-primary hover:bg-card"
					>
						View Results
					</button>
				</div>
			</div>

			<div class="grid grid-cols-2 gap-4">
				<div class="rounded-xl border border-border bg-card p-6 text-center">
					<p class="mb-2 text-sm text-muted-foreground">Typical Website</p>
					<p class="mb-1 text-3xl font-bold text-destructive">4.2s</p>
					<p class="text-sm text-muted-foreground">load time</p>
					<div class="mt-4 border-t border-border pt-4">
						<p class="text-2xl font-bold text-muted-foreground">3%</p>
						<p class="text-xs text-muted-foreground">conversion rate</p>
					</div>
				</div>
				<div class="rounded-xl border border-primary/30 bg-primary/10 p-6 text-center">
					<p class="mb-2 text-sm text-primary">My Builds</p>
					<p class="mb-1 text-3xl font-bold text-primary">0.7s</p>
					<p class="text-sm text-muted-foreground">load time</p>
					<div class="mt-4 border-t border-primary/30 pt-4">
						<p class="text-2xl font-bold text-primary">9%</p>
						<p class="text-xs text-muted-foreground">conversion rate</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
