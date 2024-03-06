import React from 'react';
import './button.scss';
import { plusAdd, trashCan } from '../../../assets/buttonIcon/icon';
import smiley from '../../../assets/add-emoji.svg';

function Button({ children, buttonStyle, buttonSize, buttonAble, onClick }) {
  const className = `${buttonStyle} ${buttonSize} ${buttonAble}`;
  let buttonContent;
  if (buttonStyle === 'PlusAdd') {
    let index;
    if (buttonAble === 'enabled-PlusAdd') {
      index = 0;
    } else if (buttonAble === 'disabled-PlusAdd') {
      index = 1;
    } else if (buttonAble === 'focus-PlusAdd') {
      index = 2;
    } else if (buttonAble === 'hover-PlusAdd') {
      index = 3;
    } else if (buttonAble === 'pressed-PlusAdd') {
      index = 4;
    }
    buttonContent = <img src={plusAdd[index]} alt="Plus Add" />;
  } else if (buttonStyle === 'TrashCan') {
    let index;
    if (buttonAble === 'enabled-TrashCan') {
      index = 0;
    } else if (buttonAble === 'disabled-TrashCan') {
      index = 1;
    } else if (buttonAble === 'focus-TrashCan') {
      index = 2;
    } else if (buttonAble === 'hover-TrashCan') {
      index = 3;
    } else if (buttonAble === 'pressed-TrashCan') {
      index = 4;
    }
    buttonContent = <img src={trashCan[index]} alt="Trash Can" />;
  } else if (buttonSize === 'large-icon') {
    buttonContent = (
      <>
        <img src={smiley} alt="Smiley" />
        <div>{children}</div>
      </>
    );
  } else {
    buttonContent = children;
  }
  return (
    <button type="button" onClick={onClick} className={className}>
      {buttonContent}
    </button>
  );
}

export default Button;
