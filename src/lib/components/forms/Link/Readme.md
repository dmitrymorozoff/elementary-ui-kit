### Basic Usage:

```jsx
<div>
    <Link
        onClick={() => {
            alert("Hello World!");
        }}
    >
        Hello world
    </Link>
</div>
```

### Sizes and Colors

```jsx
<div style={{ display: "flex" }}>
    <div style={{ margin: "8px" }}>
        <Link
            onClick={() => {
                alert("Hello World!");
            }}
        >
            Default
        </Link>
    </div>
    <div style={{ margin: "8px" }}>
        <Link
            size="medium"
            onClick={() => {
                alert("Hello World!");
            }}
        >
            Medium
        </Link>
    </div>
    <div style={{ margin: "8px" }}>
        <Link
            size="small"
            onClick={() => {
                alert("Hello World!");
            }}
        >
            Small
        </Link>
    </div>
    <div style={{ margin: "8px" }}>
        <Link
            size="mini"
            onClick={() => {
                alert("Hello World!");
            }}
        >
            Mini
        </Link>
    </div>
</div>
<div style={{ display: "flex" }}>
    <div style={{ margin: "8px" }}>
        <Link
        color="#000"
            onClick={() => {
                alert("Hello World!");
            }}
        >
            Black
        </Link>
    </div>
    <div style={{ margin: "8px" }}>
        <Link
        color="#4FD496"
            size="medium"
            onClick={() => {
                alert("Hello World!");
            }}
        >
            Green
        </Link>
    </div>
    <div style={{ margin: "8px" }}>
        <Link
        color="#FAAF27"
            size="small"
            onClick={() => {
                alert("Hello World!");
            }}
        >
            Orange
        </Link>
    </div>
    <div style={{ margin: "8px" }}>
        <Link
        color="#FE0C0D"
            size="mini"
            onClick={() => {
                alert("Hello World!");
            }}
        >
            Red
        </Link>
    </div>
</div>
```
