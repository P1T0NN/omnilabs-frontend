interface UseIntersectionObserverOptions {
	threshold?: number;
};

/**
 * Observes an element and calls onIntersecting when it enters the viewport.
 * Returns a cleanup function to unobserve.
 */
export function useIntersectionObserver(
	element: HTMLElement | null | undefined,
	onIntersecting: () => void,
	options: UseIntersectionObserverOptions = {}
): () => void {
	if (!element) return () => {};

	const { threshold = 0.1 } = options;

	const observer = new IntersectionObserver(
		([entry]) => {
			if (entry?.isIntersecting) onIntersecting();
		},
		{ threshold }
	);

	observer.observe(element);
	
	return () => observer.unobserve(element);
}
