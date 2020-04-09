import {setCheckAmount, addPlayer, deletePlayer, playAgain} from "./actions";

describe("Actions", () => {
    it("setCheckAmount", () => {
        const checkAmount = 100;
        const result = setCheckAmount(checkAmount);
        const expectedResult = {
            type : "SET_CHECK_AMOUNT",
            payload : {
                checkAmount
            },
        };
        expect(result).toEqual(expectedResult);
    });
    it("addPlayer", () => {
        const playerName = "Sean";
        const result = addPlayer(playerName);
        const expectedResult = {
            type : "ADD_PLAYER",
            payload : {
                playerName
            },
        };
        expect(result).toEqual(expectedResult);
    });
    it("deletePlayer", () => {
        const selectedPlayerName = "Sean";
        const result = deletePlayer(selectedPlayerName);
        const expectedResult = {
            type : "DELETE_PLAYER",
            payload : {
                selectedPlayerName
            },
        };
        expect(result).toEqual(expectedResult);
    });
    it("playAgain", () => {
        const result = playAgain();
        const expectedResult = {
            type : "PLAY_AGAIN",
        };
        expect(result).toEqual(expectedResult);
    });
});