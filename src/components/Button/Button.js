import React from "react";
import styled from "styled-components/native";
import { TouchableHighlight, Text, Alert } from "react-native";
import PropTypes from "prop-types";

const Button = ({title, onPress}) => {
    return (
        <ButtonContainer underlayColor="#C5B358" onPress={onPress} testID="button">
            <ButtonText testID="buttonTitle">{title}</ButtonText>
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
    margin : 16px;
`;

const ButtonText = styled(Text)`
    font-family : Merriweather-Regular;
    font-size : 16px;
`;

Button.propTypes = {
    title : PropTypes.string.isRequired,
    onPress : PropTypes.func.isRequired,
};

Button.defaultProps = {
    title : "Put a Title Props Here",
    onPress : () => Alert.alert("Add an on click!")
};

export default Button;