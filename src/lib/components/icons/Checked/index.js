import React from "react";
import { PropTypes } from "prop-types";

export const Checked = props => {
    const { size, fill } = props;
    const defaultStyles = {};
    if (size) {
        defaultStyles.width = defaultStyles.height = size;
    }
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            style={Object.assign(defaultStyles, props.style)}
            viewBox="0 0 406.834 406.834"
        >
            <polygon
                fill={fill}
                points="385.621,62.507 146.225,301.901 21.213,176.891 0,198.104 146.225,344.327 406.834,83.72 "
            />
        </svg>
    );
};

Checked.defaultProps = {
    size: "14px",
    fill: "#abb3c8",
    style: {},
};

Checked.propTypes = {
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    fill: PropTypes.string,
    style: PropTypes.object,
};
