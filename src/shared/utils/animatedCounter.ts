export class AnimatedCounter {
	private currentValue: number;
	private isAnimating: boolean = false;
	private targetValue: number;
	private duration: number;
	private startValue: number;
	private formatFn: (value: number) => string;
	private onUpdate?: (value: number) => void;

	constructor(
		targetValue: number,
		options: {
			duration?: number;
			startValue?: number;
			format?: (value: number) => string;
			onUpdate?: (value: number) => void;
		} = {}
	) {
		this.targetValue = targetValue;
		this.duration = options.duration ?? 2000;
		this.startValue = options.startValue ?? 0;
		this.currentValue = this.startValue;
		this.formatFn = options.format ?? ((val) => {
			if (val >= 1000) {
				return `$${Math.round(val).toLocaleString()}`;
			}
			return Math.round(val).toString();
		});
		this.onUpdate = options.onUpdate;
	}

	get value(): number {
		return this.currentValue;
	}

	get formatted(): string {
		return this.formatFn(this.currentValue);
	}

	format(value: number): string {
		return this.formatFn(value);
	}

	animate() {
		if (typeof window === 'undefined' || this.isAnimating) return;
		this.isAnimating = true;

		const startTime = performance.now();
		const start = this.startValue;
		const end = this.targetValue;

		const update = (currentTime: number) => {
			const elapsed = currentTime - startTime;
			const progress = Math.min(elapsed / this.duration, 1);

			// Easing function (ease-out)
			const easeOut = 1 - Math.pow(1 - progress, 3);
			this.currentValue = start + (end - start) * easeOut;

			if (this.onUpdate) {
				this.onUpdate(this.currentValue);
			}

			if (progress < 1) {
				requestAnimationFrame(update);
			} else {
				this.currentValue = end;
				this.isAnimating = false;
				if (this.onUpdate) {
					this.onUpdate(this.currentValue);
				}
			}
		};

		requestAnimationFrame(update);
	}
}

