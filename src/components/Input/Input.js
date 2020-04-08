import React from "react";
import styled from "styled-components/native";
import { TextInput, Alert } from "react-native";
import PropTypes from "prop-types";

const Input = ({onChange, placeholder, value}) => <StyledTextInput testID="textInput" onChange={onChange} placeholder={placeholder} value={value}/>


const StyledTextInput = styled(TextInput)`
    border : 2px solid black;
    padding : 10px;
    margin : 10px;
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

export default TextInput;