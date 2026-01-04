<script lang="ts">
	// UTILS
	import { scrollTo } from '@/shared/utils/scrollTo';
</script>

<section class="flex min-h-screen items-center px-6 pt-20 pb-16">
	<div class="mx-auto w-full max-w-6xl">
		<div class="grid items-center gap-12 lg:grid-cols-2">
			<div>
				<h1
					class="mb-6 text-4xl leading-tight font-bold text-balance text-foreground md:text-5xl lg:text-6xl"
				>
					Your Website Should Be Making You $10,000+ More Per Month. <span class="text-muted-foreground">Is It?</span>
				</h1>
				<p class="mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
					We build conversion-focused websites that turn visitors into paying customers — while your competitors wonder why their 'pretty' sites don't make money.
				</p>
				<div class="mb-6 flex flex-col gap-4 sm:flex-row">
					<button
						onclick={() => scrollTo('pricing')}
						class="rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-all hover:scale-105 hover:bg-primary/90"
					>
						See Pricing & ROI
					</button>
					<button
						onclick={() => scrollTo('showcase')}
						class="rounded-lg border border-border px-8 py-4 text-lg font-medium text-foreground transition-all hover:border-primary hover:bg-card"
					>
						View Our Work
					</button>
				</div>
				<p class="text-sm text-muted-foreground italic">
					Built for businesses serious about growth. Not pretty pictures — profitable results.
				</p>
			</div>

			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
				<div class="rounded-xl border border-border bg-card p-4 text-center sm:p-6">
					<p class="mb-2 text-xs text-muted-foreground sm:text-sm">Typical Site</p>
					<p class="mb-1 text-xl font-bold text-destructive sm:text-2xl">2% conversion</p>
					<p class="mb-2 text-xs text-muted-foreground sm:text-sm">1,000 visitors = 20 customers</p>
					<div class="mt-4 border-t border-border pt-4">
						<p class="text-base font-bold text-destructive sm:text-xl">Lost revenue: $8,000/month</p>
					</div>
				</div>
				<div class="rounded-xl border border-primary/30 bg-primary/10 p-4 text-center sm:p-6">
					<p class="mb-2 text-xs text-primary sm:text-sm">Our Sites</p>
					<p class="mb-1 text-xl font-bold text-primary sm:text-2xl">7% conversion</p>
					<p class="mb-2 text-xs text-muted-foreground sm:text-sm">1,000 visitors = 70 customers</p>
					<div class="mt-4 border-t border-primary/30 pt-4">
						<p class="text-base font-bold text-primary sm:text-xl">Extra revenue: $8,000+/month</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
