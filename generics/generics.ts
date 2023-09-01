class ArrayOfNumbers {
	constructor(public collection: number[]) {}
	get(index: number): number {
		return this.collection[index];
	}
}

class ArrayOfStrings {
	constructor(public collection: string[]) {}
	get(index: number): string {
		return this.collection[index];
	}
}

class ArrayOfAnything<T> {
	constructor(public collection: T[]) {}
	get(index: number): T {
		return this.collection[index];
	}
}
//type inference, we didn't specify the type but typescript can infer that T = string because the array has strings with type T
const arr = new ArrayOfAnything(["a", "b", "c"]);

function print<T>(arr: T[]): void {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

print(["a", "b", "c"]);

class Car {
	print() {
		console.log("I am a car");
	}
}
class House {
	print() {
		console.log("I am a house");
	}
}

interface Printable {
	print(): void;
}
// generic restrain "T extends Printable" means only objects that have a print method can used in this function.
function printHousesOrCar<T extends Printable>(arr: T[]): void {
	for (let i = 0; i < arr.length; i++) {
		arr[i].print();
	}
}
