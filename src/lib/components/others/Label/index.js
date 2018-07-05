import styled from "styled-components";
import { PropTypes } from "prop-types";

const defaultColors = props => {
    if (props.type === "primary") return props.theme.type.primary;
    if (props.type === "success") return props.theme.type.success;
    if (props.type === "warning") return props.theme.type.warning;
    if (props.type === "danger") return props.theme.type.danger;
    return "transparent";
};

export const Label = styled.div`
    display: inline-block;
    border: 1px solid ${defaultColors};
    width: auto;
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    background-color: ${defaultColors};
    padding: 4px 12px;
    text-transform: uppercase;
    box-shadow: 0 4px 20px -6px ${defaultColors};
    color: ${props => {
        if (props.type) {
            return "#fff";
        }
    }};
`;

Label.defaultProps = {
    theme: {
        type: {
            default: "#d8dadd",
            primary: "#3A77F8",
            success: "#4FD496",
            warning: "#FAAF27",
            danger: "#FE0C0D",
        },
    },
};

Label.propTypes = {
    theme: PropTypes.object,
    type: PropTypes.oneOf(["default", "primary", "success", "warning", "danger"]),
};
