import styled from "styled-components";
import { PropTypes } from "prop-types";

/** @component */
export const ModalMedia = styled.div`
    width: 100%;
    box-sizing: border-box;
    height: ${props => props.height};
    background-image: url(${props => props.image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding: 10px;
    padding-top: ${props => (props.height ? 0 : props.paddingTop)};
    border-radius: 5px;
    box-shadow: 0 15px 20px -15px rgba(0, 0, 0, 0.35),
        0 55px 50px -35px rgba(0, 0, 0, 0.15);
    margin-left: ${props => (props.withMargin ? "-10%" : 0)};
    margin-top: ${props => (props.withMargin ? "-10%" : 0)};
`;

ModalMedia.defaultProps = {
    withMargin: true,
    image: "",
    paddingTop: "50%",
};

ModalMedia.propTypes = {
    withMargin: PropTypes.bool,
    height: PropTypes.string,
    image: PropTypes.string,
    paddingTop: PropTypes.string,
    className: PropTypes.string,
};
