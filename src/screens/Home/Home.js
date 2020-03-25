import React from "react";
import {View, Text, Button} from "react-native";
import styles from "./styles";

export default ({navigation}) => (
    <View style={styles.container}>
        <Text>Credit Card Roulette</Text>
        <Button title="Play" onPress={() => navigation.push("Enter Check")}/>
    </View>
);