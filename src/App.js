import React, { Component } from 'react';
import './App.css';
import Engine from './Engine';
import DifficultySelector from './DifficultySelector';
import Board from './Board';

const DIFFICULTY_MAP = {
  easy: 4,
  medium: 6,
  hard: 8
};

class App extends Component {
  // to get board run
  //Engine.getBoard().then(boardObject => {}) // pass in size integer e.g. 4 I
  state = {
    cards: [],
    difficultyLevel: 'medium'
  };

  async componentDidMount() {
    await this.getBoard();
  }

  selectDifficultyLevel = difficultyLevel => {
    this.setState({ difficultyLevel }, () => {
      this.getBoard();
    });
  };

  getBoard = async () => {
    const cards = await Engine.getBoard(
      DIFFICULTY_MAP[this.state.difficultyLevel]
    );
    this.setState({ cards });
  };

  onCardClick = async id => {
    const cards = await Engine.onCardClick(id);
    this.setState({ cards });
  };

  render() {
    if (!this.state.cards.length) {
      return <div>loading cards...</div>;
    }

    return (
      <div className="App">
        <header className="App-header">
          <span className="App-logo">🐢</span>
          <h1 className="App-title">Perril Terril FTW!</h1>
        </header>
        <DifficultySelector
          selected={this.state.difficultyLevel}
          onClick={this.selectDifficultyLevel}
        />
        <Board
          cards={this.state.cards}
          onCardClick={this.onCardClick}
          difficultyLevel={this.state.difficultyLevel}
        />
      </div>
    );
  }
}

export default App;
