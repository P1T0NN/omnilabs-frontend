<script lang="ts">
    import { COMPANY_DATA } from '@/shared/constants';
</script>

<footer class="bg-black text-white py-20">
    <div class="container mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 font-sans text-sm">
            <div class="col-span-2">
                <h2 class="text-4xl font-bold mb-6 text-primary uppercase tracking-tight">{COMPANY_DATA.NAME}</h2>
                <p class="max-w-sm text-neutral-400 leading-relaxed">
                    We build websites that convert visitors into customers — combining CEO-level marketing strategy with senior engineering and security expertise.
                </p>
            </div>
            <div>
                <h3 class="mb-6 font-bold uppercase tracking-widest text-white text-xs">Navigate</h3>
                <ul class="space-y-4 text-neutral-400">
                    <li><a href="#volumes" class="hover:text-white transition-colors">Work</a></li>
                    <li><a href="#narrative" class="hover:text-white transition-colors">Strategy</a></li>
                    <li><a href="#process" class="hover:text-white transition-colors">Process</a></li>
                    <li><a href="#pricing" class="hover:text-white transition-colors">Pricing</a></li>
                    <li><a href="#faq" class="hover:text-white transition-colors">FAQ</a></li>
                    <li><a href="/contact" class="hover:text-white transition-colors">Contact</a></li>
                </ul>
            </div>
            <div>
                <h3 class="mb-6 font-bold uppercase tracking-widest text-white text-xs">Get in Touch</h3>
                <ul class="space-y-4 text-neutral-400">
                    <li>
                        <a href="mailto:{COMPANY_DATA.EMAIL}" class="hover:text-white transition-colors">
                            {COMPANY_DATA.EMAIL}
                        </a>
                    </li>
                    <li>
                        <a href="tel:{COMPANY_DATA.PHONE}" class="hover:text-white transition-colors">
                            {COMPANY_DATA.PHONE}
                        </a>
                    </li>
                    <li class="text-neutral-500">{COMPANY_DATA.ADDRESS}</li>
                    <li class="pt-2">
                        <a href="/contact" class="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-primary text-xs hover:text-white transition-colors">
                            Start a Project →
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="mt-16 border-t border-white/10 pt-8 flex flex-col items-center justify-between gap-4 font-sans text-xs text-neutral-600 md:flex-row">
            <span>© {new Date().getFullYear()} {COMPANY_DATA.NAME}. All rights reserved.</span>
            <span class="uppercase tracking-widest">No AI Slop. No Medium Ticket. No Compromises.</span>
        </div>
    </div>
</footer>
