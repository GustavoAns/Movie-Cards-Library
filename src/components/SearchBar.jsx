import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly:false,
      selectedGenre: '',
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
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

  onSelectedGenreChange(event) {
    const { name , value } = event.target;

    this.setState({
      [name]: value
    });
  }

  render() {
    // console.log(this.props)
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'teste', label: 'Teste' }
    ]
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
        <label data-testid="select-input-label" htmlFor="selectedGenre">
          Filtrar por gênero
          <select
          data-testid="select-input"
          value={selectedGenre}
          name="selectedGenre"
          id="selectedGenre"
          onChange={this.onSelectedGenreChange}
          >
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;