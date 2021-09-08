import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { movies } = this.props;
    return (
        
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar movies={this.props.movies[0]}/>
        <br />
        {/* <MovieList movies={this.props.movies} /> */}
        <AddMovie onClick/>
      </div>
    );
  }
}

export default MovieLibrary;