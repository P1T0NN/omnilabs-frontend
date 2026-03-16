<script lang="ts">
	// COMPONENTS
	import PricingCard from '@/shared/components/ui/pricing-card/pricing-card.svelte';

	// LUCIDE ICONS
	import CheckIcon from '@lucide/svelte/icons/check';
	import XIcon from '@lucide/svelte/icons/x';

	let partnershipSelected = true;
	let enterprisePartnershipSelected = true;
</script>

<section id="pricing" class="py-32">
	<div class="container mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
		<div class="mb-16 flex flex-col gap-4 text-center">
			<span class="block font-bold tracking-widest text-primary uppercase"
				>How We Work</span
			>
			<h2 class="italic">Two paths. No middle.</h2>
			<p class="mx-auto max-w-2xl text-lg text-neutral-600">
				We either build you a focused, high-converting Micro-Launch or architect a full-scale digital
				platform. We don't do "medium". Every project is a one-time investment with the option to
				add ongoing partnership.
			</p>
		</div>

		<div class="mb-16 flex items-center justify-center gap-3">
			<div class="h-px w-12 bg-black"></div>
			<span class="text-xs font-bold tracking-widest text-neutral-600 uppercase">One-time payment · Optional monthly partnership</span>
			<div class="h-px w-12 bg-black"></div>
		</div>

		<div class="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
			<PricingCard
				title="Micro-Launch"
				subtitle="One page. Maximum impact."
				label="For focused brands"
				variant="light"
				buttonText="Book a Strategy Call"
			>
				<ul class="mb-8 space-y-3 text-sm font-medium">
					<li class="flex items-center gap-3">
						<CheckIcon class="h-4 w-4 shrink-0 text-primary" />
						<span>Strategic single-page architecture</span>
					</li>

					<li class="flex items-center gap-3">
						<CheckIcon class="h-4 w-4 shrink-0 text-primary" />
						<span>Psychologically optimized layout</span>
					</li>

					<li class="flex items-center gap-3">
						<CheckIcon class="h-4 w-4 shrink-0 text-primary" />
						<span>Blazing-fast performance (We choose the best technology based on your needs)</span>
					</li>

					<li class="flex items-center gap-3">
						<CheckIcon class="h-4 w-4 shrink-0 text-primary" />
						<span>SEO & mobile optimized</span>
					</li>
				</ul>

				<div class="mb-8 border-t border-neutral-200 pt-8">
					<h4 class="mb-4 text-xs font-bold tracking-widest uppercase text-neutral-600">
						After Delivery
					</h4>

					<div class="grid gap-3">
						<button
							class="group relative flex w-full flex-col gap-1.5 border-2 p-4 text-left transition-all duration-200 {partnershipSelected
								? 'border-primary bg-primary/5'
								: 'border-neutral-200 hover:border-neutral-400'}"
							onclick={() => (partnershipSelected = true)}
						>
							<div class="flex w-full items-center justify-between">
								<span
									class="text-sm font-bold uppercase {partnershipSelected
										? 'text-primary'
										: 'text-neutral-600'}"
								>
									Ongoing Partnership
								</span>
								<span class="text-xs font-bold text-neutral-600">Monthly</span>
							</div>
							<p class="text-sm text-neutral-600">
								Text changes, small tweaks, and functionality updates — all included.
							</p>

							{#if partnershipSelected}
								<div
									class="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white shadow-sm"
								>
									<CheckIcon class="h-3 w-3" />
								</div>
							{/if}
						</button>

						<button
							class="group relative flex w-full flex-col gap-1.5 border-2 p-4 text-left transition-all duration-200 {!partnershipSelected
								? 'border-black bg-neutral-50'
								: 'border-neutral-100'}"
							onclick={() => (partnershipSelected = false)}
						>
							<div class="flex w-full items-center justify-between">
								<span
									class="text-sm font-bold uppercase {!partnershipSelected
										? 'text-black'
										: 'text-neutral-600'}"
								>
									One-time Only
								</span>
							</div>
							<p class="text-sm text-neutral-600">
								Every future change billed separately per request.
							</p>
						</button>
					</div>

					<div class="mt-6 space-y-2.5 text-sm">
						<div class="flex items-center gap-3">
							{#if partnershipSelected}
								<CheckIcon class="h-4 w-4 shrink-0 text-primary" />
							{:else}
								<XIcon class="h-4 w-4 shrink-0 text-neutral-500" />
							{/if}

							<span class={partnershipSelected ? 'text-black' : 'text-neutral-600 line-through'}>
								Unlimited text & content updates
							</span>
						</div>

						<div class="flex items-center gap-3">
							{#if partnershipSelected}
								<CheckIcon class="h-4 w-4 shrink-0 text-primary" />
							{:else}
								<XIcon class="h-4 w-4 shrink-0 text-neutral-500" />
							{/if}

							<span class={partnershipSelected ? 'text-black' : 'text-neutral-600 line-through'}>
								Small design & layout adjustments
							</span>
						</div>

						<div class="flex items-center gap-3">
							{#if partnershipSelected}
								<CheckIcon class="h-4 w-4 shrink-0 text-primary" />
							{:else}
								<XIcon class="h-4 w-4 shrink-0 text-neutral-500" />
							{/if}

							<span class={partnershipSelected ? 'text-black' : 'text-neutral-600 line-through'}>
								Minor functionality changes
							</span>
						</div>
					</div>
				</div>
			</PricingCard>

			<PricingCard
				title="Enterprise"
				subtitle="Full-scale digital dominance."
				label="For ambitious brands"
				variant="dark"
				buttonText="Apply for a Project"
			>
				<ul class="mb-8 space-y-3 text-sm font-medium">
					<li class="flex items-center gap-3">
						<CheckIcon class="h-4 w-4 shrink-0 text-primary" />
						<span>Multi-page custom architecture</span>
					</li>

					<li class="flex items-center gap-3">
						<CheckIcon class="h-4 w-4 shrink-0 text-primary" />
						<span>Deep conversion strategy & user profiling</span>
					</li>

					<li class="flex items-center gap-3">
						<CheckIcon class="h-4 w-4 shrink-0 text-primary" />
						<span>Advanced interactions & animations</span>
					</li>

					<li class="flex items-center gap-3">
						<CheckIcon class="h-4 w-4 shrink-0 text-primary" />
						<span>Complete brand identity integration</span>
					</li>
				</ul>

				<div class="mb-8 border-t border-neutral-800 pt-8">
					<h4 class="mb-4 text-xs font-bold tracking-widest uppercase text-neutral-400">
						After Delivery
					</h4>

					<div class="grid gap-3">
						<button
							class="group relative flex w-full flex-col gap-1.5 border-2 p-4 text-left transition-all duration-200 {enterprisePartnershipSelected
								? 'border-primary bg-primary/10'
								: 'border-neutral-700 hover:border-neutral-600'}"
							onclick={() => (enterprisePartnershipSelected = true)}
						>
							<div class="flex w-full items-center justify-between">
								<span
									class="text-sm font-bold uppercase {enterprisePartnershipSelected
										? 'text-primary-soft'
										: 'text-neutral-400'}"
								>
									Ongoing Retainer
								</span>

								<span class="text-xs font-bold text-neutral-400">Monthly</span>
							</div>

							<p class="text-sm text-neutral-400">
								All changes covered. Predictable costs. No surprises.
							</p>

							{#if enterprisePartnershipSelected}
								<div
									class="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white shadow-sm"
								>
									<CheckIcon class="h-3 w-3" />
								</div>
							{/if}
						</button>

						<button
							class="group relative flex w-full flex-col gap-1.5 border-2 p-4 text-left transition-all duration-200 {!enterprisePartnershipSelected
								? 'border-white bg-white/5'
								: 'border-neutral-800'}"
							onclick={() => (enterprisePartnershipSelected = false)}
						>
							<div class="flex w-full items-center justify-between">
								<span
									class="text-sm font-bold uppercase {!enterprisePartnershipSelected
										? 'text-white'
										: 'text-neutral-400'}"
								>
									Per-Request
								</span>
							</div>

							<p class="text-sm text-neutral-400">
								Every change billed separately. With complex multi-page sites, costs add up fast — most clients end up paying significantly more this way.
							</p>
						</button>
					</div>

					<div class="mt-6 space-y-2.5 text-sm">
						<div class="flex items-center gap-3">
							{#if enterprisePartnershipSelected}
								<CheckIcon class="h-4 w-4 shrink-0 text-primary" />
							{:else}
								<XIcon class="h-4 w-4 shrink-0 text-neutral-500" />
							{/if}

							<span class={enterprisePartnershipSelected ? 'text-white' : 'text-neutral-400 line-through'}>
								Unlimited changes across all pages & features
							</span>
						</div>

						<div class="flex items-center gap-3">
							{#if enterprisePartnershipSelected}
								<CheckIcon class="h-4 w-4 shrink-0 text-primary" />
							{:else}
								<XIcon class="h-4 w-4 shrink-0 text-neutral-500" />
							{/if}

							<span class={enterprisePartnershipSelected ? 'text-white' : 'text-neutral-400 line-through'}>
								Priority support & fast turnaround
							</span>
						</div>

						<div class="flex items-center gap-3">
							{#if enterprisePartnershipSelected}
								<CheckIcon class="h-4 w-4 shrink-0 text-primary" />
							{:else}
								<XIcon class="h-4 w-4 shrink-0 text-neutral-500" />
							{/if}
							
							<span class={enterprisePartnershipSelected ? 'text-white' : 'text-neutral-400 line-through'}>
								Predictable monthly spend
							</span>
						</div>
					</div>
				</div>
			</PricingCard>
		</div>
	</div>
</section>
