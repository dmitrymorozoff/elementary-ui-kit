### Basic Usage

This link is actually a button with an onClick handler
Here is an example of a link with both an href and an onClick handler.

```jsx
<div style={{ display: "flex" }}>
    <div style={{ margin: "8px" }}>
        <Link
            onClick={() => {
                alert("Hello World!");
            }}
        >
            Default Link
        </Link>
    </div>
</div>
```

### Sizes

Links can be colored as well.

```jsx
<div style={{ display: "flex" }}>
    <div style={{ margin: "8px" }}>
        <Link
            onClick={() => {
                alert("Hello World!");
            }}
        >
            Default Link
        </Link>
    </div>
    <div style={{ margin: "8px" }}>
        <Link
            size="medium"
            onClick={() => {
                alert("Hello World!");
            }}
        >
            Medium Link
        </Link>
    </div>
    <div style={{ margin: "8px" }}>
        <Link
            size="small"
            onClick={() => {
                alert("Hello World!");
            }}
        >
            Small Link
        </Link>
    </div>
    <div style={{ margin: "8px" }}>
        <Link
            size="mini"
            onClick={() => {
                alert("Hello World!");
            }}
        >
            Mini Link
        </Link>
    </div>
</div>
```

### Colors

```jsx
<div style={{ display: "flex" }}>
    <div style={{ margin: "8px" }}>
        <Link
            color="#5510F8"
            onClick={() => {
                alert("Hello World!");
            }}
        >
            Black Link
        </Link>
    </div>
    <div style={{ margin: "8px" }}>
        <Link
            color="#E618E8"
            size="medium"
            onClick={() => {
                alert("Hello World!");
            }}
        >
            Green Link
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
            Orange Link
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
            Red Link
        </Link>
    </div>
</div>
```
