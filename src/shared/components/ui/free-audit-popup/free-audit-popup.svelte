<script lang="ts">
	// COMPONENTS
	import {
		Dialog,
		DialogContent,
		DialogDescription,
		DialogHeader,
		DialogTitle,
		DialogClose
	} from '@/shared/components/ui/dialog';

	// CONFIG
	import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/constants/constants';

	// LUCIDE ICONS
	import XIcon from '@lucide/svelte/icons/x';

	let { open = $bindable(false) }: { open?: boolean } = $props();
</script>

<Dialog bind:open>
	<DialogContent class="max-w-md">
		<DialogHeader>
			<DialogTitle class="text-2xl">Wait! Get a Free Website Audit</DialogTitle>
			<DialogDescription class="text-base">
				Before you go, let us analyze your current website and show you exactly where you're losing money. 100% free. No obligation.
			</DialogDescription>
		</DialogHeader>

		<div class="flex flex-col gap-3">
			<a
				href={UNPROTECTED_PAGE_ENDPOINTS.CONTACT}
				class="rounded-lg bg-primary px-6 py-3 text-center font-semibold text-primary-foreground transition-all hover:bg-primary/90"
			>
				Get Free Audit
			</a>
			<DialogClose>
				<button
					class="w-full text-sm text-muted-foreground underline transition-colors hover:text-foreground"
				>
					No thanks, I'll pass
				</button>
			</DialogClose>
		</div>
	</DialogContent>
</Dialog>

