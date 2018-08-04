import { PropTypes } from "prop-types";
import styled from "styled-components";

/** @component */
export const CollapseContent = styled.div`
    font-family: "Roboto", sans-serif;
    font-size: 15px;
    line-height: 1.5;
    transition: all 0.2s cubic-bezier(0.19, 1, 0.22, 1);
    overflow: hidden;
    height: ${props => (props.isOpen ? "auto" : "0")};
    padding: ${props => (props.isOpen ? " 5px 16px 30px 30px" : "0")};
    opacity: ${props => (props.isOpen ? "1" : "0")};
`;

CollapseContent.defaultProps = {
    isOpen: false,
};

CollapseContent.propTypes = {
    children: PropTypes.node,
    isOpen: PropTypes.bool,
    className: PropTypes.string,
};
