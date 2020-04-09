export const setCheckAmount = checkAmount => ({
    type : "SET_CHECK_AMOUNT",
    payload : {
        checkAmount
    },
});

export const addPlayer = playerName => ({
    type : "ADD_PLAYER",
    payload : {
        playerName
    },
});

export const deletePlayer = selectedPlayerName => ({
    type : "DELETE_PLAYER",
    payload : {
        selectedPlayerName
    },
});

export const playAgain = () => ({
    type : "PLAY_AGAIN",
});