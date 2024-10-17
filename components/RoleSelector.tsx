import { View, Text, Button, Pressable } from 'react-native';
import { GameState } from '@scripts/gameState';
import { roles, Role, getRecommandedRoles } from '@scripts/roles';
import {
	Dispatch,
	SetStateAction,
	useContext,
	useEffect,
	useState,
} from 'react';
import tw from '@scripts/tailwind';

interface RoleSelectorProps {
	setgameState: Dispatch<SetStateAction<GameState>>;
	players: unknown[];
}

export default function RoleSelector({
	setgameState,
	players,
}: RoleSelectorProps) {
	const [selectedRoles, setSelectedRoles] = useState<Role[]>([]);

	useEffect(() => {
		setSelectedRoles(getRecommandedRoles(players.length));
	}, [players]);

	function handleSubmit() {
		setgameState(GameState.ROLE_ATTRIBUTION);
	}

	function handleBack() {
		setgameState(GameState.PLAYER_SELECTION);
		setSelectedRoles([]);
	}

	function addRole() {}

	return (
		<View style={tw`gap-4`}>
			{roles.map((role, index) => (
				<View key={index} style={tw`flex flex-row gap-2 items-center`}>
					<Text style={tw`grow`}>{new role().name}</Text>
					<Pressable
						style={tw`bg-red-500 h-8 w-8 rounded items-center justify-center`}
						onPress={() => {
							if (selectedRoles.length > 0) {
								const newSelectedRoles = [...selectedRoles];
								const index = newSelectedRoles.findIndex(
									(selectedRole) => {
										return (
											selectedRole.name ===
											new role().name
										);
									}
								);
								if (index < 0) {
									return;
								}
								newSelectedRoles.splice(index, 1);
								setSelectedRoles(newSelectedRoles);
							}
						}}
					>
						<Text style={tw`text-white`}>-</Text>
					</Pressable>
					<Text>
						{
							selectedRoles.filter(
								(selectedRole) =>
									selectedRole.name === new role().name
							).length
						}
					</Text>
					<Pressable
						style={tw`bg-red-500 h-8 w-8 rounded items-center justify-center`}
						onPress={() => {
							if (selectedRoles.length < players.length) {
								setSelectedRoles(
									selectedRoles.concat(new role())
								);
							}
						}}
					>
						<Text style={tw`text-white select-none`}>+</Text>
					</Pressable>
				</View>
			))}
			<Button onPress={handleSubmit} title="Continuer" />
			<Pressable style={tw`underline text-center`} onPress={handleBack}>
				<Text>Revenir à la selection des joueurs</Text>
			</Pressable>
		</View>
	);
}
