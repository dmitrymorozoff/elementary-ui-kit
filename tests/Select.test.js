import React from "react";
import { Select } from "../src/lib/components/forms/Select";
import { SelectItem } from "../src/lib/components/forms/Select/components/SelectItem";

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
