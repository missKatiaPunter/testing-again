import React from "react";
import PropTypes from "prop-types";

const propTypes = {
    video: PropTypes.object,
};

const VideoItem = ({ video: { snippet: {title } }}) => {
    return(
        <div>
            { title }
        </div>
    );
};

VideoItem.propTypes = propTypes;

export default VideoItem;