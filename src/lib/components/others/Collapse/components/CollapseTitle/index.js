import React from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";
import { lighten } from "polished";
import { DownArrow } from "../../../../icons/DownArrow";

const Wrapper = styled.div`
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    display: flex;
    align-items: center;
    padding: 16px 16px 16px 30px;
    cursor: pointer;
    color: ${props => (props.isOpen ? props.color : "#333")};
    transition: 0.2s;
    &:hover {
        color: ${props => props.color};
        background-color: ${props =>
            props.isOpen
                ? "transparent"
                : props.color && lighten(0.35, props.color)};
    }
`;

const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    width: 25px;
    height: 25px;
    transform: ${props => (props.isOpen ? "rotate(0)" : "rotate(-90deg)")};
    transition: 0.2s;
`;

export class CollapseTitle extends React.Component {
    render() {
        const { children, onClick, isOpen, color } = this.props;
        const propsToComponent = { isOpen, color };
        return (
            <Wrapper
                {...propsToComponent}
                onClick={() => {
                    onClick();
                }}
            >
                {children}
                <Icon {...propsToComponent}>
                    <DownArrow fill={color} />
                </Icon>
            </Wrapper>
        );
    }
}

CollapseTitle.defaultProps = {
    children: "",
    onClick: () => {},
    isOpen: false,
    color: "#3a77f8",
};

CollapseTitle.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func,
    isOpen: PropTypes.bool,
    color: PropTypes.string,
    className: PropTypes.string,
};
