//tsc -w makes it so you don't have to rerun tsc to make your output file
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numCollection = new NumbersCollection([10, 3, -5, 0]);
const charCollection = new CharactersCollection("Xaayb");
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

numCollection.sort();
charCollection.sort();
linkedList.sort();

console.log(numCollection.data);
console.log(charCollection.data);
linkedList.print();

// class Sorter {
// 	collection: number[] | string;
// 	constructor(collection: number[] | string) {
// 		this.collection = collection;
// 	}

// 	sort(): void {
// 		const { length } = this.collection;

// 		for (let i = 0; i < length; i++) {
// 			for (let j = 0; j < length - i - 1; j++) {
// 				// All of this only works if collection is number[]
// 				// If collection is an array of numbers
// 				//Type guard
// 				if (this.collection instanceof Array) {
// 					if (this.collection[j] > this.collection[j + 1]) {
// 						const leftHand = this.collection[j];
// 						this.collection[j] = this.collection[j + 1];
// 						this.collection[j + 1] = leftHand;
// 					}
// 				}

// 				//Only going to work if collection is a string
// 				// If collection is a string, do this logic instead:
// 				//Type guard
// 				if (typeof this.collection === "string") {
// 				}
// 			}
// 		}
// 	}
// }
