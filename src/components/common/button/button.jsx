import React from 'react';
import './button.scss';
import { plusAdd, trashCan } from './icon/icon';

function Button({ children, buttonStyle, buttonSize, buttonAble, onClick }) {
  const className = `${buttonStyle} ${buttonSize} ${buttonAble}`;
  let buttonContent;

  // buttonStyle prop 값에 따라 버튼 내용을 설정합니다.
  if (buttonStyle === 'plusAdd') {
    let index;
    if (buttonAble === 'Enabled-plusAdd') {
      index = 0;
    } else if (buttonAble === 'Disabled-plusAdd') {
      index = 1;
    } else if (buttonAble === 'Focus-plusAdd') {
      index = 2;
    } else if (buttonAble === 'Hover-plusAdd') {
      index = 3;
    } else if (buttonAble === 'Pressed-plusAdd') {
      index = 4;
    }
    buttonContent = (
      <img src={process.env.PUBLIC_URL + plusAdd[index]} alt="Plus Add" />
    );
  } else if (buttonStyle === 'trashCan') {
    let index;
    if (buttonAble === 'Enabled-trashCan') {
      index = 0;
    } else if (buttonAble === 'Disabled-trashCan') {
      index = 1;
    } else if (buttonAble === 'Focus-trashCan') {
      index = 2;
    } else if (buttonAble === 'Hover-trashCan') {
      index = 3;
    } else if (buttonAble === 'Pressed-trashCan') {
      index = 4;
    }
    buttonContent = <img src={trashCan[index]} alt="Trash Can" />;
  } else {
    buttonContent = children;
  }
  // 버튼을 렌더링합니다.
  return (
    <button type="button" onClick={onClick} className={className}>
      {buttonContent}
    </button>
  );
}

export default Button;
