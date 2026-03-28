<!--
	Right column: full-bleed video.
	- Fills 100% of the parent column (55vw on desktop, 100% on mobile).
	- No padding, no margin, no border-radius — raw edge-to-edge.
	- Replace the <video> src with your actual asset. The poster attribute
	  accepts a thumbnail image path shown before the video loads.
	- object-cover ensures the video crops to fill without letterboxing.
	- A subtle dark gradient on the left edge softens the hard cut against
	  the text column, keeping legibility if the video is light-coloured.
-->
<div class="relative w-full h-full min-h-[inherit]">

	<!-- Swap src / poster for your real video asset -->
	<video
		class="absolute inset-0 w-full h-full object-cover"
		src="/home/hero-video.mp4"
		poster="/videos/hero-poster.jpg"
		autoplay
		muted
		loop
		playsinline
		aria-hidden="true"
	></video>

	<!-- Left-edge fade: blends video into the text column on desktop -->
	<div
		class="absolute inset-y-0 left-0 w-24 pointer-events-none hidden lg:block"
		style="background: linear-gradient(to right, var(--background), transparent);"
		aria-hidden="true"
	></div>

</div>