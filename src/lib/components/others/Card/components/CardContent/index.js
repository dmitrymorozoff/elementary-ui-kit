import styled from "styled-components";
import { PropTypes } from "prop-types";

/** @component */
export const CardContent = styled.div`
    font-family: "Roboto", sans-serif;
    line-height: 1.5;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: ${props => props.padding};
    box-sizing: border-box;
`;

CardContent.defaultProps = {
    padding: "15px 5px",
};

CardContent.propTypes = {
    padding: PropTypes.string,
    className: PropTypes.string,
};
