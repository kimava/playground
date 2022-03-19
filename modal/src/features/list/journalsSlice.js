import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1',
    title: 'First Journal',
    content: 'Yes!',
    mood: 'soso',
  },
  {
    id: '2',
    title: 'Second Journal',
    content: 'Hello',
    mood: 'soso',
  },
];

const journalsSlice = createSlice({
  name: 'journals',
  initialState,
  reducers: {
    journalAdded(state, action) {
      state.push(action.payload);
    },
    journalUpdated(state, action) {
      const { id, title, content, mood } = action.payload;
      const existingJournal = state.find((journal) => journal.id === id);
      if (existingJournal) {
        existingJournal.title = title;
        existingJournal.content = content;
        existingJournal.mood = mood;
      }
    },
    journalDeleted(state, action) {
      const { id } = action.payload;
      return state.filter((journal) => journal.id !== id);
    },
  },
});

export const { journalAdded, journalUpdated, journalDeleted, moodAdded } =
  journalsSlice.actions;

export default journalsSlice.reducer;
