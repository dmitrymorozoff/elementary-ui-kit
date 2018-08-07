### Basic Usage

Buttons are used for actions, like in forms. Clicking a button will trigger corresponding business logic.

```jsx
<div style={{ display: "flex" }}>
    <div style={{ margin: "8px" }}>
        <Button>Default</Button>
    </div>
    <div style={{ margin: "8px" }}>
        <Button onClick={() => alert("hello")} type="primary">
            Primary
        </Button>
    </div>
    <div style={{ margin: "8px" }}>
        <Button type="success">Success</Button>
    </div>
    <div style={{ margin: "8px" }}>
        <Button type="warning">Warning</Button>
    </div>
    <div style={{ margin: "8px" }}>
        <Button type="danger">Danger</Button>
    </div>
</div>
```

### Round Buttons

```jsx
<div style={{ display: "flex" }}>
    <div style={{ margin: "8px" }}>
        <Button round>Default</Button>
    </div>
    <div style={{ margin: "8px" }}>
        <Button type="primary" round>
            Primary
        </Button>
    </div>
    <div style={{ margin: "8px" }}>
        <Button type="success" round>
            Success
        </Button>
    </div>
    <div style={{ margin: "8px" }}>
        <Button type="warning" round>
            Warning
        </Button>
    </div>
    <Button type="danger" round>
        Danger
    </Button>
</div>
```

### Disabled Buttons

The `disabled` attribute determines if the button is disabled.

```jsx
<div style={{ display: "flex" }}>
    <div style={{ margin: "8px" }}>
        <Button disabled={true}>Default</Button>
    </div>
    <div style={{ margin: "8px" }}>
        <Button disabled={true} type="primary">
            Primary
        </Button>
    </div>
    <div style={{ margin: "8px" }}>
        <Button disabled={true} type="success">
            Success
        </Button>
    </div>
    <div style={{ margin: "8px" }}>
        <Button disabled={true} type="warning">
            Warning
        </Button>
    </div>
    <div style={{ margin: "8px" }}>
        <Button disabled={true} type="danger">
            Danger
        </Button>
    </div>
</div>
```

### Text Buttons

Buttons without border and background.

```jsx
<div style={{ display: "flex" }}>
    <div style={{ margin: "8px" }}>
        <Button type="text">Default</Button>
    </div>
    <div style={{ margin: "8px" }}>
        <Button type="text" disabled={true}>
            Primary
        </Button>
    </div>
</div>
```

### Icon Buttons

Use icons to add more meaning to Button. You can use icon alone to save some space, or use it with text.

```jsx
<div style={{ display: "flex" }}>
    <div style={{ margin: "8px" }}>
        <Button type="primary">
            <DownArrow fill="#fff" style={{ margin: "auto 0" }} />
        </Button>
    </div>
    <div style={{ margin: "8px" }}>
        <Button type="primary">
            Search <Search fill="#fff" style={{ margin: "auto 0 auto 8px" }} />
        </Button>
    </div>
    <div style={{ margin: "8px" }}>
        <Button type="primary">
            Next Page <RightArrow fill="#fff" style={{ marginLeft: "8px" }} />
        </Button>
    </div>
</div>
```

### Small Icon Buttons

```jsx
<div style={{ display: "flex" }}>
    <div style={{ margin: "8px" }}>
        <Button size="small" type="primary">
            <DownArrow fill="#fff" style={{ margin: "auto 0" }} />
        </Button>
    </div>
    <div style={{ margin: "8px" }}>
        <Button size="small" type="primary">
            Search <Search fill="#fff" style={{ margin: "auto 0 auto 8px" }} />
        </Button>
    </div>
    <div style={{ margin: "8px" }}>
        <Button size="small" type="primary">
            Next Page <RightArrow fill="#fff" style={{ marginLeft: "8px" }} />
        </Button>
    </div>
</div>
```

### Sizes

Besides default size, Button component provides four additional sizes.

```jsx
<div style={{ display: "flex" }}>
    <div style={{ margin: "8px" }}>
        <Button>Default</Button>
    </div>
    <div style={{ margin: "8px" }}>
        <Button size="medium" type="primary">
            Medium
        </Button>
    </div>
    <div style={{ margin: "8px" }}>
        <Button size="small" type="primary">
            Small
        </Button>
    </div>
    <div style={{ margin: "8px" }}>
        <Button size="mini" type="primary">
            Mini
        </Button>
    </div>
</div>
<div style={{ display: "flex" }}>
    <div style={{ margin: "8px" }}>
        <Button round>Default</Button>
    </div>
    <div style={{ margin: "8px" }}>
        <Button size="medium" round type="danger">
            Medium
        </Button>
    </div>
    <div style={{ margin: "8px" }}>
        <Button size="small" round type="danger">
            Small
        </Button>
    </div>
    <div style={{ margin: "8px" }}>
        <Button size="mini" round type="danger">
            Mini
        </Button>
    </div>
</div>
```
