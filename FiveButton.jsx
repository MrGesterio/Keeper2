import React from 'react';

const FiveButton = ({ onSelect, isSelected }) => {
  return (
    <button
      onClick={() => onSelect(5)}
      className={isSelected ? 'option-button selected' : 'option-button'}
    >
      Option 5
    </button>
  );
};

export default FiveButton;