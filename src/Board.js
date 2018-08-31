import React, { Component } from 'react';

const Card = props => {
  return (
    <div>
      <div
        className={['card', props.selected ? 'flipped' : ''].join(' ')}
        onClick={() => props.onCardClick(props.id)}
      >
        <div className="front">1</div>
        <div className="back" style={{ backgroundImage: `url(${props.url})` }}>
          2
        </div>
      </div>
    </div>
  );
};

class Board extends Component {
  render() {
    return (
      <div className="card-container">
        {this.props.cards.map(card => (
          <Card key={card.id} {...card} onCardClick={this.props.onCardClick} />
        ))}
      </div>
    );
  }
}

Board.propTypes = {};

export default Board;
