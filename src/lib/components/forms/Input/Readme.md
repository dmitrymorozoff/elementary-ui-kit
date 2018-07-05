### Basic Usage:

```jsx
<Input margin="8px" placeholder="Type a text"/>
<Input margin="8px" placeholder="Password" type="password" />
<Input margin="8px" placeholder="Type a text" fullWidth={true} />
```

### Disabled

```jsx
<Input margin="8px" placeholder="Type a text" disabled={true} value="Disabled" />
```

### Error

```jsx
<Input margin="8px" placeholder="Error" error={true} />
```

### Input with icon

Add an icon to indicate input type.

```jsx
<Input margin="8px" placeholder="Place Input" leftIconComponent={<Search />} />
<Input margin="8px" placeholder="Place Input" rightIconComponent={<RightArrow/>} />
```
