<script lang="ts">
	// COMPONENTS
	import {
		Accordion,
		AccordionContent,
		AccordionItem,
		AccordionTrigger
	} from '@/shared/components/ui/accordion';

	// DATA
	import { faqs } from '@/shared/data/faq-data';

	let openValue = $state<string | undefined>(undefined);
</script>

<section id="faq" class="bg-card px-6 py-24">
	<div class="mx-auto max-w-3xl">
		<div class="mb-16 text-center">
			<p class="mb-4 text-sm font-medium tracking-wide text-primary uppercase">FAQ</p>
			<h2 class="mb-4 text-3xl font-bold text-balance text-foreground md:text-4xl">
				Questions? Answered.
			</h2>
		</div>

		<Accordion
			type="single"
			bind:value={openValue}
			class="space-y-4"
		>
			{#each faqs as faq}
				<AccordionItem value={faq.id} class="overflow-hidden rounded-xl border border-border bg-background border-b last:border-b">
					<AccordionTrigger class="px-6 py-6 hover:no-underline [&>svg]:text-primary">
						<span class="font-medium text-foreground text-left">{faq.question}</span>
					</AccordionTrigger>
					<AccordionContent class="px-6 pb-6 pt-0">
						<p class="leading-relaxed text-muted-foreground">{faq.answer}</p>
					</AccordionContent>
				</AccordionItem>
			{/each}
		</Accordion>
	</div>
</section>
