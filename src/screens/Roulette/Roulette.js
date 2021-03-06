import React, {useContext, useState, useEffect} from "react";
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
    const [isLoadingWinner, setIsLoadingWinner] = useState(false);
    const {playerNames} = state;

    useEffect(() => {
        const timer = setTimeout(() => setIsLoadingWinner(false), 3000);
        return () => clearTimeout(timer);
    },[]);

    const determineWinnerOnPressHandler = () => {
        const winner = playerNames[Math.floor(Math.random() * playerNames.length)];
        setIsLoadingWinner(true);
        setWinner(winner);
    };

    const playAgainOnPressHandler = async () => {
        await dispatch(playAgain());
        navigation.navigate("Home");
    };

    return (
        <RouletteScreenContainer>
            <HeaderText>Roulette</HeaderText>
            <ParagraphText testID="gameResultText">
                {winner.length === 0 ? "Press to see who won!" : 
                isLoadingWinner ? "Waiting to see who won!!!" : `${winner} has won!`} 
            </ParagraphText>
            <Button testID="playButton" title="Play" onPress={determineWinnerOnPressHandler}/>
            <Button testID="playAgainButton" title="Play Again" onPress={playAgainOnPressHandler}/>
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