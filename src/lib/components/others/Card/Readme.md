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
            image="https://images.unsplash.com/photo-1491930722919-a5fc9ad49a75?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=182a62e29e620b1e9cf32109d62723a3&auto=format&fit=crop&w=1350&q=80"
            paddingTop="95%"
        />
        <CardContent>
            <Text fontSize="28px" gutterBottom={true}>
                Labrador
            </Text>
            <Text>
                The Labrador is one of the most popular breeds of dog in Canada, the United Kingdom and the United
                States.
            </Text>
            <CardButtons>
                <Button>Share</Button>
                <Button type="primary">More</Button>
            </CardButtons>
        </CardContent>
    </Card>
    <Card height="440px" hover={true} withImage={true}>
        <CardMedia
            image="https://images.unsplash.com/photo-1491930722919-a5fc9ad49a75?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=182a62e29e620b1e9cf32109d62723a3&auto=format&fit=crop&w=1350&q=80"
            paddingTop="95%"
        />
        <CardContent>
            <Text fontSize="28px" gutterBottom={true}>
                Labrador
            </Text>
            <Text>
                The Labrador is one of the most popular breeds of dog in Canada, the United Kingdom and the United
                States.
            </Text>
            <CardButtons>
                <Button fullWidth={true}>Learn more</Button>
            </CardButtons>
        </CardContent>
    </Card>
</div>
```
