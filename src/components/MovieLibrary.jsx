import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    }
    this.changeState = this.changeState.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  //Talvez ->
  changeState(teste) {
    const { name } = teste
    const value = teste.type === 'checkbox' ? teste.checked : teste.value

    this.setState({
      [name]: value,
    });
  }

  addMovie() {

  }

  render() {
    const { movies } = this.props;
    return (
        
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar 
        movies={this.props.movies}
        searchText={this.state.searchText}
        bookmarkedOnly={this.state.bookmarkedOnly}
        selectedGenre={this.state.selectedGenre}
        changeState={this.changeState}
        />
        <MovieList movies={movies}
        searchText={this.state.searchText}
        bookmarkedOnly={this.state.bookmarkedOnly}
        selectedGenre={this.state.selectedGenre}
        />
        <AddMovie onClick={this.addMovie}/>
      </div>
    );
  }
}

export default MovieLibrary;