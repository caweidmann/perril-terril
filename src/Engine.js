import _ from 'lodash';

const Engine = {
  lastClicked: -1,

  onCardClick(id) {
    if (Engine.lastClicked === -1) {
      const targetCard = _.find(Engine.board, { id });
      targetCard.selected = true;
      Engine.lastClicked = targetCard.id;
    } else {
      if (Engine.lastClicked === id) {
        // do nothing, same card clicked
      } else {
        const targetCard = _.find(Engine.board, { id });
        targetCard.selected = true;
        if (
          targetCard.url === _.find(Engine.board, { id: this.lastClicked }).url
        ) {
          console.log('match');
          Engine.lastClicked = -1;
        }
      }
    }

    console.log('board', Engine.board);
    return Engine.board;
  },

  getBoard(size = 6) {
    return new Promise((resolve, reject) => {
      const numCards = size * size;

      Engine.getEmojis(numCards / 2)
        .then(urls => {
          const boardUrls = urls.concat(urls);
          Engine.board = _.shuffle(
            boardUrls.map((url, id) => ({
              url,
              id,
              selected: false
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
