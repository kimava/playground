import { configureStore } from '@reduxjs/toolkit';
import journalsReducer from '../features/list/journalsSlice';
import modalReducer from '../features/list/modalSlice';

export const store = configureStore({
  reducer: {
    journals: journalsReducer,
    modal: modalReducer,
  },
});
