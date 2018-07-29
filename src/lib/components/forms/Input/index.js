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
                return props.color;
            }
            if (props.error) {
                return "#FE0C0D";
            }
            return "#d8dadd";
        }};
    height: 45px;
    width: ${props => (props.fullWidth ? "100%" : "220px")};
    transition: 0.2s;
    background: ${props => (props.disabled ? "#F5F8FF" : "transparen")};
    box-shadow: 0 4px 15px -6px #d8dadd;
    margin: ${props => props.margin};
`;

export const InputElement = styled.input`
    font-family: "Roboto", sans-serif;
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
    cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
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
        const {
            leftIconComponent,
            rightIconComponent,
            ...wrapperProps
        } = this.props;
        return (
            <InputWrapper hasFocus={hasFocus} {...wrapperProps}>
                {Boolean(leftIconComponent) && <Icon>{leftIconComponent}</Icon>}
                <InputElement
                    {...this.props}
                    onFocus={() => this.setFocus(true)}
                    onBlur={() => this.setFocus(false)}
                />
                {Boolean(rightIconComponent) && (
                    <Icon>{rightIconComponent}</Icon>
                )}
            </InputWrapper>
        );
    }
}

Input.defaultProps = {
    fullWidth: false,
    type: "text",
    leftIconComponent: null,
    rightIconComponent: null,
    disabled: false,
    required: false,
    error: false,
    margin: "0px",
    color: "#3A77F8",
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
    margin: PropTypes.string,
    fullWidth: PropTypes.bool,
    color: PropTypes.string,
    className: PropTypes.string,
};
