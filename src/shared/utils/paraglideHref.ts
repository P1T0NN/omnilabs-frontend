/** Paths that must stay global (no locale prefix): external URLs, APIs, etc. */
export function shouldSkipLocalePrefix(href: string): boolean {
	const h = href.trim();
	if (/^https?:\/\//i.test(h) || /^mailto:/i.test(h) || /^tel:/i.test(h)) return true;
	return (
		h.startsWith('/api') ||
		h.startsWith('/@') ||
		h.startsWith('/_') ||
		h.startsWith('//')
	);
}
