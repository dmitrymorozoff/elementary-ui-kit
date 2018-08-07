Checkbox can be used alone to switch between two states.

### Basic Usage

A group of options for multiple choices.
Used for selecting multiple values from several options.
If you use only one checkbox, it is the same as using Switch to toggle between two states

```jsx
<div style={{ display: "flex" }}>
    <div style={{ margin: "8px" }}>
        <Checkbox label="Default" />
    </div>
    <div style={{ margin: "8px" }}>
        <Checkbox checked={true} label="Checked" />
    </div>
    <div style={{ margin: "8px" }}>
        <Checkbox checked={true} label="Option 1" />
    </div>
    <div style={{ margin: "8px" }}>
        <Checkbox checked={true} label="Option 2" color="#E618E8" />
    </div>
</div>
```

### Disabled

Disabled state for checkbox.

```jsx
<div style={{ margin: "8px" }}>
    <Checkbox disabled={true}  label="Option 1" />
</div>
<div style={{ margin: "8px" }}>
    <Checkbox disabled={true} checked={true} label="Option 2" />
</div>
```

### Default checked

```jsx
<div style={{ margin: "8px" }}>
    <Checkbox defaultChecked={true} label="Option 1" />
</div>
```

### Checkboxes group

It is used for multiple checkboxes which are bound in one group, and indicates whether one option is selected by checking if it is checked.

```jsx
<div style={{ display: "flex", flexDirection: "column" }}>
    <div style={{ margin: "8px" }}>
        <Checkbox defaultChecked={true} label="Option 1" />
    </div>
    <div style={{ margin: "8px" }}>
        <Checkbox label="Option 2" />
    </div>
    <div style={{ margin: "8px" }}>
        <Checkbox label="Option 3" />
    </div>
    <div style={{ margin: "8px" }}>
        <Checkbox label="Option 4" />
    </div>
    <div style={{ margin: "8px" }}>
        <Checkbox disabled={true} label="Disabled Option 5" />
    </div>
</div>
```
