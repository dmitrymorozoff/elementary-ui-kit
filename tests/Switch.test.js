import React from "react";
import { Switch } from "../src/lib";

describe("<Switch/>", () => {
    it("should render a default switch", () => {
        const component = shallow(<Switch />);
        expect(component).toMatchSnapshot();
    });
    it("it switch change correctly", () => {
        const mockFunction = jest.fn();
        const component = mount(<Switch onChange={mockFunction} />);
        component.find("input").simulate("change", {
            preventDefault() {},
        });
        expect(mockFunction).toHaveBeenCalled();
    });
});
