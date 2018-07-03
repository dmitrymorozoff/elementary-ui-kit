import React from "react";
import { Select, SelectItem } from "../src/lib";

describe("<Select/>", () => {
    it("should render a default select", () => {
        const component = shallow(
            <Select>
                <SelectItem value={1}>One</SelectItem>
                <SelectItem value={2}>Two</SelectItem>
                <SelectItem value={3}>Three</SelectItem>
            </Select>,
        );
        expect(component).toMatchSnapshot();
    });
});
