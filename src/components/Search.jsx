import React from "react";
import Table from "./Table"

const Search = (props) => {
  return (
    <>
      <form className="text-center" onSubmit={props.handleSubmit}>
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
