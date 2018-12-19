import React from "react";
import VideoListItem from "./VieoListItem";

const VideoList = props => {
  console.log(props);

  return (
    <div>
      {props.videos.map(video => (
        <VideoListItem key={video.id.videoId} {...video} />
      ))}
    </div>
  );
};

export default VideoList;
