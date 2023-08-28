const carMakers = ["ford", "toyota", "chevy"];

// string [][] is how we create 2d arrays

// Help with inference when extracting values
const car2 = carMakers[0];
const myCar = carMakers.pop();

// Help with 'map'
carMakers.map((car: string): string => {
	return car.toUpperCase();
});

const importantDates: (Date | string)[] = [new Date()];
importantDates.push("2030-01-01");
importantDates.push(new Date());
