import React from "react";

const VideoListItem = ({ etag, id, snippet }) => {
  return (
    <div>
      <img
        alt={`thumbnail for ${snippet.title}`}
        src={snippet.thumbnails.default.url}
      />
      <a>{snippet.title}</a>
      <p>{snippet.description}</p>
    </div>
  );
};

export default VideoListItem;
