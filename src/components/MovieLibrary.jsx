import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  // Talvez ->
  // Tive que modificar os codigos para o lint aceitar e o Jest tb
  onSearchTextChange(teste) {
    const { name, value } = teste;

    this.setState({
      [name]: value,
    });
  }

  onBookmarkedChange(teste) {
    const { name } = teste;
    const value = teste.type === 'checkbox' ? teste.checked : teste.value;

    this.setState({
      [name]: value,
    });
  }

  onSelectedGenreChange(teste) {
    const { name } = teste;
    const value = teste.type === 'checkbox' ? teste.value : teste.value;

    this.setState({
      [name]: value,
    });
  }

  addMovie(event) {
    const { subtitle, title, imagePath, storyline, rating, genre } = event;
    const { movies } = this.props;
    const teste = movies;
    const Obj = {
      title,
      subtitle,
      storyline,
      rating: Number(rating),
      imagePath,
      bookmarked: true,
      genre,
    };

    this.setState({
      movies: [...teste, Obj],
    });
    // console.log(teste);
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { state } = this;
    const { movies } = this.props;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          movies={ movies }
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList
          movies={ state.movies }
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
        />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
  })).isRequired,
};

export default MovieLibrary;
