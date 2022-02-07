import { nanoid } from '@reduxjs/toolkit';
import React from 'react';

const List = () => {
  const list = [
    { title: '1', id: nanoid() },
    { title: '2', id: nanoid() },
    { title: '3', id: nanoid() },
    { title: '4', id: nanoid() },
    { title: '5', id: nanoid() },
  ];

  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>
          <h3>{item.title}</h3>
          <button>
            <i>v</i>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;
