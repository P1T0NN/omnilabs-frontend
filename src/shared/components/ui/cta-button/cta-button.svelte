<script lang="ts">
	import { cn } from '@/shared/utils/utils';

	// LUCIDE ICONS
	import ArrowRight from '@lucide/svelte/icons/arrow-right';

	interface Props {
		href: string;
		variant?: 'primary' | 'black' | 'light';
		withArrow?: boolean;
		class?: string;
		children: import('svelte').Snippet;
	}

	let { href, variant = 'primary', withArrow = true, class: className = '', children }: Props = $props();

	const variantClasses = {
		primary: 'bg-primary text-white hover:bg-black',
		black: 'bg-black text-background hover:bg-primary',
		light: 'min-w-[280px] bg-background text-black hover:bg-primary hover:text-white'
	};

	const baseClasses =
		'group inline-flex h-14 items-center justify-center gap-2 rounded-none px-10 text-sm font-bold tracking-widest uppercase transition-colors';
</script>

<a
	{href}
	class={cn(className, baseClasses, variantClasses[variant])}
>
	{@render children()}
	{#if withArrow}
		<ArrowRight class="h-5 w-5 transition-transform group-hover:translate-x-1" />
	{/if}
</a>
