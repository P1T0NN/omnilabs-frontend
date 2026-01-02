<script lang="ts">
	// CONFIG
	import { COMPANY_NAME } from '@/shared/constants/constants';

	// LUCIDE ICONS
	import LinkedinIcon from '@lucide/svelte/icons/linkedin';
	import GithubIcon from '@lucide/svelte/icons/github';
</script>

<footer class="border-t border-border px-6 py-12">
	<div class="mx-auto max-w-6xl">
		<div class="flex flex-col items-center justify-between gap-6 md:flex-row">
			<div class="flex items-center gap-6">
				<a href="/" class="text-xl font-bold text-foreground">
					<span class="text-primary">●</span> {COMPANY_NAME}
				</a>
				<div class="flex items-center gap-4">
					<a
						href="https://linkedin.com"
						target="_blank"
						rel="noopener noreferrer"
						class="text-muted-foreground transition-colors hover:text-primary"
						aria-label="LinkedIn"
					>
						<LinkedinIcon class="h-5 w-5" />
					</a>
					<a
						href="https://github.com"
						target="_blank"
						rel="noopener noreferrer"
						class="text-muted-foreground transition-colors hover:text-primary"
						aria-label="GitHub"
					>
						<GithubIcon class="h-5 w-5" />
					</a>
				</div>
			</div>

			<p class="text-sm text-muted-foreground">
				Strategic websites built for conversion. <span class="text-primary"
					>Owned by you completely.</span
				>
			</p>
		</div>
	</div>
</footer>
