### Basic Usage

Select fields components are used for collecting user provided information from a list of options.

```jsx
<div style={{ display: "flex" }}>
    <div style={{ margin: "8px" }}>
        <Select
            placeholder="None"
            onChange={data => {
                console.log("Data", data);
            }}
        >
            <SelectItem value={1}>Option 1</SelectItem>
            <SelectItem value={2}>Option 2</SelectItem>
            <SelectItem value={3}>Option 3</SelectItem>
        </Select>
    </div>
</div>
```

### Disabled Option

```jsx
<Select
    placeholder="None"
    color="#E618E8"
    onChange={data => {
        console.log("data", data);
    }}
>
    <SelectItem value={1}>Option 1</SelectItem>
    <SelectItem value={2} disabled={true}>
        Option 2
    </SelectItem>
    <SelectItem value={3}>Option 3</SelectItem>
</Select>
```

### Disabled Select

Disable the whole component.

```jsx
<Select
    placeholder="None"
    disabled={true}
    onChange={data => {
        console.log("data", data);
    }}
>
    <SelectItem value={1}>Option 1</SelectItem>
    <SelectItem value={2}>Option 2</SelectItem>
    <SelectItem value={3}>Option 3</SelectItem>
</Select>
```

### Full Width Select

```jsx
<div style={{ margin: "8px 0" }}>
    <Select
        placeholder="None"
        fullWidth={true}
        onChange={data => {
            console.log("Data", data);
        }}
    >
        <SelectItem value={1}>Option 1</SelectItem>
        <SelectItem value={2}>Option 2</SelectItem>
        <SelectItem value={3}>Option 3</SelectItem>
    </Select>
</div>
```
