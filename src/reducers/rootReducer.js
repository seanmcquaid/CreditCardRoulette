const initialState = {
    checkAmount : 0,
    playerNames : []
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_CHECK_AMOUNT" : 
            return {
                ...state,
                checkAmount : action.payload.checkAmount
            }
        case "ADD_PLAYER":
            return {
                ...state,
                playerNames : [...state.playerNames, action.payload]
            };
        case "REMOVE_PLAYER":
            return {
                ...state,
                playerNames : state.playerNames.filter(playerName => playerName !== action.payload.playerName)
            };
        default :
            return state;
    }
};

export default rootReducer;