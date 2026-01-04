<script lang="ts">
	// DATA
	import { portfolioItems } from '@/shared/data/portfolio-data';
	import type { PortfolioItem } from '@/shared/data/portfolio-data';

	// LUCIDE ICONS
	import ExternalLinkIcon from '@lucide/svelte/icons/external-link';
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
	import QuoteIcon from '@lucide/svelte/icons/quote';

</script>

<section id="showcase" class="bg-card px-6 py-24">
	<div class="mx-auto max-w-6xl">
		<h2 class="mb-4 text-center text-3xl font-bold text-balance text-foreground md:text-4xl">
			Our Work Speaks Louder Than Our Words
		</h2>
		<p class="mx-auto mb-16 max-w-2xl text-center text-lg text-muted-foreground">
			Real businesses. Real results. Real screenshots.
		</p>

		<div class="grid gap-12">
			{#each portfolioItems as item}
				<div
					class="group overflow-hidden rounded-xl border border-border bg-background transition-all hover:scale-[1.02] hover:border-primary/50 hover:shadow-xl"
				>
					<!-- Industry Badge & Title -->
					<div class="border-b border-border bg-card p-6">
						<div class="mb-3 inline-block rounded-md border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
							{item.industry}
						</div>
						<h3 class="mb-2 text-2xl font-bold text-foreground">{item.title}</h3>
					</div>

					<!-- Large Screenshot -->
					<div class="relative bg-muted p-6">
						<div class="relative overflow-hidden rounded-lg border-2 border-primary/30 bg-background shadow-lg">
							<div class="aspect-video w-full overflow-hidden bg-muted">
								{#if item.websiteImage}
									<!-- Replace with actual image when available: <img src={item.websiteImage} alt="{item.companyName} website" class="w-full h-full object-cover" /> -->
								{/if}
								<div class="flex h-full items-center justify-center p-8">
									<div class="text-center">
										<p class="mb-2 text-sm font-medium text-primary">{item.companyName}</p>
										<p class="text-xs leading-relaxed text-muted-foreground">
											Fast, strategic, conversion-focused website
										</p>
										{#if item.websiteImage}
											<p class="mt-4 text-xs italic text-muted-foreground">
												Add screenshot at <code class="text-xs">{item.websiteImage}</code>
											</p>
										{/if}
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Key Metrics -->
					<div class="border-b border-border bg-card p-6">
						<div class="mb-4 text-center">
							<p class="mb-2 text-5xl font-bold text-primary">{item.results.metric}</p>
							<p class="text-sm font-medium text-foreground">{item.results.value}</p>
							<p class="text-xs text-muted-foreground">{item.results.description}</p>
						</div>
					</div>

					<!-- What We Did & Tech -->
					<div class="border-b border-border p-6">
						<div class="mb-4">
							<p class="mb-2 text-sm font-medium text-foreground">What we did:</p>
							<p class="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
						</div>
						<div class="mb-4 flex flex-wrap items-center gap-2">
							<span class="text-xs text-muted-foreground">Tech used:</span>
							{#if item.technologies && item.technologies.length > 0}
								{#each item.technologies as tech}
									<span
										class="rounded-md border border-border bg-card px-2 py-1 text-xs font-medium text-foreground"
									>
										{tech}
									</span>
								{/each}
							{/if}
						</div>
						{#if item.liveSiteUrl}
							<a
								href={item.liveSiteUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-primary hover:bg-card"
							>
								View Live Site
								<ExternalLinkIcon class="h-4 w-4" />
							</a>
						{/if}
					</div>

					<!-- Testimonial -->
					<div class="bg-card p-6">
						<div class="flex items-start gap-4">
							<div
								class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10"
							>
								<QuoteIcon class="h-6 w-6 text-primary" />
							</div>
							<div class="flex-1">
								<blockquote class="mb-4 text-sm leading-relaxed text-muted-foreground">
									"{item.testimonial.quote}"
								</blockquote>
								<div class="border-t border-border pt-4">
									<p class="font-medium text-foreground">{item.testimonial.author}</p>
									<p class="text-xs text-muted-foreground">
										{item.testimonial.role}, {item.testimonial.company}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- CTA -->
		<div class="mt-16 text-center">
			<p class="mb-4 text-xl font-bold text-foreground">Want results like these?</p>
			<a
				href="#contact"
				class="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-all hover:scale-105 hover:bg-primary/90"
			>
				Book Your Free Strategy Call
				<ArrowRightIcon class="h-5 w-5" />
			</a>
		</div>
	</div>
</section>

