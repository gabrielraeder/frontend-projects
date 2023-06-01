import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.props;

    let element;
    if (cardTrunfo) {
      element = <p data-testid="trunfo-card" id="trunfo-card">Super Trunfo</p>;
    }

    return (
      <div className="card">
        <h2 data-testid="name-card" id="cardName">{ cardName }</h2>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p data-testid="description-card" className="description">{ cardDescription }</p>
        <p data-testid="attr1-card">{`Atributo 1 => ${cardAttr1}`}</p>
        <p data-testid="attr2-card">{`Atributo 2 => ${cardAttr2}`}</p>
        <p data-testid="attr3-card">{`Atributo 3 => ${cardAttr3}`}</p>
        <p data-testid="rare-card">{ cardRare }</p>
        {element}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
