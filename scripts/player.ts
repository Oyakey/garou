import { Role } from '../scripts/roles';

export default class Player {
	public name: string;
	public role: Role | null;
	constructor(name: string = '', role: Role | null = null) {
		this.name = name;
		this.role = role;
	}
}
