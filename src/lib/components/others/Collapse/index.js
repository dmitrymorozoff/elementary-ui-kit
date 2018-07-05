import React from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";
import { CollapseTitle } from "./components/CollapseTitle";
import { CollapseContent } from "./components/CollapseContent";

const CollapseWrapper = styled.div`
    font-family: "Roboto", sans-serif;
    transition: 0.2s;
    width: ${props => (props.fullWidth ? "100%" : "500px")};
    background-color: #fff;
    border-left: 3px solid ${props => (props.isOpen ? props.color : "#fff")};
    border: 1px solid #f2f2f5;
    box-shadow: 0 15px 20px -15px rgba(0, 0, 0, 0.1), 0 55px 50px -35px rgba(0, 0, 0, 0.1);
    &:hover {
        border: 1px solid ${props => (props.isOpen ? "#f2f2f5" : props.color)};
    }
`;

export class Collapse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    getChildrens() {
        const { children, color } = this.props;
        const { isOpen } = this.state;
        if (!Array.isArray(children)) {
            return children;
        }
        return children.map((child, index) => {
            return index === 0 ? (
                <CollapseTitle
                    key={index.toString()}
                    isOpen={isOpen}
                    color={color}
                    onClick={this.toggleCollapse.bind(this)}
                >
                    {child.props.children}
                </CollapseTitle>
            ) : (
                <CollapseContent key={index.toString()} isOpen={isOpen}>
                    {child.props.children}
                </CollapseContent>
            );
        });
    }

    toggleCollapse() {
        const { onChange } = this.props;
        const newIsOpenValue = !this.state.isOpen;
        this.setState({
            isOpen: newIsOpenValue,
        });
        onChange(newIsOpenValue);
    }

    render() {
        const { fullWidth, color } = this.props;
        const { isOpen } = this.state;
        return (
            <CollapseWrapper fullWidth={fullWidth} isOpen={isOpen} color={color}>
                {this.getChildrens()}
            </CollapseWrapper>
        );
    }
}

Collapse.defaultProps = {
    fullWidth: false,
    color: "#3a77f8",
    onChange: () => {},
};

Collapse.propTypes = {
    onChange: PropTypes.func,
    children: PropTypes.node,
    fullWidth: PropTypes.bool,
    color: PropTypes.string,
};
