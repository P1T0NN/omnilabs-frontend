<script lang="ts">
    // COMPONENTS
	import ContactLeftContent from '@/shared/components/pages/(unprotected)/contact/contact-left-content.svelte';
    import ContactRightContent from '@/shared/components/pages/(unprotected)/contact/contact-right-content.svelte';
</script>

<section id="contact" class="bg-background min-h-screen py-32">
    <div class="container mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start">
            <ContactLeftContent />

            <ContactRightContent />
        </div>
    </div>
</section>
