import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './Modal';
import { open } from './modalSlice';

const List = () => {
  const dispatch = useDispatch();
  const journals = useSelector((state) => state.journals);

  const showModal = (e) => {
    dispatch(open({ id: e.currentTarget.id }));
  };

  return (
    <ul>
      {journals.map((item) => (
        <li key={item.id}>
          <h3>{item.title}</h3>
          <div>
            <button id={item.id} onClick={showModal}>
              <i>v</i>
            </button>
            <Modal id={item.id} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default List;
