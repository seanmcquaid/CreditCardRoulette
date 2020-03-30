import React from "react";
import { View, Text, Button } from "react-native";
import PropTypes from "prop-types";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Player = ({playerName, removePlayer}) => {
    return (
        <TouchableWithoutFeedback onPress={() => removePlayer(playerName)}>
            <Text>{playerName}</Text>
        </TouchableWithoutFeedback>
        )
};

Player.propTypes = {
    playerName : PropTypes.string.isRequired,
    removePlayer : PropTypes.func.isRequired,
};

export default Player;