import React, { useState, useEffect } from "react";
import {AppLoading} from "expo";
import AppNavigator from "./src/navigation/AppNavigator";
import {GlobalContextProvider} from "./src/store/store";
import * as Font from "expo-font";


const App = () => { 
    const [isFontLoaded, setIsFontLoaded] = useState(false);

    useEffect(() => {
        const getFonts = async () => {
            await Font.loadAsync({
                "FiraSans" : require("./assets/FiraSans-Black.ttf"),
                "MerriweatherBold" : require("./assets/Merriweather-Bold.ttf"),
                "MerriweatherRegular" : require("./assets/Merriweather-Regular.ttf")
            });
            setIsFontLoaded(true);
        };
        if(!isFontLoaded){
            console.log("loading fonts");
            getFonts();
        }
    }, [])
    
    if(!isFontLoaded){
        console.log("fonts loading")
        return(
            <AppLoading/>
        );
    }else {
        console.log("fonts loaded")
        return (
            <GlobalContextProvider>
                <AppNavigator/>
            </GlobalContextProvider>
        );
    }
};

export default App;