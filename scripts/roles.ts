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
		console.log(typeof Role);
	}
}

export function getRecommandedRoles(playerCount: number) {
	console.log(playerCount);
	if (playerCount === 6) {
		return [
			new LoupGarou(),
			new LoupGarou(),
			new Voyante(),
			new Villageois(),
			new Villageois(),
			new Villageois(),
		];
	}

	return [];
}

class LoupGarou extends Role {
	constructor() {
		super('Loup-Garou', '', 'Méchant');
	}
}
class Voyante extends Role {
	constructor() {
		super('Voyante', '', 'Gentille');
	}
}
class Villageois extends Role {
	constructor() {
		super('Villageois', '', 'Gentil');
	}
}
class PetiteFille extends Role {
	constructor() {
		super('Petite-fille', '', 'Gentil');
	}
}
class Cupidon extends Role {
	constructor() {
		super('Cupidon', '', 'Gentil');
	}
}
class Chasseur extends Role {
	constructor() {
		super('Chasseur', '', 'Gentil');
	}
}

export const roles = [
	LoupGarou,
	Villageois,
	Chasseur,
	Voyante,
	PetiteFille,
	Cupidon,
];
