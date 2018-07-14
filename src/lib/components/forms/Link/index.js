import styled from "styled-components";
import { PropTypes } from "prop-types";

export const Link = styled.a`
    font-family: "Roboto", sans-serif;
    font-size: ${props => {
        if (props.size === "medium") return props.theme.size.medium;
        if (props.size === "small") return props.theme.size.small;
        if (props.size === "mini") return props.theme.size.mini;
        return props.theme.size.default;
    }};
    color: #000;
    cursor: pointer;
    text-decoration: none;
    transition: 0.2s;
    padding: 0.2em 0.05em;
    border-bottom: 2px solid ${props => props.color};
    &:hover {
        color: ${props => props.color};
    }
`;

Link.defaultProps = {
    color: "#3a77f8",
    theme: {
        size: {
            default: "18px",
            medium: "16px",
            small: "14px",
            mini: "12px",
        },
    },
};

Link.propTypes = {
    children: PropTypes.node,
    size: PropTypes.oneOf(["medium", "small", "mini"]),
    theme: PropTypes.object,
    color: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    target: PropTypes.string,
};
