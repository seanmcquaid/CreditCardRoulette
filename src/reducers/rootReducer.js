const rootReducer = (state, action) => {
    switch(action.type){
        case "ADD_PLAYER":
            return {
                playerNames : [...state.playerNames, action.payload]
            };
        case "REMOVE_PLAYER":
            return {
                playerNames : [...state.playerNames, action.payload]
            };
        default :
            return state;
    }
};

export default rootReducer;