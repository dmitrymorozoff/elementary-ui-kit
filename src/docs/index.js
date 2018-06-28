import React from "react";
import ReactDOM from "react-dom";
import { Checkbox } from "../lib/components/forms/Checkbox";

const App = () => (
    <div>
        <Checkbox />
        <Checkbox checked={true} />
    </div>
);
ReactDOM.render(<App />, document.getElementById("root"));
