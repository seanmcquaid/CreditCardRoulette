import React from "react";
import {GlobalContextProvider} from "../../store/store";
import {render, fireEvent} from "react-native-testing-library";
import Home from "./Home";

describe("<Home/>", () => {
    it("Button onPress works correctly", async () => {
        const navigate = jest.fn();
        
        const props = {
            navigation : {
                navigate
            }
        };

        const {getByTestId} = render(
            <GlobalContextProvider>
                <Home {...props}/>
            </GlobalContextProvider>);
        
        await fireEvent.press(getByTestId("playButton"));

        expect(navigate).toHaveBeenCalledTimes(1);
        expect(navigate).toHaveBeenCalledWith("Enter Check");
    });
    it("Matches snapshot correctly", () => {
        const navigate = jest.fn();
        
        const props = {
            navigation : {
                navigate
            }
        };

        const home = render(
            <GlobalContextProvider>
                <Home {...props}/>
            </GlobalContextProvider>);

        expect(home).toMatchSnapshot();
    });
});