import { View, Text, Button, Pressable } from 'react-native';
import { GameState } from '@scripts/gameState';
import { roles, Role } from '@scripts/roles';
import { useContext, useEffect, useState } from 'react';
import tw from '@scripts/tailwind';

export default function RoleSelector({ setgameState, players }: any) {
	const rolesTable: Role[] = [];

	const [selectedRoles, setSelectedRoles] = useState(rolesTable);

	function handleSubmit() {
		setgameState(GameState.RoleAttribution);
	}

	function addRole() {}

	return (
		<View style={tw`gap-4`}>
			{roles.map((role) => (
				<View
					key={role.id}
					style={tw`flex flex-row gap-2 items-center`}
				>
					<Text style={tw`grow`}>{role.name}</Text>
					<Pressable
						style={tw`bg-red-500 h-8 w-8 rounded items-center justify-center`}
						onPress={() => {
							if (selectedRoles.length > 0) {
								const newSelectedRoles = [...selectedRoles];
								const index = newSelectedRoles.findIndex(
									(selectedRole) => {
										console.log(selectedRole, role);
										return selectedRole.id === role.id;
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
								(selectedRole) => selectedRole.id === role.id
							).length
						}
					</Text>
					<Pressable
						style={tw`bg-red-500 h-8 w-8 rounded items-center justify-center`}
						onPress={() => {
							if (selectedRoles.length < players.length) {
								setSelectedRoles(selectedRoles.concat(role));
							}
						}}
					>
						<Text style={tw`text-white`}>+</Text>
					</Pressable>
				</View>
			))}
		</View>
	);
}
