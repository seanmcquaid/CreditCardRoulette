import React, { useState, useEffect } from "react";
import {ActivityIndicator} from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";
import {GlobalContextProvider} from "./src/store/store";
import * as Font from "expo-font";


const App = () => { 
    const [isFontLoaded, setIsFontLoaded] = useState(false);

    useEffect(() => {
        const getFonts = async () => {
            await Font.loadAsync({
                "Fira-Sans" : require("./assets/FiraSans-Black.ttf"),
                "Merriweather-Bold" : require("./assets/Merriweather-Bold.ttf"),
                "Merriweather-Regular" : require("./assets/Merriweather-Regular.ttf")
            });
            setIsFontLoaded(true);
        };
        if(!isFontLoaded){
            getFonts();
        }
    }, [])
    
    if(!isFontLoaded){
        return(
            <ActivityIndicator/>
        );
    }else {
        return (
            <GlobalContextProvider>
                <AppNavigator/>
            </GlobalContextProvider>
        );
    }
};

export default App;