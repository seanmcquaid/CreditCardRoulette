import React, {useReducer} from "react";
import rootReducer from "../reducers/rootReducer";
import {GlobalContext} from "../store/store";

const MockGlobalContextProvider = ({initialState, children}) => {
    const [state, dispatch] = useReducer(rootReducer, initialState);

    return (
        <GlobalContext.Provider value={[state, dispatch]}>
            {children}
        </GlobalContext.Provider>
    )
};

export default MockGlobalContextProvider;