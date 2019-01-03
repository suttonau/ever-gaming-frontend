import React from "react";
import VideoListItem from "./VideoListItem";
import VideoDetail from "./VideoDetail";

const Playlist = props => {
  console.log(props.myPlaylist);
  return (
    <div className="ui grid container">
      {props.selectedVideo ? (
        <VideoDetail video={props.selectedVideo} />
      ) : (
        "Loading..."
      )}
      <div className="four wide column">
        <h1>My Playlist</h1>
        <div className="ui relaxed items">
          {props.myPlaylist.map(video => (
            <VideoListItem
              clickHandler={() => props.selectVideo(video)}
              key={video.id.videoId}
              {...video}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Playlist;
