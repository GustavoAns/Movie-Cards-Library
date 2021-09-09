import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: this.props.searchText,
      bookmarkedOnly:this.props.bookmarkedOnly,
      selectedGenre: this.props.selectedGenre,
    };

    this.onSearchTextChangeTriger = this.onSearchTextChangeTriger.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  async onSearchTextChangeTriger(event) {
    const { name , value } = event.target;

    this.setState({
      [name]: value
    });

    await this.props.onSearchTextChange(event.target)
  }

  async onBookmarkedChange(event) {
    const { name , checked } = event.target;

    this.setState({
      [name]: checked
    });

    await this.props.onBookmarkedChange(event.target)
  }

  async onSelectedGenreChange(event) {
    const { name , value } = event.target;

    this.setState({
      [name]: value
    });

    await this.props.onSelectedGenreChange(event.target)
  }

  render() {
    // console.log(this.props)
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { onSearchTextChange, onSearchTextChangeTriger } = this
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
          onChange={ onSearchTextChangeTriger }
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