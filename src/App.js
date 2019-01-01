import React, { Fragment } from "react";
import _ from "lodash";

import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Profile from "./Components/Profile";
import LoginForm from "./Components/LoginForm";
import Nav from "./Components/Nav";
import NotFound from "./Components/NotFound";
// import Videos from "./Containers/Videos";

import VideoList from "./Components/VideoList";
import VideoDetail from "./Components/VideoDetail";
import SearchBar from "./Components/SeachBar";
import Playlist from "./Components/Playlist";
import { API_KEY } from "./keys";

const response = [
  {
    etag: '"m2yskBQFythfE4irbTIeOgYYfBU/XoCknp0EO0YWZcuTVD_GhkJp_-M"',
    id: { kind: "youtube#video", videoId: "KMZ7oOCXfP8" },
    snippet: {
      title:
        "Super Smart Dolphin Answers Questions - Extraordinary Animals - Earth",
      description:
        "The Echo Location Visualization and Interface System (ELVIS) allows Dolphins to make choices and answer questions. Luna the young Dolphin grasped the ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/KMZ7oOCXfP8/default.jpg"
        }
      }
    }
  },
  {
    etag: '"m2yskBQFythfE4irbTIeOgYYfBU/z_l0ThWRPFnv9um1eRM_O1LVUqU"',
    id: { kind: "youtube#video", videoId: "3Bk6VPWGi1o" },
    snippet: {
      title: 'The Complete 2016 SeaWorld "Blue Horizons" Dolphin Show',
      description:
        "Please SUBSCRIBE by clicking here: http://www.youtube.com/subscription_center?add_user=MoneySavingVideos To see my entire SeaWorld playlist click ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/3Bk6VPWGi1o/default.jpg"
        }
      }
    }
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchResults: response,
      selectedVideo: null,
      currentUser: {
        username: "Default User"
      }
    };
  }

  updateCurrentUser = user => {
    this.setState({ currentUser: user });
  };

  componentDidMount() {
    //see if there's a token
    //send that token to the backend
    //backend will send currentUser data

    let token = localStorage.getItem("token");
    if (token) {
      fetch(`http://localhost:3000/api/v1/profile`, {
        method: "GET",
        headers: {
          Authentication: `Bearer ${token}`
        }
      })
        .then(resp => resp.json())
        .then(data => {
          this.setState({
            currentUser: data.user
          });
        });
    }
    this.fetchVideos("GTA V Gameplay");
  }

  logout = () => {
    localStorage.removeItem(`token`);
    this.setState({ currentUser: null });
  };

  fetchVideos = text => {
    let searchTerm = text;
    this.setState({ selectedVideo: null, searchResults: [] });
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&q=${searchTerm}&type=video`
    )
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          searchResults: data.items,
          selectedVideo: data.items[0]
        })
      );
  };

  updateSelected = video => {
    this.setState({
      selectedVideo: video
    });
  };

  // componentDidMount() {
  //   this.fetchVideos("GTA V Gameplay");
  // }

  render() {
    let debounceSearch = _.debounce(this.fetchVideos, 200);
    return (
      <Fragment>
        <Nav logged_in={!!this.state.currentUser} logout={this.logout} />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route
            path="/home"
            render={() => (
              <div className="ui grid container">
                <SearchBar onChangeSearch={debounceSearch} />
                {this.state.selectedVideo ? (
                  <VideoDetail {...this.state.selectedVideo} />
                ) : (
                  "Loading..."
                )}
                <VideoList
                  selectVideo={this.updateSelected}
                  videos={this.state.searchResults}
                />
              </div>
            )}
          />
          <Route
            path="/profile"
            render={() => <Profile currentUser={this.state.currentUser} />}
          />
          <Route path="/playlist" render={() => <Playlist />} />
          <Route
            path="/login"
            render={() =>
              this.state.currentUser ? (
                <Redirect to="/profile" />
              ) : (
                <LoginForm updateCurrentUser={this.updateCurrentUser} />
              )
            }
          />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    );
  }
}

export default withRouter(App);
