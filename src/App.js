import React, { Component } from 'react';
import Header from './components/Header';
import movies from './data'
import MovieLibrary from './components/MovieLibrary'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <MovieLibrary movies={movies}/>
      </div>
    );
  }
}


export default App;
