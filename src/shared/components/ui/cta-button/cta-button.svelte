<script lang="ts">
    // LUCIDE ICONS
	import ArrowRight from '@lucide/svelte/icons/arrow-right';

	interface Props {
		href: string;
		variant?: 'primary' | 'black' | 'light';
		class?: string;
		children: import('svelte').Snippet;
	}

	let { href, variant = 'primary', class: className = '', children }: Props = $props();

	const variantClasses = {
		primary:
			'bg-primary text-white hover:bg-black',
		black:
			'bg-black text-background hover:bg-primary',
		light:
			'min-w-[280px] bg-background text-black hover:bg-primary hover:text-white'
	};
</script>

<a
	{href}
	class="group inline-flex h-14 items-center justify-center gap-2 rounded-none px-10 text-base font-bold tracking-widest uppercase transition-colors {variantClasses[variant]} {className}"
>
	{@render children()}
	<ArrowRight class="h-5 w-5 transition-transform group-hover:translate-x-1" />
</a>
