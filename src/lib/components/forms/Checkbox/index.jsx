import React from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";

const CheckboxWrapper = styled.label`
    position: relative;
    display: inline-block;
    width: 50px;
    height: 25px;
    margin: 8px;
`;

const CheckboxElement = styled.input.attrs({
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
    ${CheckboxElement}:checked + & {
        background-color: #3a77f8;
        box-shadow: 0 4px 25px -6px #3a77f8;
    }
    ${CheckboxElement}:focus + & {
        box-shadow: 0 0 1px #3a77f8;
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
        ${CheckboxElement}:checked + & {
            transform: translateX(25px);
        }
    }
`;

export class Checkbox extends React.Component {
    render() {
        return (
            <CheckboxWrapper>
                <CheckboxElement {...this.props} />
                <Slider />
            </CheckboxWrapper>
        );
    }
}

Checkbox.defaultProps = {};

Checkbox.propTypes = {
    checked: PropTypes.bool,
};
