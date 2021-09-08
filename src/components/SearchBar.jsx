import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this)
  }

  onSearchTextChange(event) {
    console.log(event.target.value)
  }

  render() {
    // console.log(this.props)
    const { searchText } = this.state;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="searchText">
          Inclui o texto:
          <input
          value={ searchText }
          type="text"
          name="searchText"
          id="searchText"
          onChange={ this.onSearchTextChange }
          />
        </label>
      </form>
    );
  }
}

export default SearchBar;