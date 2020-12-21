import React from "react";
import PropTypes from "prop-types";
import VideoItem from "./VideoItem";

const propTypes = {
    videos: PropTypes.array,
};

const VideoList = ({ videos }) => {

    const renderedList = videos.map(video => {
        return <VideoItem video={ video } />;
    });

    return (
        <div>{ renderedList }</div>
    );
};

VideoList.propTypes = propTypes;

export default VideoList;