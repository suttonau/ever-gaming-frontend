import React from "react";

const VideoListItem = ({ etag, id, snippet, clickHandler }) => {
  return (
    <div className="item" onClick={clickHandler}>
      <div className="ui small image">
        <img
          alt={`thumbnail for ${snippet.title}`}
          src={snippet.thumbnails.default.url}
        />
        <div className="content">{snippet.title}</div>
        <p>{snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoListItem;

// const VideoListItem = ({ video, onVideoSelect }) => {
//   const imageUrl = video.snippet.thumbnails.default.url;
//
//   return (
//     <div className="item" onClick={() => onVideoSelect(video)}>
//       <div className="ui small image">
//         <img alt={video.snippet.title} src={imageUrl} />
//       </div>
//       <div className="content">{video.snippet.title}</div>
//     </div>
//   );
// };
