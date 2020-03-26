import React from "react";
import { View, Text, Button } from "react-native";
import PropTypes from "prop-types";

const Player = ({playerName, removePlayer}) => (
    <View>
        <Text>{playerName}</Text>
        <Button title="Delete Player" onPress={() => removePlayer(playerName)}/>
    </View>
);

Player.PropTypes = {
    playerName : PropTypes.string.isRequired,
    removePlayer : PropTypes.func.isRequired,
};

export default Player;