import React from "react";
import logo from "./evergaming-logo.png";
import { Segment, Image } from "semantic-ui-react";

const SearchBar = props => (
  <div className="sixteen wide column">
    <Image src={logo} size="small" centered />
    <div className="ui segment secondary">
      <div className="ui huge fluid input">
        <input onChange={e => props.onChangeSearch(e.target.value)} />
        <button className="ui button">Search</button>
      </div>
    </div>
  </div>
);

export default SearchBar;
