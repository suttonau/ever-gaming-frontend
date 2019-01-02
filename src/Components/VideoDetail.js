import React from "react";
import { Button, Icon } from "semantic-ui-react";

// embedded iframe (id.videoId)
//title & description

const VideoDetail = props => {
  const embedUrl = `https://www.youtube.com/embed/${props.video.id.videoId}`;

  return (
    <div className="twelve wide column">
      <div className="ui raised segments">
        <div className="ui segment">
          <div className="ui embed">
            <iframe title="youtube-detail" src={embedUrl} frameBorder="0" />
          </div>
        </div>
        <div className="ui segment">
          <h4>{props.video.snippet.title}</h4>
        </div>
        <div className="ui secondary segment">
          <p>{props.video.snippet.description}</p>
          <Button animated onClick={() => props.addToPlaylist(props.video)}>
            <Button.Content visible>Add to Playlist</Button.Content>
            <Button.Content hidden>
              <Icon name="save" />
            </Button.Content>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
