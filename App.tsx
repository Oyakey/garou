import { StatusBar } from 'expo-status-bar';
import { Alert, Pressable, Text, View, TextInput } from 'react-native';
import { useState } from 'react';
import tw from './scripts/tailwind';
import Player from './scripts/player';
import PlayerForm from './components/PlayerForm';
import RoleSelector from './components/RoleSelector';
import { GameState } from '@scripts/gameState';

export default function App() {
	const [gameState, setGameState] = useState(GameState.PlayerSelection);
	const [players, setPlayers] = useState([{ name: '' }]);
	const [roles, setRoles] = useState([]);

	return (
		<View style={tw`flex-1 bg-garou-cream py-24 px-5`}>
			<Text
				style={tw`text-garou-darkBlue text-center font-bold text-xl mb-8`}
			>
				Latelier des loups-garous
			</Text>
			{gameState === GameState.PlayerSelection ? (
				<PlayerForm
					setGameState={setGameState}
					players={players}
					setPlayers={setPlayers}
				/>
			) : gameState === GameState.RoleSelection ? (
				<RoleSelector setgameState={setGameState} players={players} />
			) : gameState === GameState.RoleAttribution ? (
				<RoleSelector setgameState={setGameState} />
			) : (
				<RoleSelector setgameState={setGameState} />
			)}
			<StatusBar style="auto" />
		</View>
	);
}
