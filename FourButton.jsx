import React from 'react';

const FourButton = ({ onSelect, isSelected }) => {
  return (
    <button
      onClick={() => onSelect(4)}
      className={isSelected ? 'option-button selected' : 'option-button'}
    >
      Option 4
    </button>
  );
};

export default FourButton;