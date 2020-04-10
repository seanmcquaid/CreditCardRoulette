import React from "react";
import EnterCheck from "./EnterCheck";
import {render, fireEvent, act, cleanup} from "react-native-testing-library";
import {GlobalContextProvider} from "../../store/store";

describe("<EnterCheck/>", () => {
    afterEach(() => {
        jest.clearAllMocks();
        cleanup();
    })
    it("Text Input works properly", () => {
        const navigate = jest.fn();

        const props = {
            navigation : {
                navigate
            }
        };
        
        const {getByTestId} = render(
        <GlobalContextProvider>
            <EnterCheck {...props}/>
        </GlobalContextProvider>);


        fireEvent.changeText(getByTestId("textInput"), "Hello");
        expect(getByTestId("textInput").props.value).toEqual("Hello");
    });

    it("handlePlayButtonOnTapHandler with just numbers", async () => {
        const navigate = jest.fn();
        
        const props = {
            navigation : {
                navigate
            }
        };
        
        const {getByTestId} = render(
        <GlobalContextProvider>
            <EnterCheck {...props}/>
        </GlobalContextProvider>);

        fireEvent.changeText(getByTestId("textInput"), "366");
        await fireEvent.press(getByTestId("playButton"));

        expect(navigate).toHaveBeenCalledTimes(1);
        expect(navigate).toHaveBeenCalledWith("Players List");
    });

    it("handlePlayButtonOnTapHandler with no numbers numbers", () => {
        const navigate = jest.fn();
        
        const props = {
            navigation : {
                navigate
            }
        };
        
        const {getByTestId} = render(
        <GlobalContextProvider>
            <EnterCheck {...props}/>
        </GlobalContextProvider>);

        fireEvent.changeText(getByTestId("textInput"), "SEAN");
        fireEvent.press(getByTestId("playButton"));

        expect(navigate).toHaveBeenCalledTimes(0);
    });
    it("Matches snapshot correctly", () => {
        const navigate = jest.fn();
        
        const props = {
            navigation : {
                navigate
            }
        };
        
        const enterCheck = render(
        <GlobalContextProvider>
            <EnterCheck {...props}/>
        </GlobalContextProvider>);

        expect(enterCheck).toMatchSnapshot();
    });
});