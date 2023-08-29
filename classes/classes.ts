class Vehicle {
	constructor(public color: string) {}
	drive(): void {
		console.log("chugga chugga");
	}
	private honk(): void {
		console.log("beep");
	}
}

const vehicle = new Vehicle("Orange");
console.log(vehicle.color);
class Car extends Vehicle {
	constructor(public wheels: number, color: string) {
		super(color);
	}
	drive(): void {
		console.log("vroom");
	}
	startDrivingProcess(): void {
		this.drive();
		// this.honk();
	}
}
// const car = new Car();

// car.drive();
// car.honk();
