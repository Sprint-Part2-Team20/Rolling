import React, { useState } from 'react';
import './DropDown.scss';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown">
      <button className="dropdown-button" type="button" onClick={toggleOpen}>
        Placeholder <span className="arrow">{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && (
        <div className="dropdown-list">
          <div className="dropdown-item">Text1</div>
          <div className="dropdown-item">Text2</div>
          <div className="dropdown-item">Text3</div>
          
        </div>
      )}
    </div>
  );
};

export default Dropdown;
