import React from "react";
import { Text, TouchableWithoutFeedback } from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components/native";

const Player = ({playerName, removePlayer}) => {
    return (
        <TouchableWithoutFeedback onPress={() => removePlayer(playerName)}>
            <PlayerName>{playerName}</PlayerName>
        </TouchableWithoutFeedback>
        )
};

const PlayerName = styled(Text)`
    font-family : Merriweather-Bold;
    font-size : 20px;
    margin : 6px;
`;

Player.propTypes = {
    playerName : PropTypes.string.isRequired,
    removePlayer : PropTypes.func.isRequired,
};

export default Player;