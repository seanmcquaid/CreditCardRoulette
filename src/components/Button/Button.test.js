import React from "react";
import {render, act, fireEvent} from "react-native-testing-library";
import Button from "./Button";

describe("<Button/>", () => {
    it("Matches the snapshot correctly", () => {
        const onPress = jest.fn();

        const props = {
            onPress,
            title : "Mock Button"
        };
        
        const button = render(<Button {...props}/>);

        expect(button).toMatchSnapshot();
    });

    it("OnPress works correctly", () => {
        const onPress = jest.fn();

        const props = {
            onPress,
            title : "Mock Button"
        };

        const {getByTestId} = render(<Button {...props}/>);

        fireEvent.press(getByTestId("button"));

        expect(onPress).toHaveBeenCalledTimes(1);
    });
});