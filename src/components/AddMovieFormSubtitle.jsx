import React from 'react';
import PropTypes from 'prop-types';

class AddMovieFormSubtitle extends React.Component {
  render() {
    const { subtitle, handleChange } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          data-testid="subtitle-input"
          value={ subtitle }
          type="text"
          name="subtitle"
          id="subtitle"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddMovieFormSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddMovieFormSubtitle;
