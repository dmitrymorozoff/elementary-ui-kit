### Basic Usage

Integrate information in a card container.

```jsx
<div style={{ display: "flex" }}>
    <Card>
        <CardContent>
            <Text fontSize="28px" gutterBottom={true}>
                Penguin
            </Text>
            <Text>
                They live almost exclusively in the Southern Hemisphere, with only one species, the Galapagos penguin,
                found north of the equator.
            </Text>
            <CardButtons>
                <Button fullWidth={true}>Learn More</Button>
            </CardButtons>
        </CardContent>
    </Card>
    <Card hover={true}>
        <CardContent>
            <Text fontSize="28px" gutterBottom={true}>
                Penguin
            </Text>
            <Text>
                They live almost exclusively in the Southern Hemisphere, with only one species, the Galapagos penguin,
                found north of the equator.
            </Text>
            <CardButtons>
                <Button>Share</Button>
                <Button type="primary">More</Button>
            </CardButtons>
        </CardContent>
    </Card>
</div>
```

### Card with image

```jsx
<div style={{ display: "flex" }}>
    <Card height="440px" withImage={true}>
        <CardMedia
            image="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0e3917e828b7c2502b0041813eff1294&auto=format&fit=crop&w=934&q=80"
            paddingTop="95%"
        />
        <CardContent>
            <Text fontSize="28px" gutterBottom={true}>
                Light
            </Text>
            <Text>
                The word usually refers to visible light, which is the visible spectrum that is visible to the human eye
                and is responsible for the sense of sight.
            </Text>
            <CardButtons>
                <Button>Share</Button>
                <Button type="primary">More</Button>
            </CardButtons>
        </CardContent>
    </Card>
    <Card height="440px" hover={true} withImage={true}>
        <CardMedia
            image="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0e3917e828b7c2502b0041813eff1294&auto=format&fit=crop&w=934&q=80"
            paddingTop="95%"
        />
        <CardContent>
            <Text fontSize="28px" gutterBottom={true}>
                Light
            </Text>
            <Text>
                The word usually refers to visible light, which is the visible spectrum that is visible to the human eye
                and is responsible for the sense of sight.
            </Text>
            <CardButtons>
                <Button fullWidth={true}>Learn more</Button>
            </CardButtons>
        </CardContent>
    </Card>
</div>
```
