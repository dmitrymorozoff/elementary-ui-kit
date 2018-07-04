### Basic Usage:

A group of options for multiple choices.

```jsx
<div style={{ display: "flex" }}>
    <div style={{ margin: "8px" }}>
        <Checkbox />
    </div>
    <div style={{ margin: "8px" }}>
        <Checkbox checked={true} />
    </div>
    <div style={{ margin: "8px" }}>
        <Checkbox checked={true} label="item 1" />
    </div>
    <div style={{ margin: "8px" }}>
        <Checkbox checked={true} label="item 2" color="#a596e1" />
    </div>
</div>
```

### Disabled

```jsx
<div style={{ margin: "8px" }}>
    <Checkbox disabled={true}  />
</div>
<div style={{ margin: "8px" }}>
    <Checkbox disabled={true} checked={true}  />
</div>
```

### Default checked

```jsx
<div style={{ margin: "8px" }}>
    <Checkbox defaultChecked={true} />
</div>
```

### Checkboxes group

```jsx
<div style={{ display: "flex", flexDirection: "column" }}>
    <div style={{ margin: "8px" }}>
        <Checkbox label="Item 1" />
    </div>
    <div style={{ margin: "8px" }}>
        <Checkbox label="Item 2" />
    </div>
    <div style={{ margin: "8px" }}>
        <Checkbox label="Item 3" />
    </div>
    <div style={{ margin: "8px" }}>
        <Checkbox label="Item 4" />
    </div>
</div>
```
