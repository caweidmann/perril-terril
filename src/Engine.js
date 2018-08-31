import _ from 'lodash';

const Engine = {
  moves: [],

  onCardClick(id) {
    Engine.moves.push(id);
    const card = _.find(Engine.board, { id });
    card.selected = true;

    // Only one selected, nothing to do...
    if (!(Engine.moves.length > 1)) {
      return Promise.resolve(Engine.board);
    }

    // Same card clicked
    if (id === Engine.moves[Engine.moves.length - 2]) {
      Engine.moves.pop();
      return Promise.resolve(Engine.board);
    }

    const card1back = _.find(Engine.board, {
      id: Engine.moves[Engine.moves.length - 2]
    });

    if (card.url === card1back.url && Engine.moves.length % 2 === 0) {
      // Reset moves and mark winning cards
      Engine.moves = [];
      card.disabled = true;
      card1back.disabled = true;
    } else if (Engine.moves.length % 2 !== 0) {
      // We need to go back two cards, because if we only go back one then the board won't show the selected states
      // correctly. It would update the board accurately, but the user would not see the second card if it's not
      // a match as its state would be set to false... so we delay the flipping of cards by one move.
      const card2back = _.find(Engine.board, {
        id: Engine.moves[Engine.moves.length - 3]
      });
      card1back.selected = card1back.disabled;
      card2back.selected = card2back.disabled;
    }

    return Promise.resolve(Engine.board);
  },

  getBoard(size = 6) {
    Engine.moves = [];
    return new Promise((resolve, reject) => {
      const numCards = size * size;

      Engine.getEmojis(numCards / 2)
        .then(urls => {
          const boardUrls = urls.concat(urls);
          Engine.board = _.shuffle(
            boardUrls.map((url, id) => ({
              url,
              id,
              selected: false,
              disabled: false
            }))
          );

          resolve(Engine.board);
        })
        .catch(reject);
    });
  },

  getEmojis(numEmoji) {
    return new Promise((resolve, reject) => {
      resolve(
        Array.from(new Array(numEmoji)).map(
          (v, i) => `https://loremflickr.com/320/240?_=${i}`
        )
      );
    });
  }
};

export default Engine;
