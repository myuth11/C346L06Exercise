import React, { useState } from 'react';
import { datasource } from './Data.js';
import { View, Button, Text, TextInput, Alert } from 'react-native';

const Edit = ({ navigation, route }) => {
    const [letter, setLetter] = useState(route.params.key);

    const handleSave = () => {
        let indexnum = route.params.type === 'Vowels' ? 0 : 1;
        datasource[indexnum].data[route.params.index].key = letter; // Update the letter
        navigation.navigate('Home'); // Go back to Home
    };

    const handleDelete = () => {
        Alert.alert(
            "Are you sure?",
            "This will delete the letter permanently.",
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: "OK",
                    onPress: () => {
                        let indexnum = route.params.type === 'Vowels' ? 0 : 1;
                        datasource[indexnum].data.splice(route.params.index, 1); // Remove the letter
                        navigation.navigate('Home'); // Go back to Home
                    },
                },
            ]
        );
    };

    return (
        <View>
            <Text>Letter:</Text>
            <TextInput
                value={letter}
                maxLength={1}
                style={{ borderWidth: 1 }}
                onChangeText={(text) => setLetter(text)}
            />
            <View style={{ flexDirection: "row" }}>
                <View style={{ margin: 10, flex: 1 }}>
                    <Button title="Save" onPress={handleSave} />
                </View>
                <View style={{ margin: 10, flex: 1 }}>
                    <Button title="Delete" onPress={handleDelete} />
                </View>
            </View>
        </View>
    );
};

export default Edit;
