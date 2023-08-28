const add = (a: number, b: number): number => {
	return a + b;
};

const subtract = (a: number, b: number): number => {
	return a - b;
};

function divide(a: number, b: number): number {
	return a / b;
}
const multiple = function (a: number, b: number): number {
	return a * b;
};
// funcName = (expected parameters): expected return type =>
const logger = (message: string): void => {
	console.log(message);
};
const throwError = (message: string): void => {
	if (!message) {
		throw new Error(message);
	}
};

const todaysWeather = {
	date: new Date(),
	weather: "sunny",
};

// functionName = ({destructure}): {expected paramaters}: expected return value =>

const logWeather = ({
	date,
	weather,
}: {
	date: Date;
	weather: string;
}): void => {
	console.log(date);
	console.log(weather);
};
// ES2015

logWeather(todaysWeather);
