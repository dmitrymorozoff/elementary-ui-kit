import React from "react";
import { Link } from "../src/lib";

describe("<Link/>", () => {
    it("should render a default link", () => {
        const component = shallow(<Link>Hello Jest!</Link>);
        expect(component).toMatchSnapshot();
    });
    it("it link clicked correctly", () => {
        const mockFunction = jest.fn();
        const component = shallow(
            <Link onClick={mockFunction}>Hello Jest!</Link>,
        );
        component.simulate("click");
        expect(mockFunction).toHaveBeenCalled();
    });
});
