<script lang="ts">
    // CONFIG
    import { COMPANY_DATA } from '@/shared/constants';

    // LUCIDE ICONS
    import ArrowRightIcon from "@lucide/svelte/icons/arrow-right";
    import CalendarIcon from "@lucide/svelte/icons/calendar";
</script>

<div class="sticky top-32">
	<span class="mb-4 block font-sans text-xs font-bold tracking-widest text-primary uppercase">
		Start Your Project
	</span>

	<h2 class="mb-8 font-serif text-5xl italic leading-tight md:text-6xl text-foreground">
		We only take<br />
		<span class="text-primary not-italic">4 new clients</span><br />
		per month.
	</h2>

	<p class="mb-12 max-w-md font-sans text-lg text-neutral-600 leading-relaxed">
		We cap client intake deliberately — because every project deserves our full focus. If you're
		serious about building a website that actually grows your business, fill out the form and we'll
		respond within 24 hours.
	</p>

	<!-- Intake notice -->
	<div class="inline-flex items-center gap-3 border-2 border-black px-6 py-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-12">
		<span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
		<span class="font-sans text-xs font-bold tracking-widest uppercase text-neutral-700">
			We open 2 new project slots per quarter
		</span>
	</div>

	<!-- Secondary contact options -->
	<div class="border-t border-neutral-200 pt-8">
		<p class="mb-4 font-sans text-sm text-neutral-600">Prefer to talk first?</p>
		<div class="flex flex-col gap-4 items-start">
			<a
				href="https://cal.com"
				target="_blank"
				rel="noopener noreferrer"
				class="group flex items-center gap-2 font-sans text-sm font-bold tracking-widest uppercase text-black transition-colors hover:text-primary"
			>
				<CalendarIcon size={16} />
				<span>Book a 30-min discovery call</span>
				<ArrowRightIcon size={16} class="transition-transform group-hover:translate-x-1" />
			</a>
		<a href="mailto:{COMPANY_DATA.EMAIL}" 
		   class="group flex items-center gap-2 font-sans text-sm font-bold tracking-widest uppercase text-black transition-colors hover:text-primary">
			<span>{COMPANY_DATA.EMAIL}</span>
				<ArrowRightIcon size={16} class="transition-transform group-hover:translate-x-1" />
			</a>
		</div>
	</div>
</div>
