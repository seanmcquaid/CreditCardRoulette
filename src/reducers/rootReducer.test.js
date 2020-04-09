import rootReducer from "./rootReducer";

describe("Root Reducer", () => {
    it("SET_CHECK_AMOUNT", () => {
        const checkAmount = 100;
        const action = {
            type : "SET_CHECK_AMOUNT",
            payload : {
                checkAmount
            },
        };
        const state = {
            checkAmount : 0,
            playerNames : []
        };
        const result = rootReducer(state, action);
        const expectedResult = {
            ...state,
            checkAmount : 100
        };
        expect(result).toEqual(expectedResult);
    });
    it("ADD_PLAYER", () => {
        const playerName = "Sean";
        const action = {
            type : "ADD_PLAYER",
            payload : {
                playerName
            },
        };
        const state = {
            checkAmount : 0,
            playerNames : []
        };
        const result = rootReducer(state, action);
        const expectedResult = {
            ...state,
            playerNames : ["Sean"]
        };
        expect(result).toEqual(expectedResult);
    });
    it("DELETE_PLAYER", () => {
        const selectedPlayerName = "Sean";
        const action = {
            type : "DELETE_PLAYER",
            payload : {
                selectedPlayerName
            },
        };
        const state = {
            checkAmount : 0,
            playerNames : ["Sean"]
        };
        const result = rootReducer(state, action);
        const expectedResult = {
            ...state,
            playerNames : []
        };
        expect(result).toEqual(expectedResult);
    });
    it("PLAY_AGAIN", () => {
        const action = {
            type : "PLAY_AGAIN",
        };
        const state = {
            checkAmount : 0,
            playerNames : []
        };
        const result = rootReducer(state, action);
        const expectedResult = {
            checkAmount : 0,
            playerNames : []
        };
        expect(result).toEqual(expectedResult);
    });
    it("Default", () => {
        const action = {
            type : "Default",
        };
        const state = {
            checkAmount : 0,
            playerNames : []
        };
        const result = rootReducer(state, action);
        const expectedResult = {
            checkAmount : 0,
            playerNames : []
        };
        expect(result).toEqual(expectedResult);
    });
});