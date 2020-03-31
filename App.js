import React, { useState, useEffect } from "react";
import {AppLoading} from "expo";
import AppNavigator from "./src/navigation/AppNavigator";
import {GlobalContextProvider} from "./src/store/store";
import * as Font from "expo-font";

const App = () => { 
    const [isFontLoaded, setIsFontLoaded] = useState(false);

    useEffect(() => {
        const loadFonts = async () => {
            await Font.loadAsync({
                Roboto : require("native-base/Fonts/Roboto.ttf")
            });
            setIsFontLoaded(true);
        };
        if(!isFontLoaded){
            loadFonts();
            setIsFontLoaded(true);
        }
    });

    if(!isFontLoaded){
        return(
            <AppLoading/>
        )
    }

    return (
        <GlobalContextProvider>
            <AppNavigator/>
        </GlobalContextProvider>
    );
};

export default App;