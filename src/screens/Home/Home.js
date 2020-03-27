import React from "react";
import {View, Text, Button} from "react-native";
import styled from "styled-components/native";

const Home = ({navigation}) => (
    <HomeScreenContainer>
        <Text>Credit Card Roulette</Text>
        <Button title="Play" onPress={() => navigation.push("Enter Check")}/>
    </HomeScreenContainer>
);

const HomeScreenContainer = styled(View)`
    flex : 1;
    justify-content : center;
    align-items : center;
`;


export default Home;