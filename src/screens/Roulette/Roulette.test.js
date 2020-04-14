import React from "react";
import {render, fireEvent, act, rerender} from "react-native-testing-library";
import Roulette from "./Roulette";
import mockGlobalContextProvider from "../../testHelpers/mockGlobalContextProvider";
import MockGlobalContextProvider from "../../testHelpers/mockGlobalContextProvider";

// need to figure out how to set up state for global context provider for testing
// https://github.com/testing-library/testing-library-docs/blob/master/docs/example-react-context.md

// maybe consider making your own global context provider at the beginning of the test that will accept in any state passed??

describe("<Roulette/>", () => {

    it("determineWinnerOnTapHandler works correctly", async () => {
        const navigate = jest.fn();
        
        const props = {
            navigation : {
                navigate
            },
        };

        const initialState = {
            checkAmount : 2000,
            playerNames : ["Sean"],
        };

        const {getByTestId}  = render(
            <MockGlobalContextProvider initialState={initialState}>
                <Roulette {...props}/>
            </MockGlobalContextProvider>);

        await fireEvent.press(getByTestId("playButton"));

        expect(getByTestId("gameResultText").props.children).toEqual("Waiting to see who won!!!");
    });

    it("playAgainOnTapHandler works correctly", async () => {
        const navigate = jest.fn();
        
        const props = {
            navigation : {
                navigate
            },
        };

        const initialState = {
            checkAmount : 2000,
            playerNames : ["Sean"],
        };

        const {getByTestId}  = render(
            <MockGlobalContextProvider initialState={initialState}>
                <Roulette {...props}/>
            </MockGlobalContextProvider>);

        await fireEvent.press(getByTestId("playAgainButton"));

        expect(navigate).toHaveBeenCalledTimes(1);
        expect(navigate).toHaveBeenCalledWith("Home");

    });

    it("Initial load paragraph text is correct", () => {
        const navigate = jest.fn();
        
        const props = {
            navigation : {
                navigate
            },
        };

        const initialState = {
            checkAmount : 2000,
            playerNames : ["Sean"],
        };

        const {getByTestId}  = render(
            <MockGlobalContextProvider initialState={initialState}>
                <Roulette {...props}/>
            </MockGlobalContextProvider>);

        expect(getByTestId("gameResultText").props.children).toEqual("Press to see who won!");

    });

    it("Loading paragraph text displays within the timer", async () => {
        const navigate = jest.fn();
        
        const props = {
            navigation : {
                navigate
            },
        };

        const initialState = {
            checkAmount : 2000,
            playerNames : ["Sean"],
        };

        const {getByTestId}  = render(
            <MockGlobalContextProvider initialState={initialState}>
                <Roulette {...props}/>
            </MockGlobalContextProvider>);

        await fireEvent.press(getByTestId("playButton"));

        expect(getByTestId("gameResultText").props.children).toEqual("Waiting to see who won!!!");
    });

    it("Winner displays after play button is pressed and timer runs out", async () => {
        const navigate = jest.fn();
        
        const props = {
            navigation : {
                navigate
            },
        };

        const initialState = {
            checkAmount : 2000,
            playerNames : ["Sean"],
        };

        const {getByTestId}  = render(
            <MockGlobalContextProvider initialState={initialState}>
                <Roulette {...props}/>
            </MockGlobalContextProvider>);

        await fireEvent.press(getByTestId("playButton"));

        await jest.useFakeTimers();
        await jest.advanceTimersByTime(3500);

        expect(getByTestId("gameResultText").props.children).toEqual("Sean has won!");
    });

});