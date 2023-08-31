import fs from "fs";

export abstract class CsvFileReader<T> {
	//Generic allows you to pass a type when creating the class
	// T is a generic commonly used to denote "Generic" type
	data: T[] = [];

	constructor(public filename: string) {}
	abstract mapRow(row: string[]): T;
	read(): void {
		this.data = fs
			.readFileSync(`${this.filename}`, {
				encoding: "utf-8",
			})
			.split("\n")
			.map((row: string): string[] => {
				return row.split(",");
			})
			.map(this.mapRow);
	}
}
