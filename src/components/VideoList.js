import React from "react";
import PropTypes from "prop-types";
import VideoItem from "./VideoItem";

const propTypes = {
    videos: PropTypes.array,
};

const VideoList = ({ videos }) => {

    const renderedList = videos.map(video => {
        return <VideoItem video={ video } key={video.snippet.title}/>;
    });

    return (
        <div
            className="ui relaxed divided list"
        >
            { renderedList }
        </div>
    );
};

VideoList.propTypes = propTypes;

export default VideoList;