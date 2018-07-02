import styled from "styled-components";
import { PropTypes } from "prop-types";

export const SelectItem = styled.div`
    font-family: "Lato", sans-serif;
    width: 100%;
    height: 45px;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    transition: 0.2s;
    &:hover {
        background-color: ${props => (props.disabled ? "#f5f5f5" : "#d8dadd")};
    }
    opacity: ${props => (props.disabled ? "0.65" : "1")};
    background-color: ${props => (props.disabled ? "#f5f5f5" : "transparent")};
    cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
`;

SelectItem.defaultProps = {
    children: null,
    disabled: false,
    value: "",
};

SelectItem.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    disabled: PropTypes.bool,
};
