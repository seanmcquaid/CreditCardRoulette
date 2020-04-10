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
});