import React, { useState, useEffect } from 'react';
import './App.css';
import OptionButtons from '../shared/UI/OptionButtons';
import ZoomControler from '../shared/ZoomControler/ZoomControler';
import photo1 from './assets/photo1.png';
import photo2 from './assets/photo2.png';
import photo3 from './assets/photo3.png';
import photo4 from './assets/photo4.png';
import photo5 from './assets/photo5.png';

function App() {
  const [showPopup, setShowPopup] = useState(true); 
  const [selectedOption, setSelectedOption] = useState(null); 
  const [zoomLevel, setZoomLevel] = useState(100); 
  const [searchTerm, setSearchTerm] = useState(''); 
  const [filteredPhotos, setFilteredPhotos] = useState([]); 
  const [selectedPhotos, setSelectedPhotos] = useState([]); 

  const photos = [
    { src: photo1, size: '1440x1024', id: 1 },
    { src: photo2, size: '1440x1024', id: 2 },
    { src: photo3, size: '390x844', id: 3 },
    { src: photo4, size: '390x5109', id: 4 },
    { src: photo5, size: '1440x5597', id: 5 },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let tempPhotos = photos;

    if (searchTerm) {
      tempPhotos = tempPhotos.filter(photo =>
        photo.size.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedOption !== null) {
      tempPhotos = tempPhotos.filter(photo => photo.id === selectedOption);
      setSelectedPhotos(tempPhotos.map(photo => photo.id));
    } else {
      setSelectedPhotos([]);
    }

    setFilteredPhotos(tempPhotos);
  }, [searchTerm, selectedOption]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="app">
      <div className="top-bar">
        <div className="welcome-message">Hydra Landing Page (Community) View only</div>
        <div className="top-right-controls">
          <button>Log In</button>
          <ZoomControler zoomLevel={zoomLevel} setZoomLevel={setZoomLevel} />
        </div>
      </div>


      <div className="sidebar">
        <div className="search-container">
          <input
            type="text"
            className="search"
            placeholder="Find..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <OptionButtons onOptionChange={handleOptionChange} selectedOption={selectedOption} />
      </div>

      <div className="main-content">
        <div className="photo-container" style={{ transform: `scale(${zoomLevel / 100})` }}>
          {photos.map((photo) => (
            <div
              key={photo.id}
              className={`photo-item ${selectedPhotos.includes(photo.id) ? 'selected' : ''}`}
            >
              <img src={photo.src} alt={`Photo ${photo.id}`} draggable="true" />
              <div className="size-tag">Size: {photo.size}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
