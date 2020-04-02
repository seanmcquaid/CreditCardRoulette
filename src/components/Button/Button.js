import React from "react";
import styled from "styled-components/native";
import { View, Platform, TouchableHighlight, Text } from "react-native";

const Button = ({title, onPress}) => {
    return (
        <ButtonContainer activeOpacity={0.6} underlay="#DDDDDD" onPress={onPress}>
            <ButtonText>{title}</ButtonText>
        </ButtonContainer>
    )
};

const ButtonContainer = styled(TouchableHighlight)`
    backgroundColor: red;
    padding: 16px 30px;
    border-radius : 3px;
    justify-content : center;
    align-items : center;
    margin : 10px;
`;

const ButtonText = styled(Text)`
    font-family : Merriweather-Regular;
    font-size : 16px;
`;

export default Button;