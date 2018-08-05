import styled from "styled-components";
import { PropTypes } from "prop-types";

/** @component */
export const ModalTitle = styled.div`
    font-family: "Roboto", sans-serif;
    line-height: 1.5;
    font-size: 26px;
    width: 100%;
    text-align: center;
    padding: ${props => props.padding};
    box-sizing: border-box;
`;

ModalTitle.defaultProps = {
    padding: "20px 20px 10px 20px",
};

ModalTitle.propTypes = {
    padding: PropTypes.string,
    className: PropTypes.string,
};
