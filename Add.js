import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { datasource } from './Data.js'; // Importing the data source
import { useNavigation } from '@react-navigation/native'; // For navigation

const Add = () => {
    // States
    const [letter, setLetter] = useState('');
    const [letterType, setLetterType] = useState('Vowels');
    const navigation = useNavigation(); // Get navigation object

    // Submit Handler
    const handleSubmit = () => {
        if (!letter) {
            Alert.alert('Error', 'Please enter a letter.');
            return;
        }

        const item = { key: letter }; // Item to be added
        let indexNum = letterType === 'Vowels' ? 0 : 1; // Determine if it's a vowel or consonant

        // Safely update the data source
        if (datasource[indexNum]) {
            datasource[indexNum].data.push(item);
            Alert.alert('Success', `Letter '${letter}' added to ${letterType}!`);
        } else {
            Alert.alert('Error', `Invalid letter type: ${letterType}`);
        }

        // Navigate back to "Home" screen
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            {/* Letter Input */}
            <Text style={styles.label}>Letter:</Text>
            <TextInput
                style={styles.input}
                maxLength={1} // Max length of 1
                placeholder="Enter a letter"
                value={letter}
                onChangeText={(text) => setLetter(text)}
            />

            {/* Picker Select for Letter Type */}
            <Text style={styles.label}>Type:</Text>
            <RNPickerSelect
                onValueChange={(value) => setLetterType(value)}
                items={[
                    { label: 'Vowels', value: 'Vowels' },
                    { label: 'Consonants', value: 'Consonants' },
                ]}
                value={letterType}
                style={{
                    inputIOS: styles.picker,
                    inputAndroid: styles.picker,
                }}
                placeholder={{}} // No default placeholder
            />

            {/* Submit Button */}
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

export default Add;

// Styles
const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f8f9fa',
        flex: 1,
        justifyContent: 'center',
    },
    label: {
        fontSize: 16,
        marginBottom: 10,
        color: '#333',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        fontSize: 16,
    },
    picker: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
        marginBottom: 20,
    },
});

// import React,{useState} from 'react';
// import {datasource} from './Data.js';
// import { StatusBar, View, Button, Text, TextInput } from 'react-native';
// import RNPickerSelect from 'react-native-picker-select';
//
// const Add = ({navigation}) => {
//     const[letter,setLetter] = useState("");
//     const[type,setType] = useState("Vowels");
//
//     return (
//         <View>
//             <Text>Add Letter:</Text>
//             <TextInput
//                 placeholder="Enter a letter"
//                 maxLength={1} style={{borderWidth:1}}
//                 onChangeText={(text)=>setLetter(text)}/>
//             <RNPickerSelect
//                 itemKey={type}
//                 onValueChange={(value)=>setType(value)}
//                 items={[
//                     {label:"Vowels", value:"Vowels", key:"Vowels"},
//                     {label:"Consonants", value:"Consonants", key:"Consonants"}
//                 ]}
//             />
//             <Button title='Submit'
//                     onPress={()=>{
//                         let item = {key:letter};
//                         let indexnum = 1;
//                         if(type=="Vowels") {
//                             indexnum = 0;
//                         }
//                         datasource[indexnum].data.push(item);
//                         navigation.navigate("Home")
//                     }
//                     }
//             />
//         </View>
//     );
// }
//
// export default Add;
