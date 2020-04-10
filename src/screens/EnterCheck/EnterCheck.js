import React, {useState, useContext} from "react";
import {GlobalContext} from "../../store/store";
import {View, Alert} from "react-native";
import {setCheckAmount} from "../../actions/actions";
import styled from "styled-components/native";
import HeaderText from "../../components/HeaderText/HeaderText";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

const EnterCheck = ({navigation}) => {
    const [state, dispatch] = useContext(GlobalContext);
    const [inputText, setInputText] = useState("");
    
    const handlePlayButtonOnTapHandler = async () => {
        const numberCheckRegex = new RegExp(/^[0-9]+$/);
        if(numberCheckRegex.test(inputText)){
            await dispatch(setCheckAmount(inputText));
            await navigation.navigate("Players List");
        }else{
            Alert.alert("Please enter only numbers!")
        }
    };

    return (
        <EnterCheckScreenContainer>
            <HeaderText>Enter Check</HeaderText>
            <Input  
                testID="textInput"
                placeholder="Enter Amount Here" 
                value={inputText} 
                onChangeText={text => setInputText(text)}
            />
            <Button testID="playButton" title="Play" onPress={() => handlePlayButtonOnTapHandler()}/>
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