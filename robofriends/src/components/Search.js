import React from 'react';

export const Search = props => {
  return (
    <div className="search-box">
      <h1>Search Robot</h1>
      <form>
        <input onChange={props.filterRobots} type="text" placeholder="Search" />
      </form>
    </div>
  );
};
