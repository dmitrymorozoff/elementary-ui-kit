import React from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 275px;
    min-height: 260px;
    width: ${props => props.width};
    height: ${props => props.height};
    box-shadow: 0 8px 25px -6px #f2f2f6;
    position: relative;
    margin: ${props => (props.withImage ? "45px 10px 0 10px" : "10px")};
    border: 1px solid #f2f2f5;
    box-sizing: border-box;
    box-shadow: 0 15px 20px -15px rgba(0, 0, 0, 0.15), 0 55px 50px -35px rgba(0, 0, 0, 0.15);
    padding: 15px;
    transition: 0.5s;
    cursor: ${props => (props.hover ? "pointer" : "default")};
    &:hover {
        box-shadow: ${props =>
            props.hover
                ? "0 15px 10px -15px rgba(0, 0, 0, 0.15), 0 35px 50px -35px rgba(0, 0, 0, 0.15)"
                : "0 15px 20px -15px rgba(0, 0, 0, 0.15), 0 55px 50px -35px rgba(0, 0, 0, 0.15)"};
    }
`;

Card.defaultProps = {
    width: "275px",
    height: "260px",
};

Card.propTypes = {
    children: PropTypes.node,
    width: PropTypes.string,
    height: PropTypes.string,
    hover: PropTypes.bool,
    withImage: PropTypes.bool,
};
