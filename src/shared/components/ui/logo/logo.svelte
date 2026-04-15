<script lang="ts">
	// CONFIG
	import { LOGO } from '@/shared/constants';

	// COMPONENTS
	import { Link } from '@/shared/components/ui/link';

	let { compact = false }: { compact?: boolean } = $props();
</script>

<Link href="/" class="inline-block shrink-0 leading-none" aria-label="Home">
	<img
		src={LOGO}
		alt="OMNILABS"
		class="block w-auto object-contain {compact ? 'h-6 sm:h-10' : 'h-10'}"
	/>
</Link>
