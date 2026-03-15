<script lang="ts">
	// UTILS
	import { QualityImage } from '@/shared/components/ui/quality-image';

	// LUCIDE ICONS
	import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';

	interface Props {
		id: string;
		title: string;
		issue: string;
		client: string;
		description?: string;
		img: string;
		href?: string;
		class?: string;
	}

	let { id, title, issue, client, description, img, href, class: className = '' }: Props = $props();

	const srcset = $derived(
		img.includes('/home/opt/') && img.endsWith('-960w.webp')
			? img.replace(/-960w\.webp$/, '-640w.webp') +
				' 640w, ' +
				img +
				' 960w, ' +
				img.replace(/-960w\.webp$/, '-1280w.webp') +
				' 1280w'
			: undefined
	);
</script>

{#if href}
	<a
		href={href}
		target="_blank"
		rel="noopener noreferrer"
		class="group relative flex flex-col {className}"
	>
		<div
			class="mb-2 flex items-center justify-between font-mono text-xs tracking-widest text-neutral-400 uppercase"
		>
			<span>(FIG. {id})</span>
			<span>{client}</span>
		</div>

			<!-- Image Container with "Rough" Offset Border -->
			<div class="relative">
			<div
				class="absolute -right-3 -top-3 h-full w-full border-2 border-white/20 bg-transparent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
			></div>

			<div class="relative aspect-video overflow-hidden border-2 border-white/20 bg-neutral-900">
				<QualityImage
					src={img}
					alt={title}
					srcset={srcset}
					sizes="(min-width: 768px) 50vw, 100vw"
					width={1280}
					height={720}
					class="h-full w-full object-contain transition-all duration-700 group-hover:scale-105"
				/>

				<div
					class="absolute inset-0 flex items-center justify-center bg-primary/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 mix-blend-multiply"
				>
					<span
						class="rotate-[-10deg] border-4 border-white px-6 py-2 font-sans text-4xl font-black tracking-tighter text-white uppercase"
					>
						{issue}
					</span>
				</div>
			</div>
		</div>

		<div class="mt-6 flex items-start justify-between gap-4 border-t border-white/20 pt-4">
			<div class="min-w-0 flex-1">
				<h3
					class="stroke-text font-sans text-4xl font-black text-transparent uppercase leading-none"
				>
					{title}
				</h3>
				{#if description}
					<p class="mt-2 font-sans text-sm leading-relaxed text-neutral-400">{description}</p>
				{/if}
			</div>
			<div
				class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black text-white transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-white"
			>
				<ArrowUpRight class="h-6 w-6" />
			</div>
		</div>
	</a>
{:else}
	<div class="group relative flex flex-col {className}">
		<div
			class="mb-2 flex items-center justify-between font-mono text-xs tracking-widest text-neutral-400 uppercase"
		>
			<span>(FIG. {id})</span>
			<span>{client}</span>
		</div>

		<div class="relative">
			<div
				class="absolute -right-3 -top-3 h-full w-full border-2 border-white/20 bg-transparent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
			></div>

			<div class="relative aspect-video overflow-hidden border-2 border-white/20 bg-neutral-900">
				<QualityImage
					src={img}
					alt={title}
					srcset={srcset}
					sizes="(min-width: 768px) 50vw, 100vw"
					width={1280}
					height={720}
					class="h-full w-full object-contain transition-all duration-700 group-hover:scale-105"
				/>

				<div
					class="absolute inset-0 flex items-center justify-center bg-primary/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 mix-blend-multiply"
				>
					<span
						class="rotate-[-10deg] border-4 border-white px-6 py-2 font-sans text-4xl font-black tracking-tighter text-white uppercase"
					>
						{issue}
					</span>
				</div>
			</div>
		</div>

		<div class="mt-6 flex items-start justify-between gap-4 border-t border-white/20 pt-4">
			<div class="min-w-0 flex-1">
				<h3
					class="stroke-text font-sans text-4xl font-black text-transparent uppercase leading-none"
				>
					{title}
				</h3>
				{#if description}
					<p class="mt-2 font-sans text-sm leading-relaxed text-neutral-400">{description}</p>
				{/if}
			</div>
			<div
				class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black text-white transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-white"
			>
				<ArrowUpRight class="h-6 w-6" />
			</div>
		</div>
	</div>
{/if}

<style>
	.stroke-text {
		-webkit-text-stroke: 2px var(--background);
	}
</style>
