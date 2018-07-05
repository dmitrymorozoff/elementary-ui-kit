### Basic Usage:

```jsx
<div>
    <Select
        placeholder="None"
        onChange={data => {
            console.log("data", data);
        }}
    >
        <SelectItem value={1}>One</SelectItem>
        <SelectItem value={2}>Two</SelectItem>
        <SelectItem value={3}>Three</SelectItem>
    </Select>
</div>
<div style={{margin: "8px 0"}}>
    <Select
        placeholder="None"
        fullWidth={true}
        onChange={data => {
            console.log("data", data);
        }}
    >
        <SelectItem value={1}>One</SelectItem>
        <SelectItem value={2}>Two</SelectItem>
        <SelectItem value={3}>Three</SelectItem>
    </Select>
</div>
```

### Disabled option

```jsx
<Select
    placeholder="None"
    color="#a596e1"
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

### Disabled select

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
