import React from "react";
import { View, Text, Button } from "react-native";
import PropTypes from "prop-types";

const Player = ({playerName, removePlayer}) => {
    return (
        <View>
            <Text>{playerName}</Text>
            <Button title="Delete" onPress={playerName => removePlayer(playerName)}/>
        </View>
        )
};

Player.propTypes = {
    playerName : PropTypes.string.isRequired,
    removePlayer : PropTypes.func.isRequired,
};

export default Player;