import React, {useContext, useState} from "react";
import {View} from "react-native";
import styled from "styled-components/native";
import { GlobalContext } from "../../store/store";
import HeaderText from "../../components/HeaderText/HeaderText";
import ParagraphText from "../../components/ParagraphText/ParagraphText";
import Button from "../../components/Button/Button";

const Roulette = ({navigation}) => {
    const [state, dispatch] = useContext(GlobalContext);
    const [winner, setWinner] = useState("");
    const {playerNames} = state;

    const determineWinner = () => {
        setWinner(playerNames[Math.floor(Math.random() * playerNames.length)])
    };

    return (
        <RouletteScreenContainer>
            <HeaderText>Roulette</HeaderText>
            <ParagraphText>
                {winner.length > 0 ? `${winner} has won!` : "Press to see who won!"}
            </ParagraphText>
            <Button title="Play" onPress={determineWinner}/>
            <Button title="Play Again" onPress={() => navigation.navigate("Home")}/>
        </RouletteScreenContainer>
    );
};

const RouletteScreenContainer = styled(View)`
    flex : 1;
    justify-content : center;
    align-items : center;
`;

export default Roulette;