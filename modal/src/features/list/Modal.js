import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Modal.module.css';

const Modal = (props) => {
  const show = useSelector((state) => state.modal.show);
  const id = useSelector((state) => state.modal.id);

  if (!show || props.id !== id) {
    return null;
  }

  return (
    <div className={styles.modal}>
      <p>edit</p>
      <p>delete</p>
    </div>
  );
};

export default Modal;
