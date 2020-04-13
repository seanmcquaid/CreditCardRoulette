import React, {createContext, useReducer} from "react";
import rootReducer from "../reducers/rootReducer";

const initialState = {
    checkAmount : 0,
    playerNames : []
};

export const GlobalContext = createContext();

export const GlobalContextProvider = props => {
    const [state, dispatch] = useReducer(rootReducer, initialState);

    return (
        <GlobalContext.Provider value={[state, dispatch]}>
            {props.children}
        </GlobalContext.Provider>
    )
};
