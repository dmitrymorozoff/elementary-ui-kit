import styled from "styled-components";
import { PropTypes } from "prop-types";

/** @component */
export const ModalActions = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: auto;
    flex-wrap: wrap;
    padding: ${props => props.padding};
    box-sizing: border-box;
`;

ModalActions.defaultProps = {
    padding: "5px 20px 20px 20px",
};

ModalActions.propTypes = {
    padding: PropTypes.string,
    className: PropTypes.string,
};
