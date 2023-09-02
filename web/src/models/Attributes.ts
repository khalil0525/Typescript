import { UserProps } from "./User";

export class Attributes<T extends object> {
	constructor(private data: T) {}
	// get <Restraint>(variable: Type): Return type
	// K can only be a keyof T.     Return a K of T
	get = <K extends keyof T>(key: K): T[K] => {
		return this.data[key];
	};
	set(update: T): void {
		Object.assign(this.data, update);
	}

	getAll(): T {
		return this.data;
	}
}

const attrs = new Attributes<UserProps>({
	id: 5,
	age: 20,
	name: "asdf",
});
const age = attrs.get("age");
