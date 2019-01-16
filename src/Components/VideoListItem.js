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
      </div>
    </div>
  );
};

export default VideoListItem;
