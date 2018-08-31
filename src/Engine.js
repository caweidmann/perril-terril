import _ from 'lodash';

const Engine = {
  lastClicked: -1,

  onCardClick(id) {
    if (this.lastClicked === -1) {
      const targetCard = _.find(this.board, { id });
      targetCard.selected = true;
      this.lastClicked = targetCard.id;
    } else {
      if (this.lastClicked === id) {
        const targetCard = _.find(this.board, { id });
        targetCard.selected = true;
      } else {
        const id = this.lastClicked;
        const targetCard = _.find(this.board, { id });
        targetCard.selected = false;
      }
      this.lastClicked = -1;
    }

    console.log('board', this.board);
    return this.board;
  },

  getBoard(size = 6) {
    return new Promise((resolve, reject) => {
      const numCards = size * size;

      this.getEmojis(numCards / 2)
        .then(urls => {
          const boardUrls = urls.concat(urls);
          this.board = boardUrls.map((url, id) => ({
            url,
            id,
            selected: false
          }));

          resolve(this.board);
        })
        .catch(reject);
    });
  },

  getEmojis(numEmoji) {
    return new Promise((resolve, reject) => {
      resolve(
        _.take(
          [
            'https://cdn57.androidauthority.net/wp-content/uploads/2016/05/female-emoji-new-york-times-840x517.jpg',
            'https://s.yimg.com/ny/api/res/1.2/JCsTKSlRc9hyqPBB9HFzgQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAwO2lsPXBsYW5l/http://media.zenfs.com/en_US/News/US-AFPRelax/shutterstock_21.ae545102943.original.jpg',
            'https://cdn57.androidauthority.net/wp-content/uploads/2016/05/female-emoji-new-york-times-840x517.jpg',
            'https://s.yimg.com/ny/api/res/1.2/JCsTKSlRc9hyqPBB9HFzgQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAwO2lsPXBsYW5l/http://media.zenfs.com/en_US/News/US-AFPRelax/shutterstock_21.ae545102943.original.jpg',
            'https://cdn57.androidauthority.net/wp-content/uploads/2016/05/female-emoji-new-york-times-840x517.jpg',
            'https://s.yimg.com/ny/api/res/1.2/JCsTKSlRc9hyqPBB9HFzgQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAwO2lsPXBsYW5l/http://media.zenfs.com/en_US/News/US-AFPRelax/shutterstock_21.ae545102943.original.jpg',
            'https://cdn57.androidauthority.net/wp-content/uploads/2016/05/female-emoji-new-york-times-840x517.jpg',
            'https://s.yimg.com/ny/api/res/1.2/JCsTKSlRc9hyqPBB9HFzgQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAwO2lsPXBsYW5l/http://media.zenfs.com/en_US/News/US-AFPRelax/shutterstock_21.ae545102943.original.jpg',
            'https://cdn57.androidauthority.net/wp-content/uploads/2016/05/female-emoji-new-york-times-840x517.jpg',
            'https://s.yimg.com/ny/api/res/1.2/JCsTKSlRc9hyqPBB9HFzgQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAwO2lsPXBsYW5l/http://media.zenfs.com/en_US/News/US-AFPRelax/shutterstock_21.ae545102943.original.jpg',
            'https://cdn57.androidauthority.net/wp-content/uploads/2016/05/female-emoji-new-york-times-840x517.jpg',
            'https://s.yimg.com/ny/api/res/1.2/JCsTKSlRc9hyqPBB9HFzgQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAwO2lsPXBsYW5l/http://media.zenfs.com/en_US/News/US-AFPRelax/shutterstock_21.ae545102943.original.jpg',
            'https://cdn57.androidauthority.net/wp-content/uploads/2016/05/female-emoji-new-york-times-840x517.jpg',
            'https://s.yimg.com/ny/api/res/1.2/JCsTKSlRc9hyqPBB9HFzgQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAwO2lsPXBsYW5l/http://media.zenfs.com/en_US/News/US-AFPRelax/shutterstock_21.ae545102943.original.jpg',
            'https://cdn57.androidauthority.net/wp-content/uploads/2016/05/female-emoji-new-york-times-840x517.jpg',
            'https://s.yimg.com/ny/api/res/1.2/JCsTKSlRc9hyqPBB9HFzgQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAwO2lsPXBsYW5l/http://media.zenfs.com/en_US/News/US-AFPRelax/shutterstock_21.ae545102943.original.jpg',
            'https://cdn57.androidauthority.net/wp-content/uploads/2016/05/female-emoji-new-york-times-840x517.jpg',
            'https://s.yimg.com/ny/api/res/1.2/JCsTKSlRc9hyqPBB9HFzgQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAwO2lsPXBsYW5l/http://media.zenfs.com/en_US/News/US-AFPRelax/shutterstock_21.ae545102943.original.jpg',
            'https://cdn57.androidauthority.net/wp-content/uploads/2016/05/female-emoji-new-york-times-840x517.jpg',
            'https://s.yimg.com/ny/api/res/1.2/JCsTKSlRc9hyqPBB9HFzgQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAwO2lsPXBsYW5l/http://media.zenfs.com/en_US/News/US-AFPRelax/shutterstock_21.ae545102943.original.jpg',
            'https://cdn57.androidauthority.net/wp-content/uploads/2016/05/female-emoji-new-york-times-840x517.jpg',
            'https://s.yimg.com/ny/api/res/1.2/JCsTKSlRc9hyqPBB9HFzgQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAwO2lsPXBsYW5l/http://media.zenfs.com/en_US/News/US-AFPRelax/shutterstock_21.ae545102943.original.jpg',
            'https://cdn57.androidauthority.net/wp-content/uploads/2016/05/female-emoji-new-york-times-840x517.jpg',
            'https://s.yimg.com/ny/api/res/1.2/JCsTKSlRc9hyqPBB9HFzgQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAwO2lsPXBsYW5l/http://media.zenfs.com/en_US/News/US-AFPRelax/shutterstock_21.ae545102943.original.jpg',
            'https://cdn57.androidauthority.net/wp-content/uploads/2016/05/female-emoji-new-york-times-840x517.jpg',
            'https://s.yimg.com/ny/api/res/1.2/JCsTKSlRc9hyqPBB9HFzgQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAwO2lsPXBsYW5l/http://media.zenfs.com/en_US/News/US-AFPRelax/shutterstock_21.ae545102943.original.jpg',
            'https://cdn57.androidauthority.net/wp-content/uploads/2016/05/female-emoji-new-york-times-840x517.jpg',
            'https://s.yimg.com/ny/api/res/1.2/JCsTKSlRc9hyqPBB9HFzgQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAwO2lsPXBsYW5l/http://media.zenfs.com/en_US/News/US-AFPRelax/shutterstock_21.ae545102943.original.jpg',
            'https://cdn57.androidauthority.net/wp-content/uploads/2016/05/female-emoji-new-york-times-840x517.jpg',
            'https://s.yimg.com/ny/api/res/1.2/JCsTKSlRc9hyqPBB9HFzgQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAwO2lsPXBsYW5l/http://media.zenfs.com/en_US/News/US-AFPRelax/shutterstock_21.ae545102943.original.jpg',
            'https://cdn57.androidauthority.net/wp-content/uploads/2016/05/female-emoji-new-york-times-840x517.jpg',
            'https://s.yimg.com/ny/api/res/1.2/JCsTKSlRc9hyqPBB9HFzgQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAwO2lsPXBsYW5l/http://media.zenfs.com/en_US/News/US-AFPRelax/shutterstock_21.ae545102943.original.jpg',
            'https://cdn57.androidauthority.net/wp-content/uploads/2016/05/female-emoji-new-york-times-840x517.jpg',
            'https://s.yimg.com/ny/api/res/1.2/JCsTKSlRc9hyqPBB9HFzgQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAwO2lsPXBsYW5l/http://media.zenfs.com/en_US/News/US-AFPRelax/shutterstock_21.ae545102943.original.jpg',
            'https://cdn57.androidauthority.net/wp-content/uploads/2016/05/female-emoji-new-york-times-840x517.jpg',
            'https://s.yimg.com/ny/api/res/1.2/JCsTKSlRc9hyqPBB9HFzgQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAwO2lsPXBsYW5l/http://media.zenfs.com/en_US/News/US-AFPRelax/shutterstock_21.ae545102943.original.jpg',
            'https://cdn57.androidauthority.net/wp-content/uploads/2016/05/female-emoji-new-york-times-840x517.jpg',
            'https://s.yimg.com/ny/api/res/1.2/JCsTKSlRc9hyqPBB9HFzgQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAwO2lsPXBsYW5l/http://media.zenfs.com/en_US/News/US-AFPRelax/shutterstock_21.ae545102943.original.jpg',
            'https://cdn57.androidauthority.net/wp-content/uploads/2016/05/female-emoji-new-york-times-840x517.jpg',
            'https://s.yimg.com/ny/api/res/1.2/JCsTKSlRc9hyqPBB9HFzgQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAwO2lsPXBsYW5l/http://media.zenfs.com/en_US/News/US-AFPRelax/shutterstock_21.ae545102943.original.jpg',
            'https://cdn57.androidauthority.net/wp-content/uploads/2016/05/female-emoji-new-york-times-840x517.jpg',
            'https://s.yimg.com/ny/api/res/1.2/JCsTKSlRc9hyqPBB9HFzgQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAwO2lsPXBsYW5l/http://media.zenfs.com/en_US/News/US-AFPRelax/shutterstock_21.ae545102943.original.jpg',
            'https://cdn57.androidauthority.net/wp-content/uploads/2016/05/female-emoji-new-york-times-840x517.jpg',
            'https://s.yimg.com/ny/api/res/1.2/JCsTKSlRc9hyqPBB9HFzgQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAwO2lsPXBsYW5l/http://media.zenfs.com/en_US/News/US-AFPRelax/shutterstock_21.ae545102943.original.jpg',
            'https://cdn57.androidauthority.net/wp-content/uploads/2016/05/female-emoji-new-york-times-840x517.jpg',
            'https://s.yimg.com/ny/api/res/1.2/JCsTKSlRc9hyqPBB9HFzgQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAwO2lsPXBsYW5l/http://media.zenfs.com/en_US/News/US-AFPRelax/shutterstock_21.ae545102943.original.jpg',
            'https://cdn57.androidauthority.net/wp-content/uploads/2016/05/female-emoji-new-york-times-840x517.jpg',
            'https://s.yimg.com/ny/api/res/1.2/JCsTKSlRc9hyqPBB9HFzgQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAwO2lsPXBsYW5l/http://media.zenfs.com/en_US/News/US-AFPRelax/shutterstock_21.ae545102943.original.jpg'
          ],
          numEmoji
        )
      );
    });
  }
};

export default Engine;
