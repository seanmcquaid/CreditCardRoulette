import React from "react";
import {View, Text, Button} from "react-native";
import styles from "./styles";

export default ({navigation}) => (
    <View>
        <Text>Enter Check</Text>
        <Button title="Play" onPress={() => navigation.push("Players List")}/>
    </View>
);