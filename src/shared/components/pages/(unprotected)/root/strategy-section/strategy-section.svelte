<script lang="ts">
	// COMPONENTS
	import StrategySection01 from './strategy-section-01.svelte';
	import StrategySection02 from './strategy-section-02.svelte';
	import StrategySection03 from './strategy-section-03.svelte';

	// IMPORTANT TO KNOW: The stats used below (73%, 3×, 43%, 1 second = 7% conversion drop) are real industry
	// figures. If a savvy technical client asks "where's that from?" you should be able to cite them.
	// Sources: Google/Deloitte for the speed stat, Verizon DBIR for the 43% cyberattack stat.
	// Be aware these are real numbers — not made up.
</script>

<section id="strategy" class="flex items-center justify-center max-w-8xl mx-auto px-6 md:px-12 lg:px-24">
	<div class="flex flex-col gap-6 md:gap-16">
		<StrategySection01 />
		<StrategySection02 />
		<StrategySection03 />
	</div>
</section>
