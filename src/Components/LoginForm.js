import React from 'react';
import logo from '../assets/evergaming-logo.png;
import { withRouter } from 'react-router';
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Segment,
  Message
} from 'semantic-ui-react';

class LoginForm extends React.Component {
  state = {
    username: '',
    password: ''
  };

  handleChange = (event, { name, value }) => {
    this.setState({
      [name]: value
    });
  };

  handleLoginSubmit = () => {
    fetch(`http://localhost:3000/api/v1/login`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.error) {
          alert('wrong!');
        } else {
          localStorage.setItem('token', data.token);
          //set the state of currentUser, to be the user that is logged in
          this.props.updateCurrentUser(data.user);
        }
      });
  };

  render() {
    return (
      <div className="login-form">
        {/*
     Heads up! The styles below are necessary for the correct render of this.
     You can do same with a CSS file, the main idea is that all the elements up to the `Grid`
     below must have a height of 100%.
   */}
        <Grid
          textAlign="center"
          style={{ height: '100%' }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              <Image src={logo} /> Log-in to your account
            </Header>

            <Form
              onSubmit={this.handleLoginSubmit}
              size="large"
              key="large"
              loading={this.props.authenticatingUser}
              error={this.props.failedLogin}
            >
              <Segment stacked>
                <Message
                  error
                  header={this.props.failedLogin ? this.props.error : null}
                />

                <Form.Input
                  label="username"
                  placeholder="username"
                  name="username"
                  onChange={this.handleChange}
                  value={this.state.username}
                />

                <Form.Input
                  type="password"
                  label="password"
                  placeholder="password"
                  name="password"
                  onChange={this.handleChange}
                  value={this.state.password}
                />

                <Button type="submit">Login</Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default withRouter(LoginForm);

// //line 57
// <style>
// {`
//   body > div,
//   body > div > div,
//   body > div > div > div.login-form {
//     height: 100%;
//   }
//   `}
//   </style>
