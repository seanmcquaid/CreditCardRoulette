import React, {useContext, useState} from "react";
import {View, Text, Button} from "react-native";
import styled from "styled-components/native";
import { GlobalContext } from "../../store/store";

const Roulette = ({navigation}) => {
    const [state, dispatch] = useContext(GlobalContext);
    const [winner, setWinner] = useState("");
    const {playerNames} = state;

    const determineWinner = () => {
        setWinner(playerNames[Math.floor(Math.random() * playerNames.length)])
    };

    return (
        <View>
            <Text>Roulette</Text>
            <Text>{winner} has won!</Text>
            <Button title="Play" onPress={determineWinner}/>
            <Button title="Play Again" onPress={navigation.navigate("Home")}/>
        </View>
    );
};

export default Roulette;