import React from "react";
import { Button } from "../src/lib";

describe("<Button/>", () => {
    it("should render a default button", () => {
        const component = shallow(<Button>Hello Jest!</Button>);
        expect(component).toMatchSnapshot();
    });
    it("it button clicked correctly", () => {
        const mockFunction = jest.fn();
        const component = shallow(
            <Button type="primary" onClick={mockFunction}>
                Hello Jest!
            </Button>,
        );
        component.simulate("click");
        expect(mockFunction).toHaveBeenCalled();
    });
});
