import React, { Fragment } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const Nav = props => {
  let {
    location: { pathname }
  } = props;
  let logged_in = props.logged_in;
  let logout = props.logout;

  return (
    <Menu pointing secondary>
      {logged_in ? (
        <Fragment>
          <Menu.Item
            as={NavLink}
            color="blue"
            to="/home"
            name="Home"
            active={pathname === "/home"}
          />
          <Menu.Item
            as={NavLink}
            color="blue"
            to="/profile"
            name="Profile"
            active={pathname === "/profile"}
          />
          <Menu.Item
            as={NavLink}
            color="blue"
            to="/playlist"
            name="My Playlist"
            active={pathname === "/playlist"}
          />
          <Menu.Menu position="right">
            <Menu.Item to="/logout" name="Logout" onClick={logout} />
          </Menu.Menu>
        </Fragment>
      ) : (
        <Menu.Item
          as={NavLink}
          to="/login"
          name="Login"
          active={pathname === "/login"}
        />
      )}
    </Menu>
  );
};

export default withRouter(Nav);
