import React from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import {GlobalContextProvider} from "./src/store/store";

const App = () => (
    <GlobalContextProvider>
        <AppNavigator/>
    </GlobalContextProvider>
);

export default App;