import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    myCards: [],
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    nameFilter: '',
    rareFilter: '',
    trunfoFilter: false,
  }

  excludeCard = (index) => {
    const { myCards, hasTrunfo } = this.state;
    const isItTrunfo = myCards[index].cardTrunfo && hasTrunfo;
    const spliceCards = myCards;
    spliceCards.splice(index, 1);
    this.setState({
      cardDeck: spliceCards,
      hasTrunfo: !isItTrunfo,
    });
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => {
      const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
      const maxV = 90;
      const maxTotal = 210;
      const tres = 3;
      const quatr = 4;
      const primeiro = parseInt(cardAttr1, 10);
      const segundo = parseInt(cardAttr2, 10);
      const terceiro = parseInt(cardAttr3, 10);
      const all = Object.values(this.state);
      all.splice(2, tres);
      all.splice(quatr);
      const isTrue = all.every((item) => item.length > 0);
      const sum = primeiro + segundo + terceiro <= maxTotal;
      const eachMinor90 = primeiro <= maxV && segundo <= maxV && terceiro <= maxV;
      const eachPositive = primeiro >= 0 && segundo >= 0 && terceiro >= 0;
      if (isTrue && sum && eachPositive && eachMinor90) {
        this.setState({
          isSaveButtonDisabled: false,
        });
      } else {
        this.setState({
          isSaveButtonDisabled: true,
        });
      }
    });
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { myCards, cardTrunfo, hasTrunfo } = this.state;
    const newCard = this.state;
    delete newCard.hasTrunfo;
    delete newCard.isSaveButtonDisabled;
    delete newCard.myCards;
    const arr = myCards;
    arr.push(newCard);
    let isTrue = false;
    if (cardTrunfo || hasTrunfo) isTrue = true;
    this.setState({
      myCards: arr,
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: isTrue,
      isSaveButtonDisabled: true,
    });
  };

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, hasTrunfo,
      isSaveButtonDisabled, myCards, nameFilter,
      rareFilter, trunfoFilter } = this.state;

    const filterCardsByName = myCards.filter((card) => {
      const nome = card.cardName;
      return nome.includes(nameFilter);
    });

    const filterCardsByrarity = filterCardsByName.filter((card) => {
      const rarity = card.cardRare;
      if (rareFilter === '' || rareFilter === 'todas') return card;
      return rarity === rareFilter;
    });

    const cards = filterCardsByrarity
      .map((card, index) => (
        <div key={ index } className="savedCard">
          <Card { ...card } />
          <button
            data-testid="delete-button"
            type="reset"
            onClick={ () => this.excludeCard(index) }
          >
            Excluir
          </button>
        </div>
      ));

    const findsuperTrunfo = myCards.filter((card) => card.cardTrunfo);

    const superTrunfo = findsuperTrunfo.map((card, index) => (
      <div key={ index } className="savedCard">
        <Card { ...card } />
        <button
          data-testid="delete-button"
          type="reset"
          onClick={ () => this.excludeCard(index) }
        >
          Excluir
        </button>
      </div>));

    return (
      <div className="app">
        <header>
          <h1>Tryunfo!</h1>
        </header>
        <main className="main">
          <fieldset className="fieldset">
            <Form
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              hasTrunfo={ hasTrunfo }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              onInputChange={ this.handleChange }
              onSaveButtonClick={ this.onSaveButtonClick }
            />
          </fieldset>
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </main>
        <div id="allCards">
          <label htmlFor="name-filter">
            Filtro por Nome:
            <br />
            <input
              name="nameFilter"
              value={ nameFilter }
              type="text"
              id="name-filter"
              data-testid="name-filter"
              placeholder="Nome da carta"
              onChange={ this.handleChange }
              disabled={ trunfoFilter }
            />
          </label>
          <br />
          <label htmlFor="rareFilter">
            Raridade:
            <select
              placeholder="Raridade"
              name="rareFilter"
              value={ rareFilter }
              id="rareFilter"
              data-testid="rare-filter"
              onChange={ this.handleChange }
              disabled={ trunfoFilter }
            >
              <option value="todas">Todas</option>
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          <label htmlFor="trunfoFilter">
            Super Trunfo
            <input
              data-testid="trunfo-filter"
              type="checkbox"
              name="trunfoFilter"
              id="trunfoFilter"
              checked={ trunfoFilter }
              onChange={ this.handleChange }
            />
          </label>
          <br />
          <div>
            { trunfoFilter ? superTrunfo : cards }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
