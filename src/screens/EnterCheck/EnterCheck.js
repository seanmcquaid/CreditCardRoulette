import React, {useState, useContext} from "react";
import {GlobalContext} from "../../store/store";
import {View, Text, Button, TextInput} from "react-native";
import {setCheckAmount} from "../../actions/actions";
import styled from "styled-components/native";

const EnterCheck = ({navigation}) => {
    const [state, dispatch] = useContext(GlobalContext);
    const [inputText, setInputText] = useState("");
    
    const handlePlayButtonTap = async () => {
        await dispatch(setCheckAmount(inputText));
        await navigation.push("Players List");
    };

    return (
        <EnterCheckScreenContainer>
            <Text>Enter Check</Text>
            <TextInput 
                placeholder="Enter Amount Here" 
                value={inputText} 
                onChangeText={text => setInputText(text)}
            />
            <Button title="Play" onPress={() => handlePlayButtonTap()}/>
        </EnterCheckScreenContainer>
    );
};

const EnterCheckScreenContainer = styled(View)`
    flex : 1;
    justify-content : center;
    align-items : center;
`;


export default EnterCheck;