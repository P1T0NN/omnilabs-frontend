<script lang="ts">
	import type { Snippet } from 'svelte';
	import { Link } from '@/shared/components/ui/link';

	interface Props {
		title: string;
		subtitle: string;
		label: string;
		variant?: 'light' | 'dark';
		buttonText: string;
		href?: string;
		children?: Snippet;
	}

	let {
		title,
		subtitle,
		label,
		variant = 'light',
		buttonText,
		href = '/contact',
		children
	}: Props = $props();
</script>

<div
	class="flex flex-col gap-8 border-2 border-black p-8 transition-all duration-300 md:p-12 {variant === 'light'
		? 'bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:shadow-[15px_15px_0px_0px_var(--primary)]'
		: 'bg-black text-background shadow-[10px_10px_0px_0px_var(--primary)] transition-transform hover:translate-x-1 hover:-translate-y-1'}"
>
	<div class="flex flex-col gap-4 border-b pb-8 {variant === 'light' ? 'border-black' : 'border-neutral-800'}">
		<span
			class="inline-block text-xs font-bold tracking-widest uppercase {variant === 'light'
				? 'text-primary'
				: 'text-primary-soft'}"
		>
			{label}
		</span>
		<h3 class="text-4xl font-black uppercase">{title}</h3>
		<p
			class="text-xl italic {variant === 'light' ? 'text-neutral-600' : 'text-neutral-400'}"
		>
			{subtitle}
		</p>
	</div>

	{#if children}
		{@render children()}
	{/if}

	<Link
		{href}
		class="inline-flex h-12 w-full items-center justify-center rounded-none text-sm font-bold tracking-widest uppercase transition-colors text-center {variant === 'light'
			? 'bg-black text-background hover:bg-primary'
			: 'bg-white text-black hover:bg-primary hover:text-white'}"
	>
		{buttonText}
	</Link>
</div>
