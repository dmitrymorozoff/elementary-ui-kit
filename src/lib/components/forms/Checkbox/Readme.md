### Basic Usage

A group of options for multiple choices.
Used for selecting multiple values from several options.
If you use only one checkbox, it is the same as using Switch to toggle between two states

```jsx
<div style={{ display: "flex" }}>
    <div style={{ margin: "8px" }}>
        <Checkbox label="default" />
    </div>
    <div style={{ margin: "8px" }}>
        <Checkbox checked={true} label="checked" />
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
    <Checkbox disabled={true}  label="item 1" />
</div>
<div style={{ margin: "8px" }}>
    <Checkbox disabled={true} checked={true} label="item 2" />
</div>
```

### Default checked

```jsx
<div style={{ margin: "8px" }}>
    <Checkbox defaultChecked={true} label="item 1" />
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
