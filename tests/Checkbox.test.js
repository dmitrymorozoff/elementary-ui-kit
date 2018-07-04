import React from "react";
import { Checkbox } from "../src/lib";

describe("<Checkbox/>", () => {
    it("should render a default checkbox", () => {
        const component = shallow(<Checkbox />);
        expect(component).toMatchSnapshot();
    });
    it("it checkbox change correctly", () => {
        const mockFunction = jest.fn();
        const component = mount(<Checkbox onChange={mockFunction} />);
        component.find("input").simulate("change", {
            preventDefault() {},
        });
        expect(mockFunction).toHaveBeenCalled();
    });
});
