import React from "react";
import { Input } from "../src/lib";

describe("<Input/>", () => {
    it("should render a default input", () => {
        const component = shallow(<Input value="" onChange={() => {}} />);
        expect(component).toMatchSnapshot();
    });
    it("it input change correctly", () => {
        const value = "Hello";
        const mockFunction = jest.fn();
        const component = mount(<Input value="" onChange={mockFunction} />);
        component.find("input").simulate("change", {
            preventDefault() {},
            target: { value },
        });
        expect(mockFunction).toHaveBeenCalled();
    });
});
