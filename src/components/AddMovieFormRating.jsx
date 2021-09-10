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

AddMovieFormRating.propTypes = {
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddMovieFormRating;
