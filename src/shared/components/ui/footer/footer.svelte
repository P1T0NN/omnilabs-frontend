<script lang="ts">
    // CONFIG
    import { COMPANY_DATA, UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/constants';
    import { Link } from '@/shared/components/ui/link';
</script>

<footer class="bg-black text-background py-20">
    <div class="container mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
            <div class="col-span-2 flex flex-col gap-6">
                <h2 class="text-4xl font-bold text-primary uppercase tracking-tight">{COMPANY_DATA.NAME}</h2>
                <p class="max-w-sm text-neutral-400 leading-relaxed">
                    We build digital products that convert visitors into customers — combining CEO-level marketing strategy with senior engineering and security expertise.
                </p>
            </div>

            <div class="flex flex-col gap-6">
                <h3 class="font-bold uppercase tracking-widest text-background text-xs">Navigate</h3>
                <ul class="space-y-4 text-neutral-400">
                    <li><Link href={UNPROTECTED_PAGE_ENDPOINTS.WORK} class="hover:text-background transition-colors">Work</Link></li>
                    <li><Link href={UNPROTECTED_PAGE_ENDPOINTS.STRATEGY} class="hover:text-background transition-colors">Strategy</Link></li>
                    <li><Link href={UNPROTECTED_PAGE_ENDPOINTS.PROCESS} class="hover:text-background transition-colors">Process</Link></li>
                    <li><Link href={UNPROTECTED_PAGE_ENDPOINTS.FAQ} class="hover:text-background transition-colors">FAQ</Link></li>
                    <li><Link href={UNPROTECTED_PAGE_ENDPOINTS.CONTACT} class="hover:text-background transition-colors">Contact</Link></li>
                </ul>
            </div>

            <div class="flex flex-col gap-6">
                <h3 class="font-bold uppercase tracking-widest text-background text-xs">Get in Touch</h3>
                <ul class="space-y-4 text-neutral-400">
                    <li>
                        <Link href="mailto:{COMPANY_DATA.EMAIL}" class="hover:text-background transition-colors">
                            {COMPANY_DATA.EMAIL}
                        </Link>
                    </li>

                    <li>
                        <Link href="tel:{COMPANY_DATA.PHONE}" class="hover:text-background transition-colors">
                            {COMPANY_DATA.PHONE}
                        </Link>
                    </li>

                    <li class="text-neutral-400">{COMPANY_DATA.ADDRESS}</li>

                    <li class="pt-2">
                        <Link href={UNPROTECTED_PAGE_ENDPOINTS.CONTACT} class="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-primary text-xs hover:text-background transition-colors">
                            Start a Project →
                        </Link>
                    </li>
                </ul>
            </div>
        </div>

        <div class="mt-16 border-t border-white/10 pt-8 flex flex-col items-center justify-center gap-4 text-xs text-neutral-400 md:flex-row">
            <span>© {new Date().getFullYear()} {COMPANY_DATA.NAME}. All rights reserved.</span>
        </div>
    </div>
</footer>
