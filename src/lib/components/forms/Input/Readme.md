### Basic Usage

Basic usage example.

```jsx
<div style={{ display: "flex", flexDirection: "column" }}>
    <div style={{ margin: "8px" }}>
        <Input placeholder="Type a text" />
    </div>
    <div style={{ margin: "8px" }}>
        <Input placeholder="Password" type="password" />
    </div>
</div>
```

### Disabled

```jsx
<div style={{ display: "flex", flexDirection: "column" }}>
    <div style={{ margin: "8px" }}>
        <Input placeholder="Type a text" disabled={true} value="Disabled" />
    </div>
</div>
```

### Error

```jsx
<div style={{ display: "flex", flexDirection: "column" }}>
    <div style={{ margin: "8px" }}>
        <Input placeholder="Error" error={true} />
    </div>
</div>
```

### Full width input

```jsx
<div style={{ display: "flex", flexDirection: "column" }}>
    <div style={{ margin: "8px", width: "100%" }}>
        <Input placeholder="Type a text" fullWidth={true} />
    </div>
</div>
```

### Input with icon

Add an icon to indicate input type.

```jsx
<div style={{ display: "flex", flexDirection: "column" }}>
    <div style={{ margin: "8px" }}>
        <Input placeholder="Type a text" leftIconComponent={<Search />} />
    </div>
    <div style={{ margin: "8px" }}>
        <Input placeholder="Type a text" rightIconComponent={<RightArrow />} />
    </div>
</div>
```
