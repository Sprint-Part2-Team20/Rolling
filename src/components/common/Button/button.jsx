import React from 'react';
import styles from './button.module.scss';

// 나중에 이미지 임포트 파일로 옮겨주기
import plus from '../../../assets/plus.svg';
import smileBlack from '../../../assets/smile.svg';
import smileWhite from '../../../assets/smile-white.svg';
import deleted from '../../../assets/deleted-black.svg';
import deletedWhite from '../../../assets/deleted-white.svg';

// Primary 버튼의 경우 모바일 반응형으로 만들자기엔 버튼이 사용되는 곳마다 너비값이
// 제각각이라 너비는 100%로 통일했습니다! 메인페이지에서 사용하는 버튼만
// 따로 만들어 주시면 될 것 같아요

// buttonStyle= 'plus'/'deleted'/'primary'/'secondary'/'outlined'
// buttonSize= 56/40/36/28
// disabled=true/false값을 가지는 표현식
function Button({
  children,
  buttonStyle,
  buttonSize,
  disabled = false,
  smile = false,
  onClick,
}) {
  if (buttonStyle === 'plus') {
    return (
      <button
        className={styles.plus}
        onClick={onClick}
        disabled={disabled}
        type="button"
      >
        <img src={plus} alt="plus" />
      </button>
    );
  }
  if (buttonStyle === 'deleted') {
    return (
      <button
        className={styles.deleted}
        onClick={onClick}
        disabled={disabled}
        type="button"
      >
        <img src={disabled ? deletedWhite : deleted} alt="deleted" />
      </button>
    );
  }
  if (buttonStyle === 'primary') {
    return (
      <button
        className={styles.primary}
        onClick={onClick}
        disabled={disabled}
        style={{ height: `${buttonSize}px` }}
        type="button"
      >
        {children}
      </button>
    );
  }
  if (buttonStyle === 'secondary') {
    return (
      <button
        className={styles.secondary}
        onClick={onClick}
        disabled={disabled}
        style={{ height: `${buttonSize}px` }}
        type="button"
      >
        {children}
      </button>
    );
  }
  if (buttonStyle === 'outlined') {
    return (
      <button
        className={styles.outlined}
        onClick={onClick}
        disabled={disabled}
        style={{ height: `${buttonSize}px` }}
        type="button"
      >
        {smile &&
          (disabled ? (
            <img src={smileWhite} alt="smileWhite" />
          ) : (
            <img src={smileBlack} alt="smileblack" />
          ))}
        {children}
      </button>
    );
  }
}

export default Button;
