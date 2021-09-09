import React, { Component } from 'react';
import Header from './components/Header';
import movies from './data'
import MovieLibrary from './components/MovieLibrary'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.addcard = this.addcard.bind(this)
  }

  async addcard(event) {
    const {subtitle, title, imagePath, storyline, rating, genre} = event
    const Obj = {
      title: [title],
      subtitle: [subtitle],
      imagePath: [imagePath],
      storyline: [storyline],
      rating: [rating],
      genre: [genre],
    }
    // movies.push(Obj)
    // console.log(event)
    await console.log(Obj)
  }

  render() {
    return (
      <div>
        <Header />
        {/* <MovieLibrary movies={movies}/> */}
        <MovieLibrary movies={movies} addcard={this.addcard}/>
      </div>
    );
  }
}


export default App;
