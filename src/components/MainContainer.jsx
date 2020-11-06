import React, { Component } from "react";
import Search from "./Search"
import Header from "./Header"
import axios from "axios";

class MainContainer extends Component {
  state = {
    search: "",
    results: [],
    searchResults: [],
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=100&nat=us").then((res) => {
      this.setState({
        searchResults: res.data.results,
        results: res.data.results,
      });
    });
  }

  handleSearch = (event) => {
    event.preventDefault();

    let searchValue = this.state.search;
    const res = [];

    for (let i = 0; i < this.state.results.length; i++) {
      const firstName = this.state.results[i].name.first;
      if (firstName === searchValue) {
        res.push(this.state.results[i]);
      }
    }
    this.setState({ searchResults: res });
  };

  handleSort = () => {
    const users = this.state.results;
    const sortUsers = [];
    for (let i = 0; i < users.length; i++) {
      sortUsers.push(users[i]);
    }
    sortUsers.sort((a, b) => {
      if (a.name.first < b.name.first) {
        return -1;
      }
      if (a.name.first > b.name.first) {
        return 1;
      }
      return 0;
    });
    this.setState({ searchResults: sortUsers });
  };

  handleHeaderClick = () => {
    this.setState({ searchResults: this.state.results });
  };

  render() {
    return (
      <div>
        <Header handleHeaderClick={this.handleHeaderClick} />
        <Search
          search={this.state.search}
          results={this.state.results}
          searchResults={this.state.searchResults}
          handleSearch={this.handleSearch}
          handleInput={this.handleInput}
          handleSort={this.handleSort}
        />
      </div>
    );
  }

}

export default MainContainer;
