import React from "react";
import {render} from "react-native-testing-library";
import HeaderText from "./HeaderText";

describe("<HeaderText/>", () => {
    it("Matches snapshot correctly", () => {
        const headerText = render(<HeaderText>Header Text</HeaderText>);
        expect(headerText).toMatchSnapshot();
    });
});