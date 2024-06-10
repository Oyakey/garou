import { configureStore, createSlice } from '@reduxjs/toolkit';
import Player from '@scripts/player';

const playersSlice = createSlice({
	name: 'players',
	initialState: [],
	reducers: {
		addPlayer: (state, action) => {
			state.push(action.payload);
		},
		removePlayer: (state, action) => {
			const index = state.findIndex(
				(player) => player.id === action.payload
			);
			if (index !== -1) {
				state.splice(index, 1);
			}
		},
		updatePlayer: (state, action) => {
			const index = state.findIndex(
				(player) => player.id === action.payload.id
			);
			if (index !== -1) {
				state[index] = action.payload;
			}
		},
	},
});

const store = configureStore({
	reducer: {
		players: playersSlice.reducer,
	},
});

export const { addPlayer, removePlayer, updatePlayer } = playersSlice.actions;

export default store;
