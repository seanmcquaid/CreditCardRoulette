import React, { useContext, useState } from "react";
import {GlobalContext} from "../../store/store";
import {View, Text, Button, FlatList, TextInput} from "react-native";
import {addPlayer, deletePlayer} from "../../actions/actions";
import Player from "../../components/Player/Player";
import styled from "styled-components/native";

const PlayersList = ({navigation}) => {
    const [state, dispatch] = useContext(GlobalContext);
    const [playerName, setPlayerName] = useState("");

    

    const addPlayerToList = async event => {
        event.preventDefault();
        await dispatch(addPlayer(playerName));
        setPlayerName("");
    };

    const removePlayerFromList = async event => {
        await dispatch(deletePlayer(playerName));
        setPlayerName("");
    };

    return (
        <PlayersListScreenContainer>
            <Text>Players List</Text>
            <Text>If you were to split the bill, it would be {state.splitBillAmount} per person</Text>
            <Text>But why would you do that when you could make one sap pay for it all!?</Text>
            <FlatList
                data={state.playerNames}
                renderItem={(item) => { 
                    console.log(item.item);
                    return <Player playerName={item.item} removePlayer={removePlayerFromList} key={item.index}/>
                }
            }
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