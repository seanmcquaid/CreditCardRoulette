import React from "react";
import { View, Text, Button } from "react-native";
import PropTypes from "prop-types";

const Player = ({playerName, removePlayer, key}) => {
    
    return (
    <Text key={key}>Player Here</Text>
)};

Player.propTypes = {
    playerName : PropTypes.string.isRequired,
    removePlayer : PropTypes.func.isRequired,
};

export default Player;