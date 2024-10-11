import React from 'react';

const TwoButton = ({ onSelect, isSelected }) => {
  return (
    <button
      onClick={() => onSelect(2)}
      className={isSelected ? 'option-button selected' : 'option-button'}
    >
      Option 2
    </button>
  );
};

export default TwoButton;