import React from "react";
import {render} from "react-native-testing-library";
import ParagraphText from "./ParagraphText";

describe("<ParagraphText/>", () => {
    it("Matches snapshot correctly", () => {
        const paragraphText = render(<ParagraphText>Paragraph Text</ParagraphText>);
        expect(paragraphText).toMatchSnapshot();
    });
});