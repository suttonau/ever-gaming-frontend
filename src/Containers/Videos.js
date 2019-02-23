import React, { Component } from 'react';
import VideoList from '../Components/VideoList';
import VideoDetail from '../Components/VideoDetail';
import SearchBar from '../Components/SeachBar';

//Sample API Response for 'dolphin' search
const response = [
  {
    etag: '"m2yskBQFythfE4irbTIeOgYYfBU/XoCknp0EO0YWZcuTVD_GhkJp_-M"',
    id: { kind: 'youtube#video', videoId: 'KMZ7oOCXfP8' },
    snippet: {
      title:
        'Super Smart Dolphin Answers Questions - Extraordinary Animals - Earth',
      description:
        'The Echo Location Visualization and Interface System (ELVIS) allows Dolphins to make choices and answer questions. Luna the young Dolphin grasped the ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/KMZ7oOCXfP8/default.jpg'
        }
      }
    }
  },
  {
    etag: '"m2yskBQFythfE4irbTIeOgYYfBU/z_l0ThWRPFnv9um1eRM_O1LVUqU"',
    id: { kind: 'youtube#video', videoId: '3Bk6VPWGi1o' },
    snippet: {
      title: 'The Complete 2016 SeaWorld "Blue Horizons" Dolphin Show',
      description:
        'Please SUBSCRIBE by clicking here: http://www.youtube.com/subscription_center?add_user=MoneySavingVideos To see my entire SeaWorld playlist click ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/3Bk6VPWGi1o/default.jpg'
        }
      }
    }
  }
];

class Videos extends Component {
  render() {
    return (
      <div className="Videos">
        <SearchBar />
        {this.selectedVideo ? (
          <VideoDetail {...this.selectedVideo} />
        ) : (
          'Loading...'
        )}
        <VideoList videos={response} />
      </div>
    );
  }
}

export default Videos;
