import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { Sync } from "./Sync";

export interface UserProps {
	id?: number;
	name?: string;
	age?: number;
}

type Callback = () => void;

export class User {
	public event: Eventing = new Eventing();
	public sync: Sync<UserProps> = new Sync<UserProps>(
		"http://localhost:3000/users"
	);
	public attributes: Attributes<UserProps>;
	constructor(attrs: UserProps) {
		this.attributes = new Attributes<UserProps>(attrs);
	}
}
