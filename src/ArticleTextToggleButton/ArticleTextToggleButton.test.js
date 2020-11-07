import React from "react";
import ArticleTextToggleButton from "./ArticleTextToggleButton";

describe("ArticleTextToggleButton tests", () => {
    it("renders correctly", () => {
        const { container, getByText } = render(<ArticleTextToggleButton buttonText="Show more" onClick={() => {}} />);
        expect(container).toMatchSnapshot();
    });
});