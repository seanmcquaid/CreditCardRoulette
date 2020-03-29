import React, { useContext, useState } from "react";
import {GlobalContext} from "../../store/store";
import {View, Text, Button, FlatList, TextInput} from "react-native";
import {addPlayer, deletePlayer} from "../../actions/actions";
import Player from "../../components/Player/Player";
import styled from "styled-components/native";

const PlayersList = ({navigation}) => {
    const [state, dispatch] = useContext(GlobalContext);
    const [playerName, setPlayerName] = useState("");
    let {playerNames, splitBillAmount} = state;

    const addPlayerToList = async event => {
        await dispatch(addPlayer(playerName));
        setPlayerName("");
    };

    const removePlayerFromList = async selectedPlayerName => {
        console.log(selectedPlayerName)
        // await dispatch(deletePlayer(selectedPlayerName));
    };

    return (
        <PlayersListScreenContainer>
            <Text>Players List</Text>
            <Text>If you were to split the bill, it would be {splitBillAmount} per person</Text>
            <Text>But why would you do that when you could make one sap pay for it all!?</Text>
            <FlatList
                data={playerNames}
                renderItem={({item, index}) => <Player playerName={item} removePlayer={removePlayerFromList} key={index}/>}
                keyExtractor={(item, index) => index.toString()}
            />
            <TextInput
                placeholder="Enter Player Here" 
                value={playerName} 
                onChangeText={playerName => setPlayerName(playerName)} 
            />
            <Button title="Add Player" onPress={playerName => addPlayerToList(playerName)}/>
            <Button title="Play" onPress={() => navigation.push("Roulette")}/>
        </PlayersListScreenContainer>
    );
};

const PlayersListScreenContainer = styled(View)`
    flex : 1;
    justify-content : center;
    align-items : center;
`;

export default PlayersList;