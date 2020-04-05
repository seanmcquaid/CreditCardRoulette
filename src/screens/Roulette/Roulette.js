import React, {useContext, useState} from "react";
import {View} from "react-native";
import styled from "styled-components/native";
import { GlobalContext } from "../../store/store";
import HeaderText from "../../components/HeaderText/HeaderText";
import ParagraphText from "../../components/ParagraphText/ParagraphText";
import Button from "../../components/Button/Button";
import {playAgain} from "../../actions/actions";

const Roulette = ({navigation}) => {
    const [state, dispatch] = useContext(GlobalContext);
    const [winner, setWinner] = useState("");
    const {playerNames} = state;

    const determineWinnerOnTapHandler = () => {
        setWinner(playerNames[Math.floor(Math.random() * playerNames.length)])
    };

    const playAgainOnTapHandler = async () => {
        await dispatch(playAgain())
        navigation.navigate("Home")
    };

    return (
        <RouletteScreenContainer>
            <HeaderText>Roulette</HeaderText>
            <ParagraphText>
                {winner.length > 0 ? `${winner} has won!` : "Press to see who won!"}
            </ParagraphText>
            <Button title="Play" onPress={determineWinnerOnTapHandler}/>
            <Button title="Play Again" onPress={playAgainOnTapHandler}/>
        </RouletteScreenContainer>
    );
};

const RouletteScreenContainer = styled(View)`
    flex : 1;
    justify-content : center;
    align-items : center;
    background-color : #00ae6b;
`;

export default Roulette;