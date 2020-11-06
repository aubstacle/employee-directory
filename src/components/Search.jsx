import React from "react";
import Table from "./Table"
import "./Search.css"

const Search = (props) => {
  return (
    <>
      <form className="text-center" onSubmit={props.handleSearch}>
        <input
          type="text"
          placeholder="search by first name"
          onChange={props.handleInput}
          value={props.search}
          name="search"
          id="search"
        />
      </form>

      <Table person={props.searchResults} clickEvent={props.handleSort} />
    </>
  );
};

export default Search;
