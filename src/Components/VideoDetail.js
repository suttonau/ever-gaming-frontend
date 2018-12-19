import React from "react";

// embedded iframe (id.videoId)
//title & description
const VideoDetail = props => {
  const videoId = props.id.videoId;
  const embedUrl = `https://www.youtube.com/embed/${props.id.videoId}`;

  return (
    <div>
      <iframe title="youtube-detail" src={embedUrl} frameBorder="0" />
      <h2>{props.snippet.title}</h2>
      <div>{props.snippet.description}</div>
    </div>
  );
};
export default VideoDetail;
