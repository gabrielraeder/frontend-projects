import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import CheckInput from './CheckInput';

export default class Form extends Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div>
        <h3>Adicionar nova carta</h3>
        <Input
          datatestid="name-input"
          type="text"
          id="name-input"
          label="Nome:"
          onInputChange={ onInputChange }
          value={ cardName }
          name="cardName"
        />
        <br />
        <br />
        <label htmlFor="description-input">
          Descrição:
          <br />
          <textarea
            data-testid="description-input"
            name="cardDescription"
            id="description-input"
            cols="30"
            rows="1"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <br />
        <Input
          datatestid="attr1-input"
          type="number"
          id="attr1-input"
          label="Atributo 1:"
          onInputChange={ onInputChange }
          value={ cardAttr1 }
          name="cardAttr1"
        />
        <br />
        <Input
          datatestid="attr2-input"
          type="number"
          id="attr2-input"
          label="Atributo 2:"
          onInputChange={ onInputChange }
          value={ cardAttr2 }
          name="cardAttr2"
        />
        <br />
        <Input
          datatestid="attr3-input"
          type="number"
          id="attr3-input"
          label="Atributo 3:"
          onInputChange={ onInputChange }
          value={ cardAttr3 }
          name="cardAttr3"
        />
        <br />
        <br />
        <Input
          datatestid="image-input"
          type="text"
          id="image-input"
          label="Imagem:"
          onInputChange={ onInputChange }
          value={ cardImage }
          name="cardImage"
        />
        <br />
        <label htmlFor="rare-input">
          Raridade:
          <select
            name="cardRare"
            id="rare-input"
            placeholder="Raridade"
            data-testid="rare-input"
            onChange={ onInputChange }
            value={ cardRare }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <br />

        { !hasTrunfo ? <CheckInput
          datatestid="trunfo-input"
          type="checkbox"
          id="trunfo-input"
          label="Super trunfo"
          onInputChange={ onInputChange }
          checked={ cardTrunfo }
          name="cardTrunfo"
        /> : 'Você já tem um Super Trunfo em seu baralho' }

        <br />
        <br />
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
