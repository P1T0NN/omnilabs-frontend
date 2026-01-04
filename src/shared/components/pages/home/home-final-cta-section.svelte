<script lang="ts">
	// CONFIG
	import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/constants/constants';

	// LUCIDE ICONS
	import CalendarIcon from '@lucide/svelte/icons/calendar';
	import MailIcon from '@lucide/svelte/icons/mail';
</script>

<section id="contact" class="px-6 py-24">
	<div class="mx-auto max-w-3xl text-center">
		<h2 class="mb-2 text-3xl font-bold text-balance text-foreground md:text-4xl">
			Every Day You Wait Costs You <span class="text-destructive">$164</span>
		</h2>
		<p class="mb-8 text-sm text-muted-foreground">
			(That's $60,000/year in lost revenue ÷ 365 days)
		</p>

		<div class="mx-auto mb-8 max-w-2xl space-y-4 text-muted-foreground">
			<p>
				Book a free 30-minute strategy call with our developer + marketing CEO.
			</p>
			<p>
				We'll analyze your current situation, show you exactly where you're losing money, and give you a clear roadmap — even if you don't hire us.
			</p>
			<p>
				You'll walk away with actionable insights worth thousands. Zero obligation. Zero sales pressure.
			</p>
		</div>

		<div class="mb-8 flex flex-col justify-center gap-4 sm:flex-row">
			<a
				href={UNPROTECTED_PAGE_ENDPOINTS.CONTACT}
				class="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-bold text-primary-foreground transition-all hover:scale-105 hover:bg-primary/90"
			>
				<CalendarIcon class="h-5 w-5" />
				Book Free Strategy Call Now
			</a>
			<a
				href="mailto:hello@convertdev.com"
				class="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-8 py-4 text-lg font-medium text-foreground transition-all hover:border-primary hover:bg-card"
			>
				<MailIcon class="h-5 w-5" />
				Email Us Instead
			</a>
		</div>

		<div class="mx-auto mb-6 flex max-w-2xl flex-wrap justify-center gap-6 text-sm text-muted-foreground">
			<div class="flex items-center gap-2">
				<span class="text-primary">✓</span>
				<span>30-minute call, both of us</span>
			</div>
			<div class="flex items-center gap-2">
				<span class="text-primary">✓</span>
				<span>Free insights you can use today</span>
			</div>
			<div class="flex items-center gap-2">
				<span class="text-primary">✓</span>
				<span>No obligation whatsoever</span>
			</div>
			<div class="flex items-center gap-2">
				<span class="text-primary">✓</span>
				<span>Honest assessment — we'll tell you if we're not the right fit</span>
			</div>
		</div>

		<div class="mx-auto max-w-xl space-y-2 text-sm text-muted-foreground">
			<p class="font-medium text-foreground">We only take 3 new projects per month to ensure quality.</p>
			<p>Current availability: [X spots remaining for February 2025]</p>
		</div>
	</div>
</section>
