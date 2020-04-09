const initialState = {
    checkAmount : 0,
    playerNames : []
};

export default (state = initialState, action) => {
    switch(action.type){
        case "SET_CHECK_AMOUNT": 
            return {
                ...state,
                checkAmount : action.payload.checkAmount
            }
        case "ADD_PLAYER":
            return {
                ...state,
                playerNames : [...state.playerNames, action.payload.playerName]
            };
        case "DELETE_PLAYER":
            return {
                ...state,
                playerNames : state.playerNames.filter(playerName => playerName !== action.payload.selectedPlayerName)
            };
        case "PLAY_AGAIN": 
            return {
                ...state,
                playerNames : initialState.playerNames,
                checkAmount : initialState.checkAmount
            }
        default :
            return state;
    }
};