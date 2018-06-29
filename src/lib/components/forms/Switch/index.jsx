import React from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";

const getPropsColor = props => props.color;

const SwitchWrapper = styled.label`
    position: relative;
    display: inline-block;
    width: 50px;
    height: 25px;
    margin: 8px;
    opacity: ${props => (props.disabled ? "0.65" : "1")};
`;

const SwitchElement = styled.input.attrs({
    type: "checkbox",
})`
    display: none;
`;

const Slider = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: 0.4s;
    cursor: pointer;
    background-color: #d8dadd;
    border-radius: 30px;
    ${SwitchElement}:checked + & {
        background-color: ${getPropsColor};
        box-shadow: 0 4px 25px -6px ${getPropsColor};
    }
    ${SwitchElement}:focus + & {
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
        ${SwitchElement}:checked + & {
            transform: translateX(25px);
        }
    }
`;

export class Switch extends React.Component {
    render() {
        const { disabled, color } = this.props;
        return (
            <SwitchWrapper disabled={disabled}>
                <SwitchElement {...this.props} />
                <Slider color={color} />
            </SwitchWrapper>
        );
    }
}

Switch.defaultProps = {
    onChange: () => {},
    color: "#3a77f8",
};

Switch.propTypes = {
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    name: PropTypes.string,
    color: PropTypes.string,
};
