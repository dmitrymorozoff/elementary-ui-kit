import React from "react";
import ReactDOM from "react-dom";
import { Button, Switch } from "../../build/lib";

const App = () => (
    <div>
        <Button type="primary">hELLO </Button>
        <Switch />
    </div>
);
ReactDOM.render(<App />, document.getElementById("root"));
