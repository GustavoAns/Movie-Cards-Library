import React from 'react';
import PropTypes from 'prop-types';

class AddMovieFormStoryline extends React.Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <textarea
          data-testid="storyline-input"
          value={ storyline }
          name="storyline"
          id="storyline"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddMovieFormStoryline.propTypes = {
  storyline: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddMovieFormStoryline;
