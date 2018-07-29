import React from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";

const getPropsColor = props => props.color;

const CheckboxWrapper = styled.label`
    font-family: "Roboto", sans-serif;
    position: relative;
    display: inline-block;
    font-size: 15px;
    height: 25px;
    padding-left: ${props => (props.label ? "32px" : "25px")};
    line-height: 25px;
    opacity: ${props => (props.disabled ? "0.65" : "1")};
    cursor: pointer;
`;

const CheckboxElement = styled.input.attrs({
    type: "checkbox",
})`
    transition: 0.2s;
    display: none;
`;

const Box = styled.span`
    position: absolute;
    width: 25px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: 0.4s;
    cursor: pointer;
    background-color: #d8dadd;
    border-radius: 30px;
    ${CheckboxElement}:checked + & {
        background-color: ${getPropsColor};
        box-shadow: 0 4px 25px -6px ${getPropsColor};
    }
    ${CheckboxElement}:focus + & {
        box-shadow: 0 0 1px ${getPropsColor};
    }
    &:before {
        position: absolute;
        content: "";
        left: 4px;
        bottom: 4px;
        transition: 0.4s;
        height: 17px;
        width: 17px;
        background-color: white;
        border-radius: 50%;
        ${CheckboxElement}:hover + & {
            transform: scale(0.75);
        }
        ${CheckboxElement}:checked + & {
            transform: scale(1);
        }
    }
`;

export class Checkbox extends React.Component {
    render() {
        const { disabled, color, label, className } = this.props;
        return (
            <CheckboxWrapper
                disabled={disabled}
                label={label}
                className={className}
            >
                <CheckboxElement {...this.props} />
                <Box color={color} />
                {label}
            </CheckboxWrapper>
        );
    }
}

Checkbox.defaultProps = {
    onChange: () => {},
    color: "#3a77f8",
    label: "",
};

Checkbox.propTypes = {
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    onChange: PropTypes.func,
    name: PropTypes.string,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    className: PropTypes.string,
};
