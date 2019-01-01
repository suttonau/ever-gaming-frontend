import React from "react";

// embedded iframe (id.videoId)
//title & description

const VideoDetail = props => {
  const embedUrl = `https://www.youtube.com/embed/${props.id.videoId}`;

  return (
    <div className="twelve wide column">
      <div className="ui raised segments">
        <div className="ui segment">
          <div className="ui embed">
            <iframe title="youtube-detail" src={embedUrl} frameBorder="0" />
          </div>
        </div>
        <div className="ui segment">
          <h4>{props.snippet.title}</h4>
        </div>
        <div className="ui secondary segment">
          <p>{props.snippet.description}</p>
          <button>Add to Playlist</button>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
