<script lang="ts">
	// CONFIG
	import { LOGO } from '@/shared/constants';

	// COMPONENTS
	import { Link } from '@/shared/components/ui/link';
</script>

<Link href="/" class="inline-block shrink-0 leading-none" aria-label="Home">
	<img
		src={LOGO}
		alt="OMNILABS"
		class="block h-10 w-auto"
	/>
</Link>
