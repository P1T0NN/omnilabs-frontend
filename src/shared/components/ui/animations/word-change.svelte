<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		words: readonly string[];
	}

	let { words }: Props = $props();

	let index = $state(0);
	let visible = $state(true);

	onMount(() => {
		const interval = setInterval(() => {
			visible = false;
			setTimeout(() => {
				index = (index + 1) % words.length;
				visible = true;
			}, 300);
		}, 2000);

		return () => clearInterval(interval);
	});
</script>

<span
	class="transition-opacity duration-300"
	class:opacity-0={!visible}
	class:opacity-100={visible}
>
	{words[index]}
</span>