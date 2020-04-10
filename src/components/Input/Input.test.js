import React from "react";
import {render, fireEvent} from "react-native-testing-library";
import Input from "./Input";

describe("<Input/>", () => {
    it("Snapshot matches correctly", () => {
        const onChange = jest.fn();

        const props = {
            onChange,
            placeholder : "Placeholder",
            value : "Value"
        };

        const input = render(<Input {...props}/>);

        expect(input).toMatchSnapshot();
    });
});