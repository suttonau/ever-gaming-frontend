import React, { Fragment } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Profile from './Components/Profile';
import LoginForm from './Components/LoginForm';
import Nav from './Components/Nav';
import NotFound from './Components/NotFound';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      currentUser: {
        username: "Default User"
      }
    }
  }

  updateUser = (user) => {
  this.setState({ currentUser: user })
  }

  componentDidMount(){
  //see if there's a token
  //send that token to the backend
  //backend will send currentUser data

    let token = localStorage.getItem('token')
    if(token) {
      fetch(`http://localhost:3000/api/v1/profile`, {
        method: "GET",
        headers: {
          "Authentication" : `Bearer ${token}`
        }
      }).then(resp => resp.json())
      .then(data => {
        this.setState({
          currentUser: data.user
        })
      })
    }
  }

  logout = () => {
    localStorage.removeItem(`token`);
    this.setState({currentUser: null})
  }

  render(){
      return (
        <Fragment>
          <Nav logged_in={!!this.state.currentUser} logout={this.logout}/>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/profile" />} />
            <Route exact path="/profile" render={() => <Profile currentUser={this.state.currentUser} />} />
            <Route exact path="/login" render={() => this.state.currentUser ?
              <Redirect to='/profile'/> :
              <LoginForm updateCurrentUser={this.updateCurrentUser}
              />
            }
          />
            <Route component={NotFound} />
          </Switch>
        </Fragment>
            )
          }
  }

export default withRouter(App);
