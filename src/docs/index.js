import React from "react";
import ReactDOM from "react-dom";
import { Label } from "../lib/components/others/Label";

const App = () => (
    <div>
        <Label>Default</Label>
        <Label type="primary">Primary</Label>
        <Label type="success">Success</Label>
        <Label type="warning">Warning</Label>
        <Label type="danger">Danger</Label>
    </div>
);
ReactDOM.render(<App />, document.getElementById("root"));
