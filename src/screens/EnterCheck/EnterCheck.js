import React, {useState, useContext} from "react";
import {GlobalContext} from "../../store/store";
import {View, Text, Button, TextInput} from "react-native";
import {setCheckAmount} from "../../actions/actions";
import styles from "./styles";


export default ({navigation}) => {
    const [state, dispatch] = useContext(GlobalContext);
    const [inputText, setInputText] = useState("");
    
    const handlePlayButtonTap = async () => {
        await dispatch(setCheckAmount(inputText));
        await navigation.push("Players List");
    };

    return (
    <View>
        <Text>Enter Check</Text>
        <TextInput 
            placeholder="Enter Amount Here" 
            value={inputText} 
            onChangeText={text => setInputText(text)}
        />
        <Button title="Play" onPress={() => handlePlayButtonTap()}/>
    </View>
    );
};