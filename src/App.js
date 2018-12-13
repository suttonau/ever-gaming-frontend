import React, { Fragment } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Profile from './Components/Profile';
import LoginForm from './Components/LoginForm';
import Nav from './Components/Nav';
import NotFound from './Components/NotFound';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      currentUser: null
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



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
