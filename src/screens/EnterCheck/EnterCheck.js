import React, {useState, useContext} from "react";
import {GlobalContext} from "../../store/store";
import {View} from "react-native";
import {setCheckAmount} from "../../actions/actions";
import styled from "styled-components/native";
import HeaderText from "../../components/HeaderText/HeaderText";
import Button from "../../components/Button/Button";
import TextInput from "../../components/TextInput/TextInput";

const EnterCheck = ({navigation}) => {
    const [state, dispatch] = useContext(GlobalContext);
    const [inputText, setInputText] = useState("");
    
    const handlePlayButtonTap = async () => {
        await dispatch(setCheckAmount(inputText));
        await navigation.navigate("Players List");
    };

    return (
        <EnterCheckScreenContainer>
            <HeaderText>Enter Check</HeaderText>
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
    background-color : #00ae6b;
`;


export default EnterCheck;