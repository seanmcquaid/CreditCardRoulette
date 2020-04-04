import React from "react";
import styled from "styled-components/native";
import { Platform, TouchableHighlight, Text } from "react-native";

const Button = ({title, onPress}) => {
    return (
        <ButtonContainer underlayColor="#C5B358" onPress={onPress}>
            <ButtonText>{title}</ButtonText>
        </ButtonContainer>
    );
};

const ButtonContainer = styled(TouchableHighlight)`
    background-color: #C5B358;
    padding: 16px 30px;
    border-radius : 3px;
    justify-content : center;
    border : 2px solid #000;
    align-items : center;
    margin : 10px;
`;

const ButtonText = styled(Text)`
    font-family : Merriweather-Regular;
    font-size : 16px;
`;

export default Button;