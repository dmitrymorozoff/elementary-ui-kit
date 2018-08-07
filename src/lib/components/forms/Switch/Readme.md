### Basic Usage

Switch is used for switching between two opposing states.

```jsx
<div style={{ display: "flex" }}>
    <div style={{ margin: "8px" }}>
        <Switch />
    </div>
    <div style={{ margin: "8px" }}>
        <Switch color="#E618E8" />
    </div>
    <div style={{ margin: "8px" }}>
        <Switch checked={true} />
    </div>
    <div style={{ margin: "8px" }}>
        <Switch checked={true} color="#E618E8" />
    </div>
</div>
```

### Disabled

```jsx
<div style={{ display: "flex" }}>
    <div style={{ margin: "8px" }}>
        <Switch disabled={true} />
    </div>
    <div style={{ margin: "8px" }}>
        <Switch disabled={true} checked={true} />
    </div>
</div>
```

### Default checked

```jsx
<div style={{ margin: "8px" }}>
    <Switch defaultChecked={true} />
</div>
```
