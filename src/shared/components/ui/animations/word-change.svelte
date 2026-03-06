<script lang="ts">
	interface Props {
		words: readonly string[];
	}

	let { words }: Props = $props();
</script>

<span class="word-change-container inline-block h-[1em] overflow-hidden align-baseline">
	<span class="word-change-track block">
		{#each words as word}
			<span class="block h-[1em] leading-none text-center">{word}</span>
		{/each}
	</span>
</span>
