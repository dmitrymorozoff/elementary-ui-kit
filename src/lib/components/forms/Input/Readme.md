### Basic Usage:

```jsx
    <Input placeholder="Type a text" />
    <Input placeholder="Password" type="password" />
```

### Disabled

```jsx
<Input placeholder="Type a text" disabled={true} value="Disabled" />
```

### Error

```jsx
<Input placeholder="Error" error={true} />
```

### Input with icon

Add an icon to indicate input type.

```jsx
    <Input placeholder="Place Input" leftIconComponent={<Search />} />
    <Input placeholder="Place Input" rightIconComponent={<RightArrow />} />
```
