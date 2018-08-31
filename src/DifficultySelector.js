import React from 'react';

const DifficultySelector = props => {
  return (
    <ul className="difficulty-selector">
      <li
        className={props.selected === 'easy' ? 'active' : ''}
        onClick={() => props.onClick('easy')}
      >
        Easy
      </li>
      <li
        className={props.selected === 'medium' ? 'active' : ''}
        onClick={() => props.onClick('medium')}
      >
        Medium
      </li>
      <li
        className={props.selected === 'hard' ? 'active' : ''}
        onClick={() => props.onClick('hard')}
      >
        Hard
      </li>
    </ul>
  );
};

export default DifficultySelector;
