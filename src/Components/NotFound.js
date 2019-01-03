import React, { Fragment } from "react";
import { Header, Image } from "semantic-ui-react";

const NotFound = () => (
  <Fragment>
    <Header size="huge" inverted color="purple">
      Page Not Found lol
    </Header>
    <Image src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.1and1.com%2Fdigitalguide%2Ffileadmin%2FDigitalGuide%2FTeaser%2F404-not-found-t.jpg&f=1" />
  </Fragment>
);

export default NotFound;
