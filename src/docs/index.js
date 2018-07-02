import React from "react";
import ReactDOM from "react-dom";
import { Select, SelectItem } from "../../build";

const App = () => (
    <div>
        <div>
            <Select>
                <SelectItem>option 1</SelectItem>
                <SelectItem>option 2</SelectItem>
            </Select>
        </div>
    </div>
);
ReactDOM.render(<App />, document.getElementById("root"));
