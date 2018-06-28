### Basic Usage:

```jsx
	<Button>Default</Button>
	<Button type="primary">Primary</Button>
	<Button type="success">Success</Button>
	<Button type="warning">Warning</Button>
	<Button type="danger">Danger</Button>
```

### Round Buttons:

```jsx
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
```

### Disabled Buttons:

The `disabled` attribute determines if the button is disabled.

```jsx
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
```

### Text Buttons:

Buttons without border and background.

```jsx
	<Button type="text">Default</Button>
	<Button type="text" disabled={true}>
		Primary
	</Button>
```

### Sizes:

Besides default size, Button component provides three additional sizes.

```jsx
	<Button>Default</Button>
	<Button size="medium" type="primary">Medium</Button>
	<Button size="small" type="primary">Small</Button>
	<Button size="mini" type="primary">Mini</Button>
	<br/>
	<Button round>Default</Button>
	<Button size="medium" round type="danger">
		Medium
	</Button>
	<Button size="small" round type="danger">
		Small
	</Button>
	<Button size="mini" round type="danger">
		Mini
	</Button>
```
