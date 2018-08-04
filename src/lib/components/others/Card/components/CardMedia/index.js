import styled from "styled-components";
import { PropTypes } from "prop-types";

/** @component */
export const CardMedia = styled.div`
    width: 100%;
    box-sizing: border-box;
    height: ${props => props.height};
    background-image: url(${props => props.image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding: 10px;
    padding-top: ${props => props.paddingTop};
    border-radius: 5px;
    box-shadow: 0 15px 20px -15px rgba(0, 0, 0, 0.35),
        0 55px 50px -35px rgba(0, 0, 0, 0.15);
    margin-top: -25%;
`;

CardMedia.defaultProps = {
    height: "0",
    image: "",
    paddingTop: "50%",
};

CardMedia.propTypes = {
    height: PropTypes.string,
    image: PropTypes.string,
    paddingTop: PropTypes.string,
    className: PropTypes.string,
};
