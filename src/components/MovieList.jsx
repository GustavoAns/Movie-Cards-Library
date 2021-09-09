import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.props;
    return (
      <div data-testid="movie-list" className="movie-list">
        { movies
        .filter(({ bookmarked, title }) => bookmarkedOnly ?
          bookmarked === true :
          title)
        .filter(({genre}) => genre.includes(selectedGenre))
        .filter(({ title, subtitle, storyline }) =>
        title.toLowerCase().includes(searchText.toLowerCase()) ||
        storyline.toLowerCase().includes(searchText.toLowerCase()) ||
        subtitle.toLowerCase().includes(searchText.toLowerCase())
        )
        .map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
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
