import React from "react";
import {render} from "react-native-testing-library";
import TextInput from "./TextInput";

describe("<TextInput/>", () => {
    it("Snapshot matches correctly", () => {
        const textInput = render(<TextInput/>);
        expect(textInput).toMatchSnapshot();
    });
});