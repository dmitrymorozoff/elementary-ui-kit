import React from "react";
import styled from "styled-components";
import { lighten, darken } from "polished";
import { PropTypes } from "prop-types";

const defaultColors = props => {
    if (props.type === "primary") return props => props.theme.type.primary;
    if (props.type === "success") return props => props.theme.type.success;
    if (props.type === "warning") return props => props.theme.type.warning;
    if (props.type === "danger") return props => props.theme.type.danger;
    return "transparent";
};

export const Button = styled.button`
    font-family: "Lato", sans-serif;
    font-size: 15px;
    border: 2px solid ${props => props.theme.type.default};
    border-radius: 4px;
    background-color: transparent;
    line-height: 1;
    white-space: nowrap;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    text-align: center;
    padding: ${props => {
        if (props.size === "medium") return props.theme.size.medium;
        if (props.size === "small") return props.theme.size.small;
        if (props.size === "mini") return props.theme.size.mini;
        return props.theme.size.default;
    }};
    transition: 0.15s;
    margin: 8px;
    color: "#333";
    cursor: pointer;
    border: 1px solid
        ${props => {
            if (props.type === "primary") return props.theme.type.primary;
            if (props.type === "success") return props.theme.type.success;
            if (props.type === "warning") return props.theme.type.warning;
            if (props.type === "danger") return props.theme.type.danger;
            if (props.type === "text") return props.theme.type.text;
            return props.theme.type.default;
        }};
    color: ${props => {
        if (
            props.type === "primary" ||
            props.type === "success" ||
            props.type === "warning" ||
            props.type === "danger"
        ) {
            return "#fff";
        }
    }};
    background-color: ${defaultColors};
    border-radius: ${props => {
        if (props.round) {
            return "25px";
        }
    }};
    box-shadow: 0 8px 25px -6px ${defaultColors};
    &:hover {
        background-color: ${props => {
            if (props.type === "primary")
                return props => props.theme.type.primary && lighten(0.05, props.theme.type.primary);
            if (props.type === "success")
                return props => props.theme.type.success && lighten(0.05, props.theme.type.success);
            if (props.type === "warning")
                return props => props.theme.type.warning && lighten(0.05, props.theme.type.warning);
            if (props.type === "danger")
                return props => props.theme.type.danger && lighten(0.05, props.theme.type.danger);
            if (props.type === "text") return props => props.theme.type.text;
            return props => props.theme.type.default && lighten(0.09, props.theme.type.default);
        }};
    }
    &:active {
        background-color: ${props => {
            if (props.type === "primary")
                return props => props.theme.type.primary && darken(0.05, props.theme.type.primary);
            if (props.type === "success")
                return props => props.theme.type.success && darken(0.05, props.theme.type.success);
            if (props.type === "warning")
                return props => props.theme.type.warning && darken(0.05, props.theme.type.warning);
            if (props.type === "danger")
                return props => props.theme.type.danger && darken(0.05, props.theme.type.danger);
            if (props.type === "text") return props => props.theme.type.text;
            return props => props.theme.type.default && lighten(0.07, props.theme.type.default);
        }};
        color: ${props => {
            if (props.type === "text") {
                return props => props.theme.type.default && darken(0.25, props.theme.type.default);
            }
        }};
        box-shadow: 0 4px 15px -6px ${defaultColors};
    }
    &:focus {
        border-style: dashed;
    }
    &:disabled {
        cursor: not-allowed;
        opacity: 0.65;
        &:hover {
            background-color: ${defaultColors};
        }
    }
`;

Button.defaultProps = {
    theme: {
        type: {
            default: "#d8dadd",
            primary: "#1E68FA",
            success: "#2DD6AE",
            warning: "#FAAF27",
            danger: "#FE0C0D",
            text: "transparent",
        },
        size: {
            default: "14px 28px",
            medium: "10px 16px",
            small: "6px 18px",
            mini: "4px 14px",
        },
    },
};

Button.propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    round: PropTypes.bool,
    type: PropTypes.oneOf(["default", "primary", "success", "warning", "danger", "text"]),
    size: PropTypes.oneOf(["medium", "small", "mini"]),
};
