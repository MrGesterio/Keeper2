import React from 'react';

const OptionButtons = ({ onOptionChange, selectedOption }) => {
  const options = [
    { id: '# Hydra-Desktop-UserView-Bottom', photoId: 1 },
    { id: '# Hydra-Desktop-UserView', photoId: 2 },
    { id: '# Hydra-Mobile-UserView', photoId: 3 },
    { id: '# Hydra-Mobile', photoId: 4 },
    { id: '# Hydra-Desktop', photoId: 5 },
  ];

  return (
    <div className="option-buttons">
      {options.map((option, index) => (
        <button
          key={index}
          className={`option-button ${selectedOption === option.photoId ? 'active' : ''}`}
          onClick={() => onOptionChange(option.photoId)}
        >
          {option.id}
        </button>
      ))}
    </div>
  );
};

export default OptionButtons;