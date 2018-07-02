import React from "react";
import ReactDOM from "react-dom";
import { Button } from "../lib/components/forms/Button";

const App = () => (
    <div>
        <div>
            <Button>Hello</Button>
        </div>
        <br />
        <div />
    </div>
);
ReactDOM.render(<App />, document.getElementById("root"));
