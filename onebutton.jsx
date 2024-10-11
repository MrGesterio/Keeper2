import React from 'react';

const OneButton = ({ onSelect, isSelected }) => {
  return (
    <button
      onClick={() => onSelect(1)}
      className={isSelected ? 'option-button selected' : 'option-button'}
    >
      Option 1
    </button>
  );
};

export default OneButton;