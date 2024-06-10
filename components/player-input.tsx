import { View, TextInput } from 'react-native';
import { useState } from 'react';
import tw from '../scripts/tailwind';
import Player from '../scripts/player';

export default function PlayerInput(props: any) {
	// const [value, setValue] = useState(props.player);

	function onChangeText(text: string) {}

	return (
		<View style={tw`flex-row gap-4 h-10`}>
			<TextInput
				style={tw`bg-white rounded grow px-2`}
				onChangeText={(text) => {
					props.player = text;
				}}
				onSubmitEditing={(text) => {
					console.log(text);
				}}
				placeholder="Prénom Nom"
				value={props.player}
			/>
			{/* <Pressable
				onPress={() => {
					let array = [...players]
					array.splice(index, 1);
					console.log(players, array);
					setPlayers(array);
				}}
				style={tw`flex-col bg-white justify-center rounded px-2`}
			>
				<Text style={tw`text-white text-center`}>❌</Text>
			</Pressable> */}
		</View>
	);
}
