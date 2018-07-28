import React from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";

const Outer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    height: 100%;
    z-index: 1;
    transition: 0.35s;
    opacity: ${props => (props.open ? "1" : "0")};
    visibility: ${props => (props.open ? "visible" : "hidden")};
`;

const Overlay = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.045);
`;

const ModalItem = styled.div`
    position: relative;
    width: 500px;
    padding: 20px;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 3;
    z-index: 2;
    border: 1px solid #f2f2f5;
    text-align: left;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 20px -15px,
        rgba(0, 0, 0, 0.15) 0px 55px 50px -35px;
    transition: 0.35s;
    transform: ${props => (props.open ? "scale(1)" : "scale(1.2)")};
`;

export class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.overlay = React.createRef();
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyUp, true);
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeyUp, true);
    }

    handleKeyUp(event) {
        const { closeOnEsc, onClose } = this.props;
        const KEY_CODE_ESC = 27;
        if (closeOnEsc && event.keyCode === KEY_CODE_ESC) {
            onClose();
        }
    }

    handleClose(event) {
        const { onClose } = this.props;
        if (this.overlay.current !== event.target) {
            return;
        }
        onClose();
    }

    render() {
        const { open, children, className } = this.props;
        return (
            <Outer open={open} tabIndex="-1" className={className}>
                <Overlay onClick={this.handleClose} innerRef={this.overlay}>
                    <ModalItem open={open}>{children}</ModalItem>
                </Overlay>
            </Outer>
        );
    }
}

Modal.defaultProps = {
    open: false,
    closeOnEsc: false,
};

Modal.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    closeOnEsc: PropTypes.bool,
    className: PropTypes.string,
};
