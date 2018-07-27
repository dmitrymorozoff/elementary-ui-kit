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

### Round Buttons:

```jsx
	<Button margin="8px" round>Default</Button>
	<Button margin="8px" type="primary" round>
		Primary
	</Button>
	<Button margin="8px" type="success" round>
		Success
	</Button>
	<Button margin="8px" type="warning" round>
		Warning
	</Button>
	<Button margin="8px" type="danger" round>
		Danger
	</Button>
```

### Disabled Buttons:

The `disabled` attribute determines if the button is disabled.

```jsx
	<Button margin="8px" disabled={true}>Default</Button>
	<Button margin="8px" disabled={true} type="primary">
		Primary
	</Button>
	<Button margin="8px" disabled={true} type="success">
		Success
	</Button>
	<Button margin="8px" disabled={true} type="warning">
		Warning
	</Button>
	<Button margin="8px" disabled={true} type="danger">
		Danger
	</Button>
```

### Text Buttons:

Buttons without border and background.

```jsx
	<Button margin="8px" type="text">Default</Button>
	<Button margin="8px" type="text" disabled={true}>
		Primary
	</Button>
```

### Sizes:

Besides default size, Button component provides four additional sizes.

```jsx
	<Button margin="8px">Default</Button>
	<Button margin="8px" size="medium" type="primary">Medium</Button>
	<Button margin="8px" size="small" type="primary">Small</Button>
	<Button margin="8px" size="mini" type="primary">Mini</Button>
	<br/>
	<Button margin="8px" round>Default</Button>
	<Button margin="8px" size="medium" round type="danger">
		Medium
	</Button>
	<Button margin="8px" size="small" round type="danger">
		Small
	</Button>
	<Button margin="8px" size="mini" round type="danger">
		Mini
	</Button>
```
