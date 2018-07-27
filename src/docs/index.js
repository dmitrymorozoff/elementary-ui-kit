import React from "react";
import ReactDOM from "react-dom";
import { Link } from "../lib/components/forms/Link";

const App = () => (
    <div>
        <Link>Hello world</Link>
    </div>
);

// eslint-disable-next-line
ReactDOM.render(<App />, document.getElementById("root"));
