import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      searchText: '',
      bookmarkedOnly:false,
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
  }

  onSearchTextChange(event) {
    const { name , value } = event.target;

    this.setState({
      [name]: value
    });
  }

  onBookmarkedChange(event) {
    const { name , checked } = event.target;

    this.setState({
      [name]: checked
    });
  }

  render() {
    // console.log(this.props)
    const { searchText, bookmarkedOnly } = this.state;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="searchText">
          Inclui o texto:
          <input
          data-testid="text-input"
          value={ searchText }
          type="text"
          name="searchText"
          id="searchText"
          onChange={ this.onSearchTextChange }
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="bookmarkedOnly">
          Mostrar somente favoritos
          <input
          data-testid="checkbox-input"
          checked={ bookmarkedOnly }
          type="checkbox"
          name="bookmarkedOnly"
          id="bookmarkedOnly"
          onChange={this.onBookmarkedChange}
          />
        </label>
      </form>
    );
  }
}

export default SearchBar;