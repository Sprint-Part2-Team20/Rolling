import React, { children } from 'react';
import './button.scss';

// 버튼 컴포넌트 정의
function Button({ children, buttonStyle, buttonAble }) {
  const className = `${buttonStyle} ${buttonAble}`;
  const handleClick = () => {
    window.location.href = 'https://www.google.com';
  };

  return (
    <div>
      <button onClick={handleClick} className={className}>
        {children}
      </button>
    </div>
  );
}

export default Button;
