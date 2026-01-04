import { onMount } from 'svelte';
import { browser } from '$app/environment';

export function useScrollAnimation(
	element: HTMLElement | null,
	options: {
		threshold?: number;
		rootMargin?: string;
		animationClass?: string;
	} = {}
) {
	const {
		threshold = 0.1,
		rootMargin = '0px',
		animationClass = 'animate-in'
	} = options;

	let isVisible = $state(false);

	onMount(() => {
		if (!browser || !element) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						isVisible = true;
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold, rootMargin }
		);

		observer.observe(element);

		return () => {
			observer.disconnect();
		};
	});

	return {
		get isVisible() {
			return isVisible;
		},
		get animationClass() {
			return isVisible ? animationClass : '';
		}
	};
}

