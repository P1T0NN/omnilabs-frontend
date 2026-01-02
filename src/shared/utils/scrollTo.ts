// SVELTEKIT IMPORTS
import { browser } from '$app/environment';

export function scrollTo(id: string) {
	if (!browser) return;
	const el = document.getElementById(id);
	if (el) el.scrollIntoView({ behavior: 'smooth' });
}

