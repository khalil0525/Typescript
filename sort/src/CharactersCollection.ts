import { Sorter } from "./Sorter";
export class CharactersCollection extends Sorter {
	// Using public allows you to skip declaring variable and setting it in construtor
	constructor(public data: string) {
		super();
	}
	// can be used like NumberCollection.length
	get length(): number {
		return this.data.length;
	}

	compare(leftIndex: number, rightIndex: number): boolean {
		return (
			this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
		);
	}
	swap(leftIndex: number, rightIndex: number): void {
		const characters = this.data.split("");
		const leftHand = characters[leftIndex];

		characters[leftIndex] = characters[rightIndex];
		characters[rightIndex] = leftHand;
		this.data = characters.join("");
	}
}
