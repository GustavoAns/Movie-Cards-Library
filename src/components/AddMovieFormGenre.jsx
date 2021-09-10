import React from 'react';
import PropTypes from 'prop-types';

class AddMovieFormGenre extends React.Component {
  render() {
    const { genre, handleChange } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select
          data-testid="genre-input"
          value={ genre }
          name="genre"
          id="genre"
          onChange={ handleChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

export default AddMovieFormGenre;
