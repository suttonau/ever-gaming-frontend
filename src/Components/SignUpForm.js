import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Checkbox,
  Form,
  Grid,
  Header,
  Image,
  Segment,
  Message
} from "semantic-ui-react";
import logo from "./evergaming-logo.png";

const usersURL = "http://localhost:3000/api/v1/users";

class SignUpForm extends Component {
  state = {
    password: "",
    confirm_password: "",
    username: ""
  };

  postUser = data => {
    fetch(usersURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data);

        this.props.updateCurrentUser(data.user);
        localStorage.setItem("token", data.jwt);
        localStorage.setItem("user", JSON.stringify(data.user));
      });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.password === this.state.confirm_password) {
      let data = {
        user: {
          username: this.state.username,
          password: this.state.password
        }
      };
      this.postUser(data);
    } else {
      alert("Your passwords do not match");
    }
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="login-form">
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Image size="large" src={logo} />
            <Header as="h2" color="teal" textAlign="center">
              Sign-up for your account
            </Header>

            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label>Username:</label>
                <input
                  name="username"
                  onChange={this.handleChange}
                  placeholder="Username"
                />
              </Form.Field>
              <Form.Field>
                <label>Password:</label>
                <input
                  name="password"
                  onChange={this.handleChange}
                  placeholder="Password"
                />
              </Form.Field>
              <Form.Field>
                <label>Confirm Password:</label>
                <input
                  name="confirm_password"
                  onChange={this.handleChange}
                  placeholder="Confirm Password"
                />
              </Form.Field>
              <Button onClick={this.handleSubmit} type="submit">
                Create Account
              </Button>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default SignUpForm;

// <Form>
//   <Form.Field>
//     <label>First Name</label>
//     <input placeholder='First Name' />
//   </Form.Field>
//   <Form.Field>
//     <label>Password</label>
//     <input placeholder='Last Name' />
//   </Form.Field>
//   <Form.Field>
//     <Checkbox label='I agree to the Terms and Conditions' />
//   </Form.Field>
//   <Button type='submit'>Submit</Button>
// </Form>
