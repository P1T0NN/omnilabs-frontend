<script lang="ts">
    export let text = "SELECTED WORKS • STRATEGY • DEVELOPMENT • GROWTH • ";
    export let speed = 20;
</script>

<div class="relative flex overflow-hidden border-t-2 border-b-2 border-white/10 bg-black py-4">
    <div class="animate-marquee whitespace-nowrap">
        <span class="mx-4 font-sans text-4xl font-black italic tracking-tighter text-transparent uppercase text-stroke-1 text-stroke-white md:text-6xl">
            {text}
        </span>
        <span class="mx-4 font-sans text-4xl font-black italic tracking-tighter text-transparent uppercase text-stroke-1 text-stroke-white md:text-6xl">
            {text}
        </span>
        <span class="mx-4 font-sans text-4xl font-black italic tracking-tighter text-transparent uppercase text-stroke-1 text-stroke-white md:text-6xl">
            {text}
        </span>
        <span class="mx-4 font-sans text-4xl font-black italic tracking-tighter text-transparent uppercase text-stroke-1 text-stroke-white md:text-6xl">
            {text}
        </span>
    </div>

    <div class="absolute top-0 animate-marquee2 whitespace-nowrap py-4">
        <span class="mx-4 font-sans text-4xl font-black italic tracking-tighter text-transparent uppercase text-stroke-1 text-stroke-white md:text-6xl">
            {text}
        </span>
        <span class="mx-4 font-sans text-4xl font-black italic tracking-tighter text-transparent uppercase text-stroke-1 text-stroke-white md:text-6xl">
            {text}
        </span>
        <span class="mx-4 font-sans text-4xl font-black italic tracking-tighter text-transparent uppercase text-stroke-1 text-stroke-white md:text-6xl">
            {text}
        </span>
        <span class="mx-4 font-sans text-4xl font-black italic tracking-tighter text-transparent uppercase text-stroke-1 text-stroke-white md:text-6xl">
            {text}
        </span>
    </div>
</div>

<style>
    .text-stroke-1 {
        -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
    }
</style>
