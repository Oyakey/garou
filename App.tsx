import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { useState } from 'react';
import tw from './scripts/tailwind';
import PlayerForm from './components/PlayerForm';
import RoleSelector from './components/RoleSelector';
import { GameState } from '@scripts/gameState';

export default function App() {
	const [gameState, setGameState] = useState(GameState.PLAYER_SELECTION);
	const [players, setPlayers] = useState([{ name: '' }]);

	let test: { name: string } | undefined = undefined;

	test = { name: 'jean' };

	return (
		<View style={tw`flex-1 bg-garou-cream py-24 px-5`}>
			<Text
				style={tw`text-garou-darkBlue text-center font-bold text-xl mb-8`}
			>
				Latelier des loups-garous
			</Text>
			{gameState === GameState.PLAYER_SELECTION ? (
				<PlayerForm
					setGameState={setGameState}
					players={players}
					setPlayers={setPlayers}
				/>
			) : gameState === GameState.ROLE_SELECTION ? (
				<RoleSelector setgameState={setGameState} players={players} />
			) : gameState === GameState.ROLE_ATTRIBUTION ? (
				<RoleSelector setgameState={setGameState} players={players} />
			) : (
				<RoleSelector setgameState={setGameState} players={players} />
			)}
			<StatusBar style="auto" />
		</View>
	);
}
