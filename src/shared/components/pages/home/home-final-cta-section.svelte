<script lang="ts">
	// CONFIG
	import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/constants/constants';

	// LUCIDE ICONS
	import CalendarIcon from '@lucide/svelte/icons/calendar';
	import MailIcon from '@lucide/svelte/icons/mail';
</script>

<section id="contact" class="px-6 py-24">
	<div class="mx-auto max-w-3xl text-center">
		<h2 class="mb-4 text-3xl font-bold text-balance text-foreground md:text-4xl">
			Ready to Stop Leaving Money on the Table?
		</h2>
		<p class="mx-auto mb-8 max-w-xl text-xl text-muted-foreground">
			Let's talk about your business, your customers, and how to turn more visitors into buyers — with a developer AND marketing CEO on the call.
		</p>

		<div class="mb-8 flex flex-col justify-center gap-4 sm:flex-row">
			<a
				href={UNPROTECTED_PAGE_ENDPOINTS.CONTACT}
				class="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-bold text-primary-foreground transition-all hover:scale-105 hover:bg-primary/90"
			>
				<CalendarIcon class="h-5 w-5" />
				Book Free Strategy Call
			</a>
			<a
				href="mailto:hello@convertdev.com"
				class="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-8 py-4 text-lg font-medium text-foreground transition-all hover:border-primary hover:bg-card"
			>
				<MailIcon class="h-5 w-5" />
				Email Me
			</a>
		</div>

		<div class="mx-auto max-w-xl rounded-xl border border-border bg-card p-6">
			<p class="text-sm leading-relaxed text-muted-foreground">
				<span class="font-medium text-primary">Zero pressure guarantee:</span> 30-minute call, honest
				feedback. We'll give you actionable strategic insights on what you need — even if it's not us. You'll walk
				away with value regardless.
			</p>
		</div>
	</div>
</section>
