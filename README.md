## Elementary UI

A collection of reusable React UI components built with [styled-components](https://styled-components.com).

### Documentation

-   To check out live examples visit [https://dmitrymorozoff.github.io/elementary-ui-kit/](https://dmitrymorozoff.github.io/elementary-ui-kit/)

### Install

```bash
# Install
npm install --save elementary-ui-kit
```

```bash
# You can also test the components locally by cloning this repo and doing the following steps:
git clone https://github.com/dmitrymorozoff/elementary-ui-kit.git

# Install dependencies from package.json:
npm install

# Start local development server `localhost:1234`:
npm start

# Start react-styleguidist
npm run docs

# Run linter
npm run lint

# Start tests followed by jest.
npm run test
```

### Basic Usage:

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { Button } from "elementary-ui-kit";

function App() {
    return <Button type="primary">Hello World</Button>;
}

ReactDOM.render(<App />, document.getElementById("root"));
```

### Components:

-   Forms
    -   [Button](https://github.com/dmitrymorozoff/elementary-ui-kit/tree/master/src/lib/components/forms/Button)
    -   [Input](https://github.com/dmitrymorozoff/elementary-ui-kit/tree/master/src/lib/components/forms/Input)
    -   [Switch](https://github.com/dmitrymorozoff/elementary-ui-kit/tree/master/src/lib/components/forms/Switch)
    -   [Checkbox](https://github.com/dmitrymorozoff/elementary-ui-kit/tree/master/src/lib/components/forms/Checkbox)
    -   [Select](https://github.com/dmitrymorozoff/elementary-ui-kit/tree/master/src/lib/components/forms/Select)
        -   [SelectItem](https://github.com/dmitrymorozoff/elementary-ui-kit/tree/master/src/lib/components/forms/Select/components/SelectItem)
-   Others
    -   [Card](https://github.com/dmitrymorozoff/elementary-ui-kit/tree/master/src/lib/components/others/Card)
        -   [CardButtons](https://github.com/dmitrymorozoff/elementary-ui-kit/tree/master/src/lib/components/others/Card/components/CardButtons)
        -   [CardContent](https://github.com/dmitrymorozoff/elementary-ui-kit/tree/master/src/lib/components/others/Card/components/CardContent)
        -   [CardMedia](https://github.com/dmitrymorozoff/elementary-ui-kit/tree/master/src/lib/components/others/Card/components/CardMedia)
    -   [Text](https://github.com/dmitrymorozoff/elementary-ui-kit/tree/master/src/lib/components/others/Text)
    -   [Label](https://github.com/dmitrymorozoff/elementary-ui-kit/tree/master/src/lib/components/others/Label)
-   Icons
    -   [RightArrow](https://github.com/dmitrymorozoff/elementary-ui-kit/tree/master/src/lib/components/icons/RightArrow)
    -   [RightUp](https://github.com/dmitrymorozoff/elementary-ui-kit/tree/master/src/lib/components/icons/RightUp)
    -   [RightDown](https://github.com/dmitrymorozoff/elementary-ui-kit/tree/master/src/lib/components/icons/RightDown)
    -   [Search](https://github.com/dmitrymorozoff/elementary-ui-kit/tree/master/src/lib/components/icons/Search)

#### @TODO

-   [ ] Table
-   [ ] Modal
-   [ ] Collapse
-   [ ] List
-   [ ] Radio
-   [ ] Tabs
-   [ ] Textarea
-   [ ] Link
-   [ ] Nav
-   [ ] Pagination
