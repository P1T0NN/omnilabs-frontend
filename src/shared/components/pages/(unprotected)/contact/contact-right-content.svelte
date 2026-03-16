<script lang="ts">
	// CLASSES
	import { contactPageClass } from '@/routes/(unprotected)/contact/index.svelte';

	// COMPONENTS
	import { toast } from 'svelte-sonner';
    import Button from '@/shared/components/ui/button/button.svelte';
    import Label from '@/shared/components/ui/label/label.svelte';
    import Input from '@/shared/components/ui/input/input.svelte';
    import Textarea from '@/shared/components/ui/textarea/textarea.svelte';
    import Spinner from '@/shared/components/ui/spinner/spinner.svelte';
    import ArrowRight from '@lucide/svelte/icons/arrow-right';

	// ACTIONS
	import { sendContactFormEmail } from '@/features/email/actions/email-actions.remote';

	const handleContact = async () => {
		contactPageClass.pendingStates.contactIsPending = true;

		const result = await sendContactFormEmail({
			name: contactPageClass.contactInputs.name,
			email: contactPageClass.contactInputs.email,
			subject: contactPageClass.contactInputs.budget || 'Project Inquiry',
			message: contactPageClass.contactInputs.message
		});

		if (result.success) {
			toast.success(result.message);
			contactPageClass.resetContactFields();
		} else {
			toast.error(result.message);
		}

		contactPageClass.pendingStates.contactIsPending = false;
	};
</script>

<div class="bg-white p-8 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:p-12">
	<div class="flex flex-col gap-8">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			<div class="flex flex-col gap-3">
				<Label class="text-xs font-bold tracking-widest text-primary uppercase" for="name">
					Your Name
				</Label>

				<Input
					id="name"
					name="name"
					type="text"
					bind:value={contactPageClass.contactInputs.name}
					placeholder="Jan Kowalski"
					class="bg-neutral-50 border-2 border-black rounded-none p-4 text-black placeholder:text-neutral-400 focus:border-primary focus:ring-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] focus:shadow-[4px_4px_0px_0px_var(--primary)] transition-all duration-200"
				/>
			</div>

			<div class="flex flex-col gap-3">
				<Label class="text-xs font-bold tracking-widest text-primary uppercase" for="email">
					Email Address
				</Label>

				<Input
					id="email"
					name="email"
					type="email"
					bind:value={contactPageClass.contactInputs.email}
					placeholder="jan@company.com"
					class="bg-neutral-50 border-2 border-black rounded-none p-4 text-black placeholder:text-neutral-400 focus:border-primary focus:ring-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] focus:shadow-[4px_4px_0px_0px_var(--primary)] transition-all duration-200"
				/>
			</div>
		</div>

		<div class="flex flex-col gap-3">
			<Label class="text-xs font-bold tracking-widest text-primary uppercase" for="budget">
				Project Type
			</Label>

			<div class="relative">
				<select
					id="budget"
					bind:value={contactPageClass.contactInputs.budget}
					class="w-full appearance-none bg-neutral-50 border-2 border-black rounded-none p-4 pr-12 text-black focus:border-primary focus:ring-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] focus:shadow-[4px_4px_0px_0px_var(--primary)] transition-all duration-200"
				>
					<option value="" disabled selected>Select project type</option>
					<option value="micro-launch">Micro-Launch (single page / MVP)</option>
					<option value="enterprise">Enterprise (multi-page platform)</option>
					<option value="unsure">Not sure yet</option>
				</select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-black">
                    <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
			</div>
		</div>

		<div class="flex flex-col gap-3">
			<Label class="text-xs font-bold tracking-widest text-primary uppercase" for="message">
				Tell Us About Your Project
			</Label>

			<Textarea
				id="message"
				bind:value={contactPageClass.contactInputs.message}
				rows={6}
				placeholder="What do you do, who's your customer, and what's not working with your current site (or why you need one)?"
				class="bg-neutral-50 border-2 border-black rounded-none p-4 text-black placeholder:text-neutral-400 focus:border-primary focus:ring-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] focus:shadow-[4px_4px_0px_0px_var(--primary)] transition-all duration-200 resize-none"
			/>
		</div>

		<Button
			type="button"
            onclick={handleContact}
			disabled={contactPageClass.pendingStates.contactIsPending}
			class="mt-4 h-16 w-full rounded-none bg-black text-lg font-bold tracking-widest uppercase text-background shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:bg-primary hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all duration-200"
		>
            {#if contactPageClass.pendingStates.contactIsPending}
                <Spinner />
            {:else}
                Send My Project Brief
                <ArrowRight class="ml-3 h-5 w-5" />
            {/if}
		</Button>

		<p class="mt-2 text-center text-xs leading-relaxed text-neutral-600">
			We'll review your brief and respond with a custom strategy outline within 24 hours.
			<br />No spam. No hard sell. Just an honest conversation.
		</p>
	</div>
</div>
