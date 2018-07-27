### Basic Usage

Switch is used for switching between two opposing states.

```jsx
<div style={{ margin: "8px", display: "flex" }}>
    <div style={{  margin: "0 8px 0 0" }}>
        <Switch />
    </div>
    <div style={{  margin: "0 8px" }}>
        <Switch color="#a3fc"/>
    </div>
</div>
<div style={{ margin: "8px", display: "flex" }}>
    <div style={{  margin: "0 8px 0 0" }}>
        <Switch checked={true}/>
    </div>
    <div style={{  margin: "0 8px" }}>
        <Switch checked={true}  color="#a3fc"/>
    </div>
</div>
```

### Disabled

```jsx
<div style={{ margin: "8px" }}>
    <Switch disabled={true}  />
</div>
<div style={{ margin: "8px" }}>
    <Switch disabled={true} checked={true}  />
</div>
```

### Default checked

```jsx
<div style={{ margin: "8px" }}>
    <Switch defaultChecked={true} />
</div>
```
