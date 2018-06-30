import React from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";

export const Text = styled.p`
    font-family: "Lato", sans-serif;
    line-height: 1.5;
    font-size: ${props => props.fontSize};
    margin: 0;
    margin-bottom: ${props => (props.gutterBottom ? "8px" : 0)};
`;

Text.defaultProps = {
    fontSize: "14px",
    gutterBottom: false,
};

Text.propTypes = {
    fontSize: PropTypes.string,
    gutterBottom: PropTypes.bool,
};
