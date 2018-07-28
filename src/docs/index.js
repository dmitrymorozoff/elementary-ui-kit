import React from "react";
import ReactDOM from "react-dom";
import { Modal, ModalContent, Button } from "../lib";

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
                    <ModalContent>
                        Determine the max width of the dialog. The dialog width
                        grows with the size of the screen, this property is
                        useful on the desktop where you might need some coherent
                        different width size across your application. Set to
                        false to disable maxWidth.Determine the max width of the
                        dialog. The dialog width grows with the size of the
                        screen, this property is useful on the desktop where you
                        might need some coherent different width size across
                        your application. Set to false to disable
                        maxWidth.Determine the max width of the dialog. The
                        dialog width grows with the size of the screen, this
                        property is useful on the desktop where you might need
                        some coherent different width size across your
                        application. Set to false to disable maxWidth.Determine
                        the max width of the dialog. The dialog width grows with
                        the size of the screen, this property is useful on the
                        desktop where you might need some coherent different
                        width size across your application. Set to false to
                        disable maxWidth.
                    </ModalContent>
                </Modal>
            </React.Fragment>
        );
    }
}

// eslint-disable-next-line
ReactDOM.render(<App />, document.getElementById("root"));
