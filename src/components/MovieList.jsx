import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

// Nota 'Lembrar!!!' fazer esse MovieList receber apenas {movies} tratando tudo antes de enviar !
class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div data-testid="movie-list" className="movie-list">
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieList;
