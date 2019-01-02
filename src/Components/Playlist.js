import React from "react";
import VideoListItem from "./VideoListItem";

const Playlist = props => {
  console.log(props.myPlaylist);
  return (
    <div className="four wide column">
      <h1>My Playlist</h1>
      <div className="ui relaxed items">
        {props.myPlaylist.map(video => (
          <VideoListItem
            key={video.id.videoId}
            clickHandler={() => props.selectVideo(video)}
            {...video}
          />
        ))}
      </div>
    </div>
  );
};

export default Playlist;
