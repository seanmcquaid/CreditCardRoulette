import React from "react";
import {View, Text, Button} from "react-native";
import styled from "styled-components/native";
import HeaderText from "../../components/HeaderText/HeaderText";

const Home = ({navigation}) => (
    <HomeScreenContainer>
        <HeaderText>Credit Card Roulette</HeaderText>
        <Button title="Play" onPress={() => navigation.push("Enter Check")}/>
    </HomeScreenContainer>
);

const HomeScreenContainer = styled(View)`
    flex : 1;
    justify-content : center;
    align-items : center;
`;


export default Home;