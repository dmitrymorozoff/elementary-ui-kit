import styled from "styled-components";
import { PropTypes } from "prop-types";

/** @component */
export const CardButtons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    flex-wrap: wrap;
`;

CardButtons.propTypes = {
    className: PropTypes.string,
};
