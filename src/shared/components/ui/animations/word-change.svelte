<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		words: readonly string[];
		activeIndex?: number;
	}

	let { words, activeIndex = $bindable(0) }: Props = $props();

	const extended = $derived([...words, words[0]]);
	let index = $state(0);
	let noTransition = $state(false);

	$effect(() => {
		activeIndex = index % words.length;
	});

	onMount(() => {
		const interval = setInterval(() => {
			if (index === words.length - 1) {
				index = words.length;
				setTimeout(() => {
					noTransition = true;
					requestAnimationFrame(() => {
						index = 0;
						requestAnimationFrame(() => {
							noTransition = false;
						});
					});
				}, 500);
			} else {
				index++;
			}
		}, 2000);
		return () => clearInterval(interval);
	});
</script>

<span class="relative inline-block h-[1em] leading-none align-baseline">
	<span class="invisible inline-block h-[1em] leading-[1em] pr-[0.12em]">{words[index % words.length]}</span>
	<span class="absolute top-0 left-0 h-[1em] w-full overflow-hidden pr-[0.12em]">
		<span
			class="block transition-transform duration-500 ease-out"
			class:transition-none={noTransition}
			style="transform: translateY(-{index * 100 / extended.length}%){noTransition ? '; transition: none' : ''}"
		>
			{#each extended as word, i (i)}
				<span class="block h-[1em] leading-[1em]">{word}</span>
			{/each}
		</span>
	</span>
</span>
