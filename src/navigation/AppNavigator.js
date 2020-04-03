import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "../screens/Home/Home";
import Roulette from "../screens/Roulette/Roulette";
import EnterCheck from "../screens/EnterCheck/EnterCheck";
import PlayersList from "../screens/PlayersList/PlayersList";

const Stack = createStackNavigator();
const {Screen, Navigator} = Stack;

export default () => (
    <NavigationContainer>
        <Navigator>
            <Screen name="Home" component={Home}/>
            <Screen name="Enter Check" component={EnterCheck}/>
            <Screen name="Players List" component={PlayersList}/>
            <Screen name="Roulette Page" component={Roulette}/>
        </Navigator>
    </NavigationContainer>
);