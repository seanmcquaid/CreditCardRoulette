import React, { useContext, useState } from "react";
import {GlobalContext} from "../../store/store";
import {View, Text, Button, FlatList} from "react-native";
import {addPlayer, deletePlayer} from "../../actions/actions";
import Player from "../../components/Player/Player";
import styles from "./styles";

export default ({navigation}) => {
    const [state, dispatch] = useContext(GlobalContext);
    const [playerName, setPlayerName] = useState("");
    
    const {checkAmount, playerNames} = state;
    const splitBillAmount = parseInt(checkAmount) / (playerNames.length > 0 ? playerNames.length : 1);

    const addPlayerToList = async playerName => {
        await dispatch(addPlayer(playerName));
        setPlayerName("");
    };

    const removePlayerFromList = async playerName => {
        await dispatch(deletePlayer(playerName));
        setPlayerName("");
    };

    return (
    <View>
        <Text>Players List</Text>
    <Text>If you were to split the bill, it would be {splitBillAmount} per person</Text>
        <Text>But why would you do that when you could make one sap pay for it all!?</Text>
        <FlatList
            data={playerNames}
            renderItem={playerName => <Player playerName={playerName} removePlayer={removePlayerFromList}/>}
        />
        <Button title="Play" onPress={() => navigation.push("Roulette")}/>
    </View>
    );
};