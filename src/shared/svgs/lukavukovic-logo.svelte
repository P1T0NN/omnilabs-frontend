<script lang="ts">
	let { width = 40, height = 40 }: { width?: number; height?: number } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width={width} height={height}>
    <rect width="100" height="100" rx="20" fill="#1a1a1a"/>
    <text x="50" y="68" text-anchor="middle" font-family="Inter, sans-serif" font-weight="800" font-size="48" fill="#7c3aed">LV</text>
</svg>