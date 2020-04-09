import React from "react";
import {render, fireEvent} from "react-native-testing-library";
import Player from "./Player";

describe("<Player/>", () => {
    it("Snapshot matches correctly", () => {
        const removePlayer = jest.fn();
        const props = {
            playerName : "Player Name Prop Here",
            removePlayer
        };
        const player = render(<Player {...props}/>);
        expect(player).toMatchSnapshot();
    });
    it("On Press works correctly", () => {
        const removePlayer = jest.fn();
        const props = {
            playerName : "PlayerName",
            removePlayer
        };

        const {getByTestId} = render(<Player {...props}/>);

        fireEvent.press(getByTestId("PlayerName"));

        expect(removePlayer).toHaveBeenCalledTimes(1);

    });
});