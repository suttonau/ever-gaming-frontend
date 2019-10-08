import React from "react";
import VideoListItem from "./VideoListItem";

//   console.log(props);
//
const VideoList = props => {
  return (
    <div className="four wide column">
      <div className="ui relaxed items">
        {props.videos.map(video => (
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

export default VideoList;

// const VideoList = ({ videos, onVideoSelect }) => {
//   const videoItems = videos.map(video => (
//     <VideoListItem
//       key={video.etag}
//       video={video}
//       onVideoSelect={onVideoSelect}
//     />
//   ));
//
//   return (
//     <div className="four wide column">
//       <div className="ui relaxed items">{videoItems}</div>
//     </div>
//   );
// };