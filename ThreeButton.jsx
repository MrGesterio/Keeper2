import React from 'react';

const ThreeButton = ({ onSelect, isSelected }) => {
  return (
    <button
      onClick={() => onSelect(3)}
      className={isSelected ? 'option-button selected' : 'option-button'}
    >
      Option 3
    </button>
  );
};

export default ThreeButton;