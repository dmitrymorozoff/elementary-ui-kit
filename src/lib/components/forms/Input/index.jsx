import React from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";

const Icon = styled.div`
    min-width: 40px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    border-left: 2px solid
        ${props => {
            if (props.hasFocus && !props.error) {
                return "#3A77F8";
            }
            if (props.error) {
                return "#FE0C0D";
            }
            return "#d8dadd";
        }};
    height: 45px;
    width: 220px;
    transition: 0.2s;
    margin: 12px;
    background: ${props => (props.disabled ? "#F5F8FF" : "transparen")};
    box-shadow: 0 4px 15px -6px #d8dadd;
`;

export const InputElement = styled.input`
    font-family: "Lato", sans-serif;
    box-sizing: border-box;
    padding: ${props => {
        if (props.rightIconComponent) {
            return "0 0 0 10px";
        }
        if (props.leftIconComponent) {
            return "0 10px 0 0";
        }
        return "0 10px";
    }};
    font-size: 15px;
    border: none;
    height: 40px;
    line-height: 40px;
    outline: none;
    color: #333;
    transition: 0.3s;
    background: transparent;
    color: ${props => (props.disabled ? "#d8dadd" : "#333")};
    width: 100%;
    &::placeholder {
        color: #abb3c8;
    }
`;

export class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasFocus: false,
        };
    }

    setFocus(hasFocus) {
        this.setState({
            hasFocus,
        });
    }

    render() {
        const { hasFocus } = this.state;
        const { leftIconComponent, rightIconComponent, error } = this.props;
        return (
            <InputWrapper hasFocus={hasFocus} disabled={this.props.disabled} error={error}>
                {Boolean(leftIconComponent) && <Icon>{leftIconComponent}</Icon>}
                <InputElement {...this.props} onFocus={() => this.setFocus(true)} onBlur={() => this.setFocus(false)} />
                {Boolean(rightIconComponent) && <Icon>{rightIconComponent}</Icon>}
            </InputWrapper>
        );
    }
}

Input.defaultProps = {
    type: "text",
    leftIconComponent: null,
    rightIconComponent: null,
    disabled: false,
    required: false,
    error: false,
};

Input.propTypes = {
    type: PropTypes.string,
    leftIconComponent: PropTypes.node,
    rightIconComponent: PropTypes.node,
    disabled: PropTypes.bool,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool,
    error: PropTypes.bool,
};
