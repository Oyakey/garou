import { createContext } from 'react';

export const gameContext = createContext({
	state: 'create-room',
});

var global: any = {
	test: 2,
	setTest(value: any) {
		this.test = value;
	},
};

export default global;
