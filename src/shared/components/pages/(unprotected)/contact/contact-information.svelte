<script lang="ts">
    // CONFIG
    import { CONTACT_INFORMATIONS } from '@/shared/constants/constants';

    // LUCIDE ICONS
    import MailIcon from '@lucide/svelte/icons/mail';
    import MessageSquareIcon from '@lucide/svelte/icons/message-square';
</script>

<div class="lg:col-span-1">
    <div class="space-y-6">
        <div class="rounded-xl border border-border bg-card p-6">
            <div class="mb-3 flex items-center gap-3">
                <div
                    class="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary"
                >
                    <MailIcon class="size-5" />
                </div>
                <div>
                    <p class="text-sm font-medium text-muted-foreground">Email</p>
                    <p class="text-sm font-semibold text-foreground">{CONTACT_INFORMATIONS.EMAIL}</p>
                </div>
            </div>
        </div>

        <div class="rounded-xl border border-border bg-card p-6">
            <div class="mb-3 flex items-center gap-3">
                <div
                    class="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary"
                >
                    <MessageSquareIcon class="size-5" />
                </div>
                <div>
                    <p class="text-sm font-medium text-muted-foreground">Response Time</p>
                    <p class="text-sm font-semibold text-foreground">Within 24 hours</p>
                </div>
            </div>
        </div>
    </div>
</div>