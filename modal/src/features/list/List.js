import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './Modal';
import { open, close } from './modalSlice';

const List = () => {
  const dispatch = useDispatch();
  const modalRef = useRef();
  const modalShow = useSelector((state) => state.modal.show);
  const journals = useSelector((state) => state.journals);

  const showModal = (e) => {
    dispatch(open({ id: e.currentTarget.id }));
  };

  const closeModal = (e) => {
    if (modalShow && !modalRef.current.contains(e.target)) {
      dispatch(close());
    }
  };

  useEffect(() => {
    window.addEventListener('click', closeModal);
    return () => {
      window.removeEventListener('click', closeModal);
    };
  }, [modalShow]);

  return (
    <ul>
      {journals.map((item) => (
        <li key={item.id}>
          <h3>{item.title}</h3>
          <div>
            <button id={item.id} onClick={showModal}>
              <i>v</i>
            </button>
            <div ref={modalRef}>
              <Modal id={item.id} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default List;
