import React from 'react';
import PropTypes from 'prop-types';

class AddMovieFormImage extends React.Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="imagePath">
        Imagem
        <input
          data-testid="image-input"
          value={ imagePath }
          type="text"
          name="imagePath"
          id="imagePath"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default AddMovieFormImage;
