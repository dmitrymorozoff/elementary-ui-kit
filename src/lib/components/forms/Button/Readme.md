### Basic Usage:

```jsx
	<Button>Default</Button>
	<Button type="primary">Primary</Button>
	<Button type="success">Success</Button>
	<Button type="warning">Warning</Button>
	<Button type="danger">Danger</Button>
	<br/>
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

```jsx
	<Button type="text">Default</Button>
	<Button type="text" disabled={true}>
		Primary
	</Button>
```

### Sizes:

```jsx
	<Button>Default</Button>
	<Button size="medium">Medium</Button>
	<Button size="small">Small</Button>
	<Button size="mini">Mini</Button>
	<br/>
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
```

### Attributes:

| Attribute | Description        | Type    | Accepted values                                  | Default values |
| --------: | :----------------: | :-----: | :----------------------------------------------: | :------------: |
| disabled  | disable the button | boolean | true / false                                     | false          |
| round     | round the button   | boolean | true / false                                     | false          |
| type      | button type        | string  | default, primary, success, warning, danger, text | default        |
| size      | button size        | string  | madium, small, mini                              | ---            |

