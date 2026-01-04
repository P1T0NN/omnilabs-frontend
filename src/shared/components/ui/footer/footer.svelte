<script lang="ts">
	// LUCIDE ICONS
	import LinkedinIcon from '@lucide/svelte/icons/linkedin';
	import GithubIcon from '@lucide/svelte/icons/github';
	import MailIcon from '@lucide/svelte/icons/mail';
	import MapPinIcon from '@lucide/svelte/icons/map-pin';
</script>

<footer class="border-t border-border bg-card px-6 py-12">
	<div class="mx-auto max-w-6xl">
		<div class="mb-8 grid gap-8 md:grid-cols-3">
			<!-- Contact -->
			<div>
				<h3 class="mb-4 font-bold text-foreground">Contact</h3>
				<div class="space-y-2 text-sm text-muted-foreground">
					<a
						href="mailto:hello@convertdev.com"
						class="flex items-center gap-2 transition-colors hover:text-foreground"
					>
						<MailIcon class="h-4 w-4" />
						hello@convertdev.com
					</a>
					<div class="flex items-center gap-2">
						<MapPinIcon class="h-4 w-4" />
						Valencia, Spain
					</div>
					<p class="text-xs">Response time: Within 24 hours</p>
				</div>
			</div>

			<!-- Links -->
			<div>
				<h3 class="mb-4 font-bold text-foreground">Links</h3>
				<div class="space-y-2 text-sm">
					<a
						href="https://linkedin.com/in/yourprofile"
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
					>
						<LinkedinIcon class="h-4 w-4" />
						LinkedIn (Developer)
					</a>
					<a
						href="https://github.com/yourusername"
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
					>
						<GithubIcon class="h-4 w-4" />
						GitHub
					</a>
					<a
						href="https://linkedin.com/in/herprofile"
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
					>
						<LinkedinIcon class="h-4 w-4" />
						LinkedIn (Marketing CEO)
					</a>
				</div>
			</div>

			<!-- Statement -->
			<div>
				<h3 class="mb-4 font-bold text-foreground">About</h3>
				<div class="space-y-2 text-sm text-muted-foreground">
					<p>Strategic websites built for conversion.</p>
					<p>You own everything. Forever.</p>
					<p class="text-xs text-primary">Powered by Rust & Svelte</p>
				</div>
			</div>
		</div>

		<div class="border-t border-border pt-8 text-center text-sm text-muted-foreground">
			<p>© 2025 [Your Business Name]. All rights reserved.</p>
		</div>
	</div>
</footer>
