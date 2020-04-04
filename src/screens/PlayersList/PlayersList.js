import React, { useContext, useState } from "react";
import {GlobalContext} from "../../store/store";
import {View, FlatList} from "react-native";
import {addPlayer, deletePlayer} from "../../actions/actions";
import Player from "../../components/Player/Player";
import HeaderText from "../../components/HeaderText/HeaderText";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";
import ParagraphText from "../../components/ParagraphText/ParagraphText";
import styled from "styled-components/native";

const PlayersList = ({navigation}) => {
    const [state, dispatch] = useContext(GlobalContext);
    const [playerName, setPlayerName] = useState("");
    const {playerNames, checkAmount} = state;
    const splitBillAmount = checkAmount / (playerNames.length === 0 ? 1 : playerNames.length);

    const addPlayerToList = async () => {
        await dispatch(addPlayer(playerName));
        setPlayerName("");
    };

    const removePlayerFromList = async selectedPlayerName => {
        await dispatch(deletePlayer(selectedPlayerName));
    };

    const handlePlayButtonClick = async () => {
        await navigation.navigate("Roulette");
    };

    return (
        <PlayersListScreenContainer>
            <HeaderText>Players List</HeaderText>
            <ParagraphText>If you were to split the bill, it would be {splitBillAmount} per person!</ParagraphText>
            <ParagraphText>But why would you do that when you could make one sap pay for it all!?</ParagraphText>
            <FlatList
                data={playerNames}
                renderItem={({item, index}) => (
                    <Player 
                        playerName={item} 
                        removePlayer={removePlayerFromList} 
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
            <TextInput
                placeholder="Enter Player Here" 
                value={playerName} 
                onChangeText={playerName => setPlayerName(playerName)} 
            />
            <Button title="Add Player" onPress={playerName => addPlayerToList(playerName)}/>
            <Button title="Play" onPress={() => handlePlayButtonClick()}/>
        </PlayersListScreenContainer>
    );
};

const PlayersListScreenContainer = styled(View)`
    flex : 1;
    justify-content : center;
    align-items : center;
    background-color : #00ae6b;
`;

export default PlayersList;