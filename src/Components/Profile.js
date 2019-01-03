import React from "react";
import { Card, Image } from "semantic-ui-react";
import { Redirect } from "react-router-dom";

const Profile = props => {
  // debugger
  let { currentUser } = props;
  // let { username } = currentUser

  return currentUser ? (
    <Card>
      <Image src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2F87zj5pga75f01.png&f=1" />
      <Card.Content>
        <Card.Header>{props.currentUser.username}</Card.Header>
      </Card.Content>
    </Card>
  ) : (
    <Redirect to="/login" />
  );
};

export default Profile;
// https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2F87zj5pga75f01.png&f=1
// http://www.wingsflight.org/images/default.png
