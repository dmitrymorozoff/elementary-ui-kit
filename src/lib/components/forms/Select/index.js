import React from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";
import { DownArrow } from "./../../icons/DownArrow";
import { SelectItem } from "./components/SelectItem";

const Icon = styled.div`
    min-width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s;
    transform: ${props => (props.open ? "rotate(180deg)" : "rotate(0)")};
`;

const SelectWrapper = styled.div`
    width: 220px;
    height: 45px;
    font-family: "Lato", sans-serif;
    position: relative;
`;

const SelectHeader = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    box-shadow: 0 4px 15px -6px #d8dadd;
    cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
    position: relative;
    background: ${props => (props.disabled ? "#f5f5f5" : "#fff")};
    opacity: ${props => (props.disabled ? "0.65" : "1")};
`;

const SelectElement = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    line-height: 45px;
    border: none;
    font-size: 15px;
    padding: 0 10px 0 10px;
    cursor: pointer;
    pointer-events: none;
    border-left: 2px solid #3a77f8;
    background: transparent;
    &::placeholder {
        color: #abb3c8;
    }
`;

const SelectItemsWrapper = styled.div`
    opacity: ${props => (props.open ? 1 : 0)};
    visibility: ${props => (props.open ? "visible" : "hidden")};
    position: absolute;
    left: 0;
    top: 55px;
    width: 220px;
    box-shadow: 0 4px 15px -6px #d8dadd;
    border-left: 2px solid #3a77f8;
    background: #fff;
    transition: 0.2s;
    transform: ${props => (props.open ? "translateY(0)" : "translateY(25px)")};
    z-index: 999;
`;

export class Select extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: {
                name: "",
                value: "",
            },
            isOpen: false,
        };
    }

    getSelectItems() {
        const { children } = this.props;
        return children.map((selectItem, index) => {
            const name = selectItem.props.children;
            const value = selectItem.props.value;
            const disabled = selectItem.props.disabled;
            return (
                <SelectItem
                    disabled={disabled}
                    onClick={!disabled ? this.handleSelectItem.bind(this, { name, value }) : null}
                    key={index.toString()}
                >
                    {selectItem.props.children}
                </SelectItem>
            );
        });
    }

    toggleSelect() {
        const { disabled } = this.props;
        if (!disabled) {
            this.setState({
                isOpen: !this.state.isOpen,
            });
        }
    }

    handleSelectItem({ name, value }) {
        const { onChange } = this.props;
        this.setState({
            selected: {
                name,
                value,
            },
        });
        onChange({ value, name });
        this.toggleSelect();
    }

    render() {
        const { placeholder, disabled } = this.props;
        const {
            isOpen,
            selected: { name },
        } = this.state;
        return (
            <SelectWrapper>
                <SelectHeader onClick={this.toggleSelect.bind(this)} disabled={disabled}>
                    <SelectElement placeholder={placeholder} readOnly={true} value={name} disabled={disabled} />
                    <Icon open={isOpen}>
                        <DownArrow />
                    </Icon>
                </SelectHeader>
                <SelectItemsWrapper open={isOpen}>{this.getSelectItems()}</SelectItemsWrapper>
            </SelectWrapper>
        );
    }
}

Select.defaultProps = {
    placeholder: "",
    disabled: false,
};

Select.propTypes = {
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    children: function(props, propName, componentName) {
        const prop = props[propName];
        let error = null;
        React.Children.forEach(prop, function(child) {
            if (child.type !== SelectItem) {
                error = new Error("`" + componentName + "` children should be of type `SelectItem`.");
            }
        });
        return error;
    },
};
