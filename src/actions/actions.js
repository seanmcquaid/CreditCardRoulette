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
    }
});

export const deletePlayer = playerName => ({
    type : "DELETE_PLAYER",
    payload : {
        playerName
    }
});

export const getPlayers = () => ({
    type : "GET_PLAYERS",
})