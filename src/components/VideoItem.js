import React from "react";
import PropTypes from "prop-types";
import "./VideoItem.css";

const propTypes = {
    video: PropTypes.object,
};

const VideoItem = (props) => {
    const { video } = props;
    return(
        <div className="video-item item">
            <img
                className="ui image"
                src = {video.snippet.thumbnails.medium.url}
            />
            <div className="content">
                <div className="header">
                    { video.snippet.title }
                </div>
                
            </div>
        </div>
    );
};

VideoItem.propTypes = propTypes;

export default VideoItem;