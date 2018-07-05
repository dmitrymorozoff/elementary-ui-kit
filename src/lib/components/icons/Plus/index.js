import React from "react";
import { PropTypes } from "prop-types";

export const Plus = props => {
    const { size, fill } = props;
    const defaultStyles = {};
    if (size) {
        defaultStyles.width = defaultStyles.height = size;
    }
    return (
        <svg xmlns="http://www.w3.org/2000/svg" style={Object.assign(defaultStyles, props.style)} viewBox="0 0 42 42">
            <polygon fill={fill} points="42,20 22,20 22,0 20,0 20,20 0,20 0,22 20,22 20,42 22,42 22,22 42,22 " />
        </svg>
    );
};

Plus.defaultProps = {
    size: "14px",
    fill: "#abb3c8",
    style: {},
};

Plus.propTypes = {
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    fill: PropTypes.string,
    style: PropTypes.object,
};
