import React from "react";
import {render, fireEvent} from "react-native-testing-library";
import Roulette from "./Roulette";
import {GlobalContextProvider} from "../../store/store";

// need to figure out how to set up state for global context provider for testing
// https://github.com/testing-library/testing-library-docs/blob/master/docs/example-react-context.md

// maybe consider making your own global context provider at the beginning of the test that will accept in any state passed??

describe("<Roulette/>", () => {
    it("determineWinnerOnTapHandler works correctly", () => {

    });

    it("playAgainOnTapHandler works correctly", () => {

    });

    it("Initial load paragraph text is correct", () => {

    });

    it("Loading paragraph text displays within the timer", () => {

    });

    it("Winner displays after play button is pressed and timer runs out", () => {
        
    });

});