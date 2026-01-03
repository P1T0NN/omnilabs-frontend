<script lang="ts">
    // COMPONENTS
    import Label from '@/shared/components/ui/label/label.svelte';
    import Input from '@/shared/components/ui/input/input.svelte';
    import Textarea from '@/shared/components/ui/textarea/textarea.svelte';
    import Button from '@/shared/components/ui/button/button.svelte';
    import { toast } from 'svelte-sonner';
    import ErrorMessage from '@/shared/components/ui/error-message/error-message.svelte';
    import Spinner from '@/shared/components/ui/spinner/spinner.svelte';

    // ACTIONS
    import { sendContactFormEmail } from '@/features/email/actions/email-actions.remote';

    // UTILS
    import { getIssueMessages } from '@/shared/utils/validationUtils';

    // LUCIDE ICONS
    import UserIcon from '@lucide/svelte/icons/user';
    import MailIcon from '@lucide/svelte/icons/mail';
    import MessageSquareIcon from '@lucide/svelte/icons/message-square';
    import SendIcon from '@lucide/svelte/icons/send';

    let isSubmitting = $state(false);
    let submitStatus = $state<'idle' | 'success' | 'error'>('idle');

    const handleSendContactFormEmail = sendContactFormEmail.enhance(async ({ form, submit }) => {
        isSubmitting = true;

        await submit();

        const result = sendContactFormEmail.result;

        if (result?.success) {
            toast.success(result.message);
            form.reset();
            submitStatus = 'success';
        } else if (result?.message) {
            toast.error(result.message);
            submitStatus = 'error';
        } else if (sendContactFormEmail.fields.allIssues()) {
            toast.error(getIssueMessages(sendContactFormEmail.fields.allIssues));
            submitStatus = 'error';
        }

        isSubmitting = false;
	});
</script>

<form
	{...handleSendContactFormEmail}
	class="rounded-xl border border-border bg-card p-8"
>
	<div class="space-y-6">
		<div class="space-y-2">
			<Label for="name">
				<UserIcon class="mr-2 inline size-4" />
				Name
			</Label>

			<Input 
                id="name"
                placeholder="Your full name"
                {...sendContactFormEmail.fields.name.as("text")}
                class={sendContactFormEmail.fields.name.issues() ? 'border-destructive' : ''}
            />

            <ErrorMessage issues={sendContactFormEmail.fields.name.issues()} />
		</div>

		<div class="space-y-2">
			<Label for="email">
				<MailIcon class="mr-2 inline size-4" />
				Email
			</Label>

			<Input
				id="email"
				placeholder="your.email@example.com"
				{...sendContactFormEmail.fields.email.as("email")}
                class={sendContactFormEmail.fields.email.issues() ? 'border-destructive' : ''}
			/>

            <ErrorMessage issues={sendContactFormEmail.fields.email.issues()} />
		</div>

		<div class="space-y-2">
			<Label for="subject">
				<MessageSquareIcon class="mr-2 inline size-4" />
				Subject
			</Label>

			<Input
				id="subject"
				type="text"
				placeholder="What's this about?"
				{...sendContactFormEmail.fields.subject.as("text")}
                class={sendContactFormEmail.fields.subject.issues() ? 'border-destructive' : ''}
			/>

            <ErrorMessage issues={sendContactFormEmail.fields.subject.issues()} />
		</div>

		<div class="space-y-2">
			<Label for="message">
				<MessageSquareIcon class="mr-2 inline size-4" />
				Message
			</Label>

			<Textarea
				id="message"
				placeholder="Tell me about your project..."
				{...sendContactFormEmail.fields.message.as("text")}
				rows={6}
			/>

            <ErrorMessage issues={sendContactFormEmail.fields.message.issues()} />
		</div>

		<Button 
            type="submit" 
            size="lg" 
            class="w-full" 
            disabled={isSubmitting}
        >
			{#if isSubmitting}
				<Spinner class="mr-2 size-4" />
			{:else}
				<SendIcon class="mr-2 size-4" />
            {/if}
			Send Message
		</Button>

		{#if submitStatus === 'success'}
			<div
				class="rounded-lg border border-primary/30 bg-primary/10 p-4 text-center text-sm text-primary"
			>
				Message sent successfully! I'll get back to you soon.
			</div>
		{/if}

		{#if submitStatus === 'error'}
			<div
				class="rounded-lg border border-destructive/30 bg-destructive/10 p-4 text-center text-sm text-destructive"
			>
				Something went wrong. Please try again.
			</div>
		{/if}
	</div>
</form>
