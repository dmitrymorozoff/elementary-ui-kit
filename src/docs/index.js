import React from "react";
import ReactDOM from "react-dom";
import { Label } from "../lib/components/others/Label";
import { Checkbox } from "../lib/components/forms/Checkbox";
import { Switch } from "../lib";

const App = () => (
    <div>
        <div style={{ margin: "12px 0" }}>
            <Label>Default</Label>
            <Label type="primary">Primary</Label>
            <Label type="success">Success</Label>
            <Label type="warning">Warning</Label>
            <Label type="danger">Danger</Label>
        </div>
        <div>
            <Switch defaultChecked={true} />
        </div>
        <div
            style={{ margin: "12px 0", display: "flex", flexDirection: "column" }}
            onChange={event => {
                // eslint-disable-next-line
                console.log({ name: event.target.name, checked: event.target.checked });
            }}
        >
            <Checkbox label="Item 1" name="item 1" />

            <Checkbox label="Item 2" name="item 2" defaultChecked={true} />

            <Checkbox label="Item 3" name="item 3" disabled={true} />

            <Checkbox label="Item 4" name="item 4" color="#a596e1" />
        </div>
    </div>
);

// eslint-disable-next-line
ReactDOM.render(<App />, document.getElementById("root"));
