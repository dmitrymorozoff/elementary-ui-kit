import React from "react";
import ReactDOM from "react-dom";
import { Button } from "../lib/components/forms/Button";

const App = () => (
    <div>
        <div>
            <Button>Default</Button>
            <Button type="primary">Primary</Button>
            <Button type="success">Success</Button>
            <Button type="warning">Warning</Button>
            <Button type="danger">Danger</Button>
        </div>
        <div>
            <Button round>Default</Button>
            <Button type="primary" round>
                Primary
            </Button>
            <Button type="success" round>
                Success
            </Button>
            <Button type="warning" round>
                Warning
            </Button>
            <Button type="danger" round>
                Danger
            </Button>
        </div>
        <div>
            <Button type="text">Default</Button>
            <Button type="text" disabled={true}>
                Primary
            </Button>
        </div>
        <div>
            <Button disabled={true}>Default</Button>
            <Button disabled={true} type="primary">
                Primary
            </Button>
            <Button disabled={true} type="success">
                Success
            </Button>
            <Button disabled={true} type="warning">
                Warning
            </Button>
            <Button disabled={true} type="danger">
                Danger
            </Button>
        </div>
        <div>
            <Button>Default</Button>
            <Button size="medium">Medium</Button>
            <Button size="small">Small</Button>
            <Button size="mini">Mini</Button>
        </div>
        <div>
            <Button round>Default</Button>
            <Button size="medium" round>
                Medium
            </Button>
            <Button size="small" round>
                Small
            </Button>
            <Button size="mini" round>
                Mini
            </Button>
        </div>
    </div>
);
ReactDOM.render(<App />, document.getElementById("root"));
