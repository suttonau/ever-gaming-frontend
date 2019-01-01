import React from "react";

const SearchBar = props => (
  <div className="sixteen wide column">
    <div className="ui segment secondary">
      <div className="ui huge fluid input">
        <input onChange={e => props.onChangeSearch(e.target.value)} />
        <button>Search</button>
      </div>
    </div>
  </div>
);

export default SearchBar;
