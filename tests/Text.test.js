import React from "react";
import { Text } from "../src/lib/components/others/Text";

describe("<Text/>", () => {
    it("should render a default text", () => {
        const component = shallow(
            <Text>
                They live almost exclusively in the Southern Hemisphere, with only one species, the Galapagos penguin,
                found north of the equator.
            </Text>,
        );
        expect(component).toMatchSnapshot();
    });
});
