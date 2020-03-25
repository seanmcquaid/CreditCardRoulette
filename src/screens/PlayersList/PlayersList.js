import React from "react";
import {View, Text, Button} from "react-native";
import styles from "./styles";

export default ({navigation}) => (
    <View>
        <Text>PlayersList</Text>
        <Button title="Play" onPress={() => navigation.push("Roulette")}/>
    </View>
);