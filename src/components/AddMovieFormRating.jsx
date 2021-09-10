import React from 'react';
import PropTypes from 'prop-types';

class AddMovieFormRating extends React.Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          data-testid="rating-input"
          value={ rating }
          type="number"
          name="rating"
          id="rating"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default AddMovieFormRating;
