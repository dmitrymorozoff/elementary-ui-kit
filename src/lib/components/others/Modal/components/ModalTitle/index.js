import styled from "styled-components";
import { PropTypes } from "prop-types";

export const ModalTitle = styled.div`
    font-family: "Roboto", sans-serif;
    line-height: 1.5;
    font-size: 22px;
    width: 100%;
    text-align: center;
    padding: ${props => props.padding};
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
`;

ModalTitle.defaultProps = {
    padding: "5px 5px 15px 5px",
};

ModalTitle.propTypes = {
    padding: PropTypes.string,
    className: PropTypes.string,
};
