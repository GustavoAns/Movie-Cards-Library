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
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  //Talvez ->
  onSearchTextChange(teste) {
    const { name } = teste
    const value = teste.type === 'checkbox' ? teste.checked : teste.value

    this.setState({
      [name]: value,
    });
  }

  onBookmarkedChange(teste) {
    const { name } = teste
    const value = teste.type === 'checkbox' ? teste.checked : teste.value

    this.setState({
      [name]: value,
    });
  }

  onSelectedGenreChange(teste) {
    const { name } = teste
    const value = teste.type === 'checkbox' ? teste.checked : teste.value

    this.setState({
      [name]: value,
    });
  }

  addMovie(event) {
    const {subtitle, title, imagePath, storyline, rating, genre} = event
    const teste = this.props.movies
    const Obj = {
      title: title,
      subtitle: subtitle,
      storyline: storyline,
      rating: Number(rating),
      imagePath: imagePath,
      bookmarked: true,
      genre: genre,
    }

    this.setState ({
      movies: [...teste, Obj],
    });
    console.log(teste)

    // this.props.addcard(event)
  }

  render() {
    const { movies } = this.props;
    return (
        
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar 
        movies={movies}
        searchText={this.state.searchText}
        bookmarkedOnly={this.state.bookmarkedOnly}
        selectedGenre={this.state.selectedGenre}
        onSearchTextChange={this.onSearchTextChange}
        onBookmarkedChange={this.onBookmarkedChange}
        onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.state.movies}
        searchText={this.state.searchText}
        bookmarkedOnly={this.state.bookmarkedOnly}
        selectedGenre={this.state.selectedGenre}
        />
        <AddMovie
        addMovie={this.addMovie}
        onClick={this.addMovie}
        />
      </div>
    );
  }
}

export default MovieLibrary;