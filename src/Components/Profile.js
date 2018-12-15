import React from "react";
import { Card, Image } from "semantic-ui-react";
import { Redirect } from 'react-router-dom';

const Profile = (props) => {
  let { currentUser } = props
  let { username } = currentUser

  return currentUser ? (
    <Card>
      <Image src= 'http://www.wingsflight.org/images/default.png' />
      <Card.Content>
        <Card.Header>{currentUser.username}</Card.Header>
      </Card.Content>
    </Card>
  ) : <Redirect to='/login' />
}

export default Profile;
