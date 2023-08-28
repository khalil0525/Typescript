interface Reportable {
	summary(): string;
}

interface Vehicle {
	name: string;
	year: Date;
	broken: boolean;
}

const oldCivic = {
	name: "civic",
	year: new Date(),
	broken: true,
	summary(): string {
		return `Name: ${this.name}`;
	},
};

const drink2 = {
	color: "brown",
	carbonated: true,
	sugar: 40,
	summary(): string {
		return `My drink has ${this.sugar} grams of sugar `;
	},
};

const printSummary = (item: Reportable) => {
	console.log(item.summary());
};
printSummary(oldCivic);
printSummary(drink2);
