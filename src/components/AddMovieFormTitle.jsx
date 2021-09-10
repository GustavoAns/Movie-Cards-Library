import React from 'react';
import PropTypes from 'prop-types';

class AddMovieFormTitle extends React.Component {
  render() {
    const { title, handleChange } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          data-testid="title-input"
          value={ title }
          type="text"
          name="title"
          id="title"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default AddMovieFormTitle;
