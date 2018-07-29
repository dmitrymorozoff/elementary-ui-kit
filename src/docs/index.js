import React from "react";
import ReactDOM from "react-dom";
import { Modal, ModalContent, ModalTitle, Button, ModalActions } from "../lib";

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
                    <ModalTitle>Ramphastos</ModalTitle>
                    <ModalContent>
                        Ramphastos is a genus of toucans, tropical and
                        subtropical near passerine birds from Mexico, and
                        Central and South America, which are brightly marked and
                        have enormous, often colourful, bills.
                    </ModalContent>
                    <ModalActions>
                        <Button margin="5px">Disagree</Button>
                        <Button margin="5px">Agree</Button>
                    </ModalActions>
                </Modal>
            </React.Fragment>
        );
    }
}

// eslint-disable-next-line
ReactDOM.render(<App />, document.getElementById("root"));
