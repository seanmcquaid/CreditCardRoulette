import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from "../../pages/Home/Home";
import Roulette from "../../pages/Roulette/Roulette";

const Tab = createBottomTabNavigator();
const {Navigator, Screen} = Tab;

export default () => (
    <NavigationContainer>
        <Navigator>
            <Screen name="Home" component={Home}/>
            <Screen name="Roulette" component={Roulette}/>
        </Navigator>
    </NavigationContainer>
);