import styled from "styled-components";
import { PropTypes } from "prop-types";

/** @component */
export const ModalContent = styled.div`
    font-family: "Roboto", sans-serif;
    line-height: 1.5;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: ${props => props.padding};
    box-sizing: border-box;
`;

ModalContent.defaultProps = {
    padding: "15px 5px",
};

ModalContent.propTypes = {
    padding: PropTypes.string,
    className: PropTypes.string,
};
