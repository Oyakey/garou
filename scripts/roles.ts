import uuid from 'react-native-uuid';

export class Role {
	id: string;
	name: string;
	image: string;
	description: string;
	constructor(name: string, image: string = '', description: string = '') {
		this.id = uuid.v4().toString();
		this.name = name;
		this.image = image;
		this.description = description;
	}
}

export const roles: Role[] = [
	new Role('Loup-Garou'),
	new Role('Villageois'),
	new Role('Petite-fille'),
	new Role('Voyante'),
	new Role('Chasseur'),
	new Role('Cupidon'),
];
