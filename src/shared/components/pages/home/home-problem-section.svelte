<script lang="ts">
	// SVELTEKIT IMPORTS
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	// LUCIDE ICONS
	import ClockIcon from '@lucide/svelte/icons/clock';
	import UsersIcon from '@lucide/svelte/icons/users';
	import DollarSignIcon from '@lucide/svelte/icons/dollar-sign';

	// UTILS
	import { AnimatedCounter } from '@/shared/utils/animatedCounter';

	let card1Ref: HTMLDivElement | null = $state(null);
	let card2Ref: HTMLDivElement | null = $state(null);
	let card3Ref: HTMLDivElement | null = $state(null);

	let card1Animated = $state(false);
	let card2Animated = $state(false);
	let card3Animated = $state(false);

	let counter1Value = $state(0);
	let counter2Value = $state(0);
	let counter3Value = $state(0);

	const counter1 = new AnimatedCounter(47, {
		format: (v) => `${Math.round(v)}%`,
		onUpdate: (value) => {
			counter1Value = value;
		}
	});
	const counter2 = new AnimatedCounter(95, {
		format: (v) => `${Math.round(v)}%`,
		onUpdate: (value) => {
			counter2Value = value;
		}
	});
	const counter3 = new AnimatedCounter(3000, {
		format: (v) => `$${Math.round(v).toLocaleString()}+`,
		onUpdate: (value) => {
			counter3Value = value;
		}
	});

	onMount(() => {
		if (!browser) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						if (entry.target === card1Ref && !card1Animated) {
							card1Animated = true;
							counter1.animate();
						}
						if (entry.target === card2Ref && !card2Animated) {
							card2Animated = true;
							counter2.animate();
						}
						if (entry.target === card3Ref && !card3Animated) {
							card3Animated = true;
							counter3.animate();
						}
					}
				});
			},
			{ threshold: 0.3 }
		);

		if (card1Ref) observer.observe(card1Ref);
		if (card2Ref) observer.observe(card2Ref);
		if (card3Ref) observer.observe(card3Ref);

		return () => observer.disconnect();
	});
</script>

<section id="problem" class="bg-card px-6 py-24">
	<div class="mx-auto max-w-6xl">
		<h2 class="mb-4 text-center text-3xl font-bold text-balance text-foreground md:text-4xl">
			Your Website Is Bleeding Money. <span class="text-destructive">Here's How Much.</span>
		</h2>
		<p class="mx-auto mb-12 max-w-2xl text-center text-lg text-muted-foreground">
			Most business owners have no idea how much their website costs them every single day.
		</p>

		<div class="grid gap-8 md:grid-cols-3">
			<!-- Card 1: The Speed Tax -->
			<div
				bind:this={card1Ref}
				class="rounded-xl border border-border bg-background p-6 transition-all hover:scale-105 hover:shadow-lg"
			>
				<div class="mb-4 flex justify-center">
					<ClockIcon class="h-8 w-8 text-destructive" />
				</div>
				<div class="mb-2 text-center text-4xl font-bold text-destructive">{counter1.format(counter1Value)}</div>
				<p class="mb-4 text-center text-sm font-medium text-foreground">
					of visitors leave if your site takes over 2 seconds to load
				</p>
				<p class="text-sm leading-relaxed text-muted-foreground">
					If you get 1,000 visitors/month, that's 470 people who never see your offer. At $100 per customer, you're losing <span class="font-bold text-destructive">$47,000/month</span>.
				</p>
			</div>

			<!-- Card 2: The Template Trap -->
			<div
				bind:this={card2Ref}
				class="rounded-xl border border-border bg-background p-6 transition-all hover:scale-105 hover:shadow-lg"
			>
				<div class="mb-4 flex justify-center">
					<UsersIcon class="h-8 w-8 text-destructive" />
				</div>
				<div class="mb-2 text-center text-4xl font-bold text-destructive">{counter2.format(counter2Value)}</div>
				<p class="mb-4 text-center text-sm font-medium text-foreground">
					of DIY sites look identical to thousands of competitors
				</p>
				<p class="text-sm leading-relaxed text-muted-foreground">
					When you look generic, customers assume you ARE generic. They choose based on price, <span class="font-bold text-destructive">killing your margins</span>.
				</p>
			</div>

			<!-- Card 3: The Change Hostage -->
			<div
				bind:this={card3Ref}
				class="rounded-xl border border-border bg-background p-6 transition-all hover:scale-105 hover:shadow-lg"
			>
				<div class="mb-4 flex justify-center">
					<DollarSignIcon class="h-8 w-8 text-destructive" />
				</div>
				<div class="mb-2 text-center text-4xl font-bold text-destructive">{counter3.format(counter3Value)}</div>
				<p class="mb-4 text-center text-sm font-medium text-foreground">
					average yearly cost for simple text changes
				</p>
				<p class="text-sm leading-relaxed text-muted-foreground">
					Most developers charge $150-500 every time you update anything. Your 'cheap' $2,000 site costs <span class="font-bold text-destructive">$5,000+ in year one</span>.
				</p>
			</div>
		</div>

		<p class="mt-12 text-center text-lg font-medium text-foreground">
			So what's the alternative — just use Shopify or AI?
		</p>
	</div>
</section>
