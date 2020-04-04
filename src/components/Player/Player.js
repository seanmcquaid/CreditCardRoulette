import React from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import {FontAwesome} from "@expo/vector-icons";

const Player = ({playerName, removePlayer}) => {
    return (
        <PlayerContainer>
            <PlayerName>{playerName}</PlayerName>
            <TouchableWithoutFeedback onPress={() => removePlayer(playerName)}>
                <IconContainer>
                        <FontAwesome name="trash-o" size={20} color="#B22222"/>
                </IconContainer>
            </TouchableWithoutFeedback>
        </PlayerContainer>
        )
};

const PlayerContainer = styled(View)`
    border : 2px solid #000;
    flex-direction : row;
    justify-content : space-between;
    align-items : center;
    width : 200px;
`;

const PlayerName = styled(Text)`
    font-family : Merriweather-Bold;
    font-size : 20px;
    margin : 10px;
`;

const IconContainer = styled(View)`
    margin : 10px;
`;

Player.propTypes = {
    playerName : PropTypes.string.isRequired,
    removePlayer : PropTypes.func.isRequired,
};

export default Player;