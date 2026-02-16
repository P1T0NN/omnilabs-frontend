<script lang="ts">
	import type { Snippet } from 'svelte';

	// COMPONENTS
	import Button from '@/shared/components/ui/button/button.svelte';

	interface Props {
		title: string;
		subtitle: string;
		label: string;
		variant?: 'light' | 'dark';
		buttonText: string;
		children?: Snippet;
	}

	let {
		title,
		subtitle,
		label,
		variant = 'light',
		buttonText,
		children
	}: Props = $props();
</script>

<div
	class="border-2 border-black p-8 transition-all duration-300 md:p-12 {variant === 'light'
		? 'bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:shadow-[15px_15px_0px_0px_var(--primary)]'
		: 'bg-black text-white shadow-[10px_10px_0px_0px_var(--primary)] transition-transform hover:translate-x-1 hover:-translate-y-1'}"
>
	<div class="mb-8 border-b pb-8 {variant === 'light' ? 'border-black' : 'border-neutral-800'}">
		<span
			class="mb-3 inline-block font-sans text-xs font-bold tracking-widest uppercase {variant === 'light'
				? 'text-primary'
				: 'text-primary'}"
		>
			{label}
		</span>
		<h3 class="mb-2 font-sans text-4xl font-black uppercase">{title}</h3>
		<p
			class="font-serif text-xl italic {variant === 'light' ? 'text-neutral-500' : 'text-neutral-400'}"
		>
			{subtitle}
		</p>
	</div>

	{#if children}
		{@render children()}
	{/if}

	<Button
		class="h-14 w-full rounded-none font-sans text-lg font-bold tracking-widest uppercase {variant === 'light'
			? 'bg-black text-white hover:bg-primary'
			: 'border-none bg-white text-black hover:bg-primary hover:text-white'}"
	>
		{buttonText}
	</Button>
</div>
