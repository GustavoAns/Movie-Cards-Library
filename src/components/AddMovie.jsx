import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AddMovieFormTitle from './AddMovieFormTitle';
import AddMovieFormSubtitle from './AddMovieFormSubtitle';
import AddMovieFormImage from './AddMovieFormImage';
import AddMovieFormStoryline from './AddMovieFormStoryline';
import AddMovieFormRating from './AddMovieFormRating';
import AddMovieFormGenre from './AddMovieFormGenre';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  submit(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    // console.log(this.props.addMovie)
    return (
      <form data-testid="add-movie-form">
        <AddMovieFormTitle
          title={ title }
          handleChange={ this.handleChange }
        />
        <AddMovieFormSubtitle
          subtitle={ subtitle }
          handleChange={ this.handleChange }
        />
        <AddMovieFormImage
          imagePath={ imagePath }
          handleChange={ this.handleChange }
        />
        <AddMovieFormStoryline
          storyline={ storyline }
          handleChange={ this.handleChange }
        />
        <AddMovieFormRating
          rating={ rating }
          handleChange={ this.handleChange }
        />
        <AddMovieFormGenre
          genre={ genre }
          handleChange={ this.handleChange }
        />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.submit }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
