import React from 'react';
import './button.scss';
import { useNavigate } from 'react-router-dom';

// 버튼 컴포넌트 정의
function Button({ children, buttonStyle, buttonAble, src }) {
  const className = `${buttonStyle} ${buttonAble}`;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(src); // 해당 URL로 이동
  };
  return (
    <div>
      <button type="button" onClick={handleClick} className={className}>
        {children}
      </button>
    </div>
  );
}

export default Button;
