### Basic Usage

Basic usage example.

```jsx
<div style={{ display: "flex", flexDirection: "column" }}>
    <div style={{ display: "flex" }}>
        <Input margin="8px" placeholder="First name" />
        <Input margin="8px" placeholder="Middle name" />
        <Input margin="8px" placeholder="Last name" />
    </div>
    <Input margin="8px" placeholder="Password" type="password" />
</div>
```

### Full width input

```jsx
<div style={{ display: "flex", flexDirection: "column" }}>
    <Input margin="8px" placeholder="Type a text" fullWidth={true} />
    <div style={{ display: "flex" }}>
        <Input margin="8px" placeholder="Type a text" fullWidth={true} />
        <Input margin="8px" placeholder="Type a text" fullWidth={true} />
        <Input margin="8px" placeholder="Type a text" fullWidth={true} />
    </div>
</div>
```

### Disabled

```jsx
<Input margin="8px" placeholder="Type a text" disabled={true} value="Disabled" />
```

### Error

```jsx
<Input margin="8px" placeholder="Error" error={true} />
```

### Input with icon

Add an icon to indicate input type.

```jsx
<Input margin="8px" placeholder="Place Input" leftIconComponent={<Search />} />
<Input margin="8px" placeholder="Place Input" rightIconComponent={<RightArrow/>} />
```
