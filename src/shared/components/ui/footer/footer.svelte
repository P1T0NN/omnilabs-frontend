<script lang="ts">
    // CONFIG
    import { COMPANY_DATA } from '@/shared/constants';
</script>

<footer class="bg-black text-white py-20">
    <div class="container mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 font-sans text-sm uppercase tracking-widest">
            <div class="col-span-2">
                <h2 class="text-4xl font-bold mb-8 text-primary">{COMPANY_DATA.NAME}</h2>
                <p class="normal-case max-w-sm text-neutral-400">
                    Crafting digital experiences with editorial precision. No shortcuts. No slop. Just pure, unadulterated design.
                </p>
            </div>
            <div>
                <h3 class="mb-6 font-bold text-white">Index</h3>
                <ul class="space-y-4 text-neutral-400">
                    <li><a href="#" class="hover:text-white">Home</a></li>
                    <li><a href="#" class="hover:text-white">Work</a></li>
                    <li><a href="#" class="hover:text-white">Philosophy</a></li>
                </ul>
            </div>
            <div>
                <h3 class="mb-6 font-bold text-white">Contact</h3>
                <ul class="space-y-4 text-neutral-400">
                    <li>{COMPANY_DATA.EMAIL}</li>
                    <li>{COMPANY_DATA.PHONE}</li>
                    <li>{COMPANY_DATA.ADDRESS}</li>
                </ul>
            </div>
        </div>
    </div>
</footer>