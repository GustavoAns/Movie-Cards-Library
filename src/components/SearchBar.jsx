import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    const { searchText, bookmarkedOnly, selectedGenre } = this.props;

    this.state = {
      searchText,
      bookmarkedOnly,
      selectedGenre,
    };

    this.onSearchTextChangeTriger = this.onSearchTextChangeTriger.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onSearchTextChangeTriger(event) {
    const { name, value } = event.target;
    const { onSearchTextChange } = this.props;

    this.setState({
      [name]: value,
    });

    onSearchTextChange(event.target);
  }

  onBookmarkedChange(event) {
    const { name, checked } = event.target;
    const { onBookmarkedChange } = this.props;

    this.setState({
      [name]: checked,
    });

    onBookmarkedChange(event.target);
  }

  onSelectedGenreChange(event) {
    const { name, value } = event.target;
    const { onSelectedGenreChange } = this.props;

    this.setState({
      [name]: value,
    });

    onSelectedGenreChange(event.target);
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { onSearchTextChangeTriger } = this;
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
            onChange={ this.onBookmarkedChange }
          />
        </label>
        <label data-testid="select-input-label" htmlFor="selectedGenre">
          Filtrar por gênero
          <select
            data-testid="select-input"
            value={ selectedGenre }
            name="selectedGenre"
            id="selectedGenre"
            onChange={ this.onSelectedGenreChange }
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

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
