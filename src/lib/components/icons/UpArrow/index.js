import React from "react";
import { PropTypes } from "prop-types";

export const UpArrow = props => {
    const { size, fill } = props;
    const defaultStyles = {};
    if (size) {
        defaultStyles.width = defaultStyles.height = size;
    }
    return (
        <svg xmlns="http://www.w3.org/2000/svg" style={Object.assign(defaultStyles, props.style)} viewBox="0 0 64 64">
            <path
                fill={fill}
                d="M3.352,48.296l28.56-28.328l28.58,28.347c0.397,0.394,0.917,0.59,1.436,0.59c0.52,0,1.04-0.196,1.436-0.59   c0.793-0.787,0.793-2.062,0-2.849l-29.98-29.735c-0.2-0.2-0.494-0.375-0.757-0.475c-0.75-0.282-1.597-0.107-2.166,0.456   L0.479,45.447c-0.793,0.787-0.793,2.062,0,2.849C1.273,49.082,2.558,49.082,3.352,48.296z"
            />
        </svg>
    );
};

UpArrow.defaultProps = {
    size: "14px",
    fill: "#abb3c8",
    style: {},
};

UpArrow.propTypes = {
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    fill: PropTypes.string,
    style: PropTypes.object,
};
