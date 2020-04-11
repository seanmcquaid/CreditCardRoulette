import React, { useContext, useState } from "react";
import {GlobalContext} from "../../store/store";
import {View, FlatList, Alert} from "react-native";
import {addPlayer, deletePlayer} from "../../actions/actions";
import Player from "../../components/Player/Player";
import HeaderText from "../../components/HeaderText/HeaderText";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import ParagraphText from "../../components/ParagraphText/ParagraphText";
import styled from "styled-components/native";

const PlayersList = ({navigation}) => {
    const [state, dispatch] = useContext(GlobalContext);
    const [playerName, setPlayerName] = useState("");
    const {playerNames, checkAmount} = state;
    const splitBillAmount = checkAmount / (playerNames.length === 0 ? 1 : playerNames.length);

    const addPlayerToListOnPressHandler = async () => {
        if(playerName.length === 0){
            Alert.alert("Please enter more than one character for the player's name!");
        }else{
            await dispatch(addPlayer(playerName));
            setPlayerName("");
        }
    };

    const removePlayerFromListOnPressHandler = async selectedPlayerName => {
        await dispatch(deletePlayer(selectedPlayerName));
    };

    const handlePlayButtonOnPressHandler = async () => {
        await navigation.navigate("Roulette");
    };

    return (
        <PlayersListScreenContainer>
            <HeaderText style={{"marginTop" : 100}}>Players List</HeaderText>
            <ParagraphText>If you were to split the bill, it would be {splitBillAmount} per person!</ParagraphText>
            <ParagraphText>But why would you do that when you could make one sap pay for it all!?</ParagraphText>
            <FlatList
                data={playerNames}
                renderItem={({item, index}) => (
                    <Player 
                        playerName={item} 
                        removePlayer={removePlayerFromListOnPressHandler}
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
            <Input
                testID="playerNameInput"
                placeholder="Enter Player Here" 
                value={playerName} 
                onChangeText={playerName => setPlayerName(playerName)} 
            />
            <Button testID="addPlayerButton" title="Add Player" onPress={playerName => addPlayerToListOnPressHandler(playerName)}/>
            <Button testId="playButton" title="Play" onPress={() => handlePlayButtonOnPressHandler()}/>
        </PlayersListScreenContainer>
    );
};

const PlayersListScreenContainer = styled(View)`
    flex : 1;
    justify-content : center;
    align-items : center;
    background-color : #00ae6b;
`;

const PlayersListContainer = styled(View)`
`;

export default PlayersList;