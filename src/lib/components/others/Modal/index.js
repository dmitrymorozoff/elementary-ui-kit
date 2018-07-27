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
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 20px -15px, rgba(0, 0, 0, 0.15) 0px 55px 50px -35px;
    transition: 0.35s;
    transform: ${props => (props.open ? "translateY(0)" : "translateY(100%)")};
`;

export class Modal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { open, children } = this.props;
        return (
            <Outer open={open}>
                <Overlay>
                    <ModalItem open={open}>{children}</ModalItem>
                </Overlay>
            </Outer>
        );
    }
}

Modal.defaultProps = {
    open: false,
};

Modal.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};
