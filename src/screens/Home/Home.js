import React from "react";
import {View, Text} from "react-native";
import styled from "styled-components/native";
import HeaderText from "../../components/HeaderText/HeaderText";
import Button from "../../components/Button/Button";

const Home = ({navigation}) => (
    <HomeScreenContainer>
        <HeaderText>
            <FirstTitleWord>Credit </FirstTitleWord>
            <SecondTitleWord>Card </SecondTitleWord>
            <ThirdTitleWord>Roulette</ThirdTitleWord>
        </HeaderText>
        <Button title="Play" onPress={() => navigation.navigate("Enter Check")}/>
    </HomeScreenContainer>
);

const HomeScreenContainer = styled(View)`
    flex : 1;
    justify-content : center;
    align-items : center;
    background-color : #00ae6b;
`;

const FirstTitleWord = styled(Text)`
    color : #000;
`;

const SecondTitleWord = styled(Text)`
    color : #C5B358;
`;

const ThirdTitleWord = styled(Text)`
    color : #B22222;
`;


export default Home;