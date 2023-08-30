export abstract class Sorter {
	// Abstract allows you to implement these later when you extend into a child class
	abstract compare(leftIndex: number, rightIndex: number): boolean;
	abstract swap(leftIndex: number, rightIndex: number): void;
	abstract length: number;

	sort(): void {
		const { length } = this;

		for (let i = 0; i < length; i++) {
			for (let j = 0; j < length - i - 1; j++) {
				if (this.compare(j, j + 1)) {
					this.swap(j, j + 1);
				}
			}
		}
	}
}
