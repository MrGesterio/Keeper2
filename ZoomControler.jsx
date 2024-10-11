import React from 'react';

const ZoomControler = ({ zoomLevel, setZoomLevel }) => {
  const handleZoomChange = (e) => {
    setZoomLevel(Number(e.target.value));
  };

  return (
    <div className="zoom-controls">
      <select value={zoomLevel} onChange={handleZoomChange}>
        <option value={25}>25%</option>
        <option value={40}>40%</option>
        <option value={65}>65%</option>
        <option value={70}>85%</option>
        <option value={85}>100%</option>
      </select>
    </div>
  );
};

export default ZoomControler;
