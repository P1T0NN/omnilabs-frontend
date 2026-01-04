// SVELTEKIT IMPORTS
import { browser } from '$app/environment';

// CONFIG
import { STORAGE_SESSION_KEYS } from '@/shared/config';

const SCROLL_THRESHOLD = 500; // Show popup after scrolling 500px

class FreeAuditPopupManager {
	showPopup = $state(false);
	private scrollHandler: (() => void) | null = null;

	getScrollHandler() {
		if (!browser) return null;

		if (!this.scrollHandler) {
			this.scrollHandler = () => {
				const hasShownPopup = sessionStorage.getItem(STORAGE_SESSION_KEYS.FREE_AUDIT_POPUP) === 'true';
				const scrollY = window.scrollY;

				if (!hasShownPopup && scrollY >= SCROLL_THRESHOLD) {
					this.showPopup = true;
					sessionStorage.setItem(STORAGE_SESSION_KEYS.FREE_AUDIT_POPUP, 'true');
					// Remove listener after showing once
					if (this.scrollHandler) {
						window.removeEventListener('scroll', this.scrollHandler);
						this.scrollHandler = null;
					}
				}
			};
		}

		return this.scrollHandler;
	}
}

export const freeAuditPopupManager = new FreeAuditPopupManager();