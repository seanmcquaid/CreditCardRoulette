import React from "react";
import {render, fireEvent} from "react-native-testing-library";
import PlayersList from "./PlayersList";
import {GlobalContextProvider} from "../../store/store";

describe("<PlayersList/>", () => {
    it("Matches snapshot correctly", () => {
        const navigate = jest.fn();
        
        const props = {
            navigation : {
                navigate
            }
        };
        
        const playersList = render(
            <GlobalContextProvider>
                <PlayersList {...props}/>
            </GlobalContextProvider>);

        expect(playersList).toMatchSnapshot();
    });

    it("AddPlayerToList works correctly", async () => {
        const navigate = jest.fn();
        
        const props = {
            navigation : {
                navigate
            }
        };
        
        const {getByTestId} = render(
            <GlobalContextProvider>
                <PlayersList {...props}/>
            </GlobalContextProvider>);

        await fireEvent.changeText(getByTestId("playerNameInput"), "Sean");
        await fireEvent.press(getByTestId("addPlayerButton"));

        expect(getByTestId("SeanContainer")).toBeDefined();
    });

    it("AddPlayerToList won't add a string with 0 characters", () => {
        const navigate = jest.fn();
        
        const props = {
            navigation : {
                navigate
            }
        };
        
        const {getByTestId} = render(
            <GlobalContextProvider>
                <PlayersList {...props}/>
            </GlobalContextProvider>);

        await fireEvent.changeText(getByTestId("playerNameInput"), "");
        await fireEvent.press(getByTestId("addPlayerButton"));

        expect(getByTestId("Container")).toBeUndefined();
        
    });

    it("RemovePlayerFromList works correctly", async () => {
        const navigate = jest.fn();
        
        const props = {
            navigation : {
                navigate
            }
        };
        
        const {getByTestId} = render(
            <GlobalContextProvider>
                <PlayersList {...props}/>
            </GlobalContextProvider>);

        await fireEvent.changeText(getByTestId("playerNameInput"), "Sean");
        await fireEvent.press(getByTestId("addPlayerButton"));
        await fireEvent.press(getByTestId("removeSean"));

        expect(getByTestId("SeanContainr")).toBeUndefined();
    });

    it("handlePlayButtonTap works correctly", async () => {
        const navigate = jest.fn();
        
        const props = {
            navigation : {
                navigate
            }
        };
        
        const {getByTestId} = render(
            <GlobalContextProvider>
                <PlayersList {...props}/>
            </GlobalContextProvider>);

        await fireEvent.press(getByTestId("playButton"));

        expect(navigate).toHaveBeenCalledTimes(1);
        expect(navigate).toHaveBeenCalledWith("Roulette");

    });


});