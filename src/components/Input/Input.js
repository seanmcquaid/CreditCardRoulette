import React from "react";
import styled from "styled-components/native";
import { TextInput, Alert, View } from "react-native";
import PropTypes from "prop-types";

const Input = ({onChange, placeholder, value}) => (
    <InputContainer>
        <InputText 
            testID={`${placeholder}-textInput`}
            onChange={onChange} 
            placeholder={placeholder} 
            value={value}
        />
    </InputContainer>
);

const InputContainer = styled(View)`
    margin : 10px;
`;


const InputText = styled(TextInput)`
    border : 2px solid black;
    padding : 10px;
    width : 180px;
    background-color : white;
`;

Input.propTypes = {
    onChange : PropTypes.func.isRequired,
    placeholder : PropTypes.string.isRequired,
    value : PropTypes.string.isRequired,
};

Input.defaultProps = {
    onChange : () => Alert.alert("Add an onChange prop!"),
    placeholder : "Placeholder prop here",
    value : "Add value prop"
};

export default Input;