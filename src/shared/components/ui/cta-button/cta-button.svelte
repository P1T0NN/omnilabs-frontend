<script lang="ts">
	import { cn } from '@/shared/utils/utils';
	import { Link } from '@/shared/components/ui/link';

	// LUCIDE ICONS
	import ArrowRight from '@lucide/svelte/icons/arrow-right';

	interface Props {
		variant?: 'primary' | 'foreground' | 'light' | 'primaryHoverLight';
		withArrow?: boolean;
		href?: string;
		class?: string;
		children: import('svelte').Snippet;
	}

	let { variant = 'primary', withArrow = true, href, class: className = '', children }: Props = $props();
	const defaultCtaHref = 'https://calendly.com/mariafernandapadilla05/30min';

	const variantClasses = {
		primary: 'bg-primary text-white hover:bg-foreground',
		foreground: 'bg-foreground text-background hover:bg-primary',
		light: 'min-w-[280px] bg-background text-black hover:bg-primary hover:text-white',
		primaryHoverLight: 'bg-primary text-white hover:bg-background hover:text-foreground'
	};

	const baseClasses =
		'group inline-flex h-14 items-center justify-center gap-2 rounded-none px-10 text-sm font-bold tracking-widest uppercase transition-colors';
</script>

<Link
	href={href ?? defaultCtaHref}
	target="_blank"
	rel="noopener noreferrer"
	class={cn(baseClasses, variantClasses[variant], className)}
>
	{@render children()}
	{#if withArrow}
		<ArrowRight class="h-5 w-5 transition-transform group-hover:translate-x-1" />
	{/if}
</Link>
