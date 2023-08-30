import { Sorter } from "./Sorter";
export class NumbersCollection extends Sorter {
	// Using public allows you to skip declaring variable and setting it in construtor
	constructor(public data: number[]) {
		super();
	}
	// can be used like NumberCollection.length

	get length(): number {
		return this.data.length;
	}
	compare(leftIndex: number, rightIndex: number): boolean {
		return this.data[leftIndex] > this.data[rightIndex];
	}
	swap(leftIndex: number, rightIndex: number): void {
		const leftHand = this.data[leftIndex];
		this.data[leftIndex] = this.data[rightIndex];
		this.data[rightIndex] = leftHand;
	}
}
