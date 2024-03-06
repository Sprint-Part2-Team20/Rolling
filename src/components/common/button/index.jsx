import React from 'react';
import './button.scss';

function Button({ children, buttonStyle, buttonSize, buttonAble, onClick }) {
  const className = `${buttonStyle} ${buttonSize} ${buttonAble}`;
  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
}

export default Button;
