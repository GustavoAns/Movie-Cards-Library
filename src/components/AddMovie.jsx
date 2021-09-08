import React, { Component } from 'react';


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
    }
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState ({
      [name]: value
    });
  }

  submit(event) {
    event.preventDefault();
    const { onClick } = this.props
    onClick(this.state);
    this.setState ({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title">
        Título
          <input
          data-testid="title-input"
          value={ title }
          type="text"
          name="title"
          id="title"
          onChange={ this.handleChange }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
          <input
          data-testid="subtitle-input"
          value={ subtitle }
          type="text"
          name="subtitle"
          id="subtitle"
          onChange={ this.handleChange }
          />
        </label>
        <label data-testid="image-input-label" htmlFor="imagePath">
        Imagem
          <input
          data-testid="image-input"
          value={ imagePath }
          type="text"
          name="imagePath"
          id="imagePath"
          onChange={ this.handleChange }
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
          <textarea
          data-testid="storyline-input"
          value={ storyline }
          name="storyline"
          id="storyline"
          onChange={ this.handleChange }
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
          <input
          data-testid="rating-input"
          value={ rating }
          type="number"
          name="rating"
          id="rating"
          onChange={ this.handleChange }
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre">
          Gênero
          <select
          data-testid="genre-input"
          value={genre}
          name="genre"
          id="genre"
          onChange={this.handleChange}
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button
        data-testid="send-button"
        onClick={this.submit}
        >
          Adicionar filme
          </button>
      </form>
    );
  }
}

export default AddMovie;