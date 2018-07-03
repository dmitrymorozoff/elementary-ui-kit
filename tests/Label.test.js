import React from "react";
import { Label } from "../src/lib";

describe("<Label/>", () => {
    it("should render a default label", () => {
        const component = shallow(<Label>Hello Jest!</Label>);
        expect(component).toMatchSnapshot();
    });
});
