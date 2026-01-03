<script lang="ts">
    // COMPONENTS
	import ContactHeader from '@/shared/components/pages/(unprotected)/contact/contact-header.svelte';
	import ContactInformation from '@/shared/components/pages/(unprotected)/contact/contact-information.svelte';
	import ContactForm from '@/shared/components/pages/(unprotected)/contact/contact-form.svelte';
</script>

<section class="min-h-screen px-6 pt-20 pb-24">
	<div class="mx-auto w-full max-w-4xl">
		<ContactHeader />

		<div class="grid gap-12 lg:grid-cols-3">
			<ContactInformation />

			<div class="lg:col-span-2">
				<ContactForm />
			</div>
		</div>
	</div>
</section>

