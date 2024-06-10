import React, { useState } from 'react';
import { View, Text, TextInput, Button, Pressable } from 'react-native';
import tw from 'twrnc';
import { GameState } from '@scripts/gameState';

export default function PlayerForm({ setGameState, players, setPlayers }) {
	const addPlayer = () => {
		setPlayers([...players, { name: '' }]);
	};

	const removePlayer = (key) => {
		setPlayers(players.filter((player, index) => index !== key));
	};

	const handleNameChange = (text, index) => {
		const newPlayers = [...players];
		newPlayers[index].name = text;
		setPlayers(newPlayers);
	};

	const handleSubmit = () => {
		const playerNames = players.map((player) => player.name);
		setGameState(GameState.RoleSelection);
	};

	return (
		<View style={tw`gap-4`}>
			{players.map((player, index) => (
				<View style={tw`flex flex-row gap-4 items-center`}>
					<TextInput
						key={index}
						value={player.name}
						onChangeText={(text) => handleNameChange(text, index)}
						placeholder={`Joueur ${index + 1}`}
						style={tw`bg-white rounded grow h-8 px-2`}
					/>
					<Pressable
						onPress={() => {
							removePlayer(index);
						}}
					>
						<Text>❌</Text>
					</Pressable>
				</View>
			))}
			<Button
				style={tw`mb-8`}
				title="Ajouter un joueur"
				onPress={addPlayer}
			/>
			<Button title="Valider" onPress={handleSubmit} />
		</View>
	);
}
