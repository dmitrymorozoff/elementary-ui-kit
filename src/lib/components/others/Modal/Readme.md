```jsx
    <Button
        onClick={() => setState({ open: !state.open})}
    >
        Open Modal
    </Button>
    <Modal className="my-modal" closeOnEsc={true} open={state.open}>
        <ModalMedia image="https://images.unsplash.com/photo-1486546910464-ec8e45c4a137?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a2c308fe62dad65bdfd4b1efb8bc6bb8&auto=format&fit=crop&w=2502&q=80" />
        <ModalTitle>Hey now, you're an allstar</ModalTitle>
        <ModalContent>
            Somebody once told me the world is gonna roll me. I ain't the
            sharpest tool in the shed. She was looking kind of dumb with her
            finger and her thumb in the shape of an "L" on her forehead.
            <br />
            <br />
            Well the years start coming and they don't stop coming. Fed to the rules
            and I hit the ground running.
        </ModalContent>
        <ModalActions>
            <Button margin="5px" onClick={() => setState({ open: !state.open})}>Disagree</Button>
            <Button margin="5px" type="primary" onClick={() => setState({ open: !state.open})}>
                Agree
            </Button>
        </ModalActions>
    </Modal>
```
