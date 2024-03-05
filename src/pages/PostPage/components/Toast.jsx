import React from 'react';
import completedIcon from '../../../assets/completedIcon.svg';
import closeIcon from '../../../assets/closeIcon.svg';
import styles from './toast.module.scss';

function Toast() {
  return (
    <div className={styles.toast}>
      <div className={styles.info}>
        <img src={completedIcon} alt="completed-icon" />
        <p className={styles.text}>URL이 복사 되었습니다.</p>
      </div>
      <button className={styles.closeButton} type="button">
        <img src={closeIcon} alt="close" />
      </button>
    </div>
  );
}

export default Toast;
