import React from "react";
import ReactDOM from "react-dom";
import {
    Modal,
    ModalContent,
    ModalTitle,
    Button,
    ModalActions,
    ModalMedia,
} from "../lib";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    handleClickOpen() {
        this.setState({ open: true });
    }

    handleClose() {
        this.setState({ open: false });
    }

    render() {
        const { open } = this.state;
        return (
            <React.Fragment>
                <Button onClick={this.handleClickOpen.bind(this)}>
                    Open Modal
                </Button>
                <Modal
                    className="my-modal"
                    closeOnEsc={true}
                    open={open}
                    onClose={this.handleClose.bind(this)}
                >
                    <ModalMedia image="https://images.unsplash.com/photo-1486546910464-ec8e45c4a137?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a2c308fe62dad65bdfd4b1efb8bc6bb8&auto=format&fit=crop&w=2502&q=80" />
                    <ModalTitle>Hey now, you're an allstar</ModalTitle>
                    <ModalContent>
                        Somebody once told me the world is gonna roll me. I
                        ain't the sharpest tool in the shed. She was looking
                        kind of dumb with her finger and her thumb in the shape
                        of an "L" on her forehead.
                        <br />
                        <br />
                        Well the years start coming and they don't stop coming.
                        Fed to the rules and I hit the ground running.
                    </ModalContent>
                    <ModalActions>
                        <Button margin="5px">Disagree</Button>
                        <Button margin="5px" type="primary">
                            Agree
                        </Button>
                    </ModalActions>
                </Modal>
            </React.Fragment>
        );
    }
}

// eslint-disable-next-line
ReactDOM.render(<App />, document.getElementById("root"));
