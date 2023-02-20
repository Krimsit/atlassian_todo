import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {api} from '../core';

export const fetchIssues = createAsyncThunk(
    'todo/fetchIssues',
    async (jqlQuery) => await api(
        {url: `?jql=${jqlQuery}&fields=id,summary,key`}),
);

const initialState = {
  issues: [],
  queryStatus: 'idle',
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    toggleIssue: (state, action) => {
      state.issues = state.issues.map(item => {
        return {
          ...item,
          checked: item.id === action.payload ? !item.checked : item.checked,
        };
      }).
      sort((a, b) => a.checked && a.id === action.payload ?
          1 :
          b.checked && b.id === action.payload ? -1 : 0);
    },
    deleteIssue: (state, action) => {
      state.issues = state.issues.filter(item => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchIssues.fulfilled, (state, action) => {
      state.issues = action.payload.issues;
      state.queryStatus = 'success';
    });
    builder.addCase(fetchIssues.pending, (state) => {
      state.issues = [];
      state.queryStatus = 'loading';
    });
    builder.addCase(fetchIssues.rejected, (state) => {
      state.issues = [];
      state.queryStatus = 'error';
    });
  },
});

export const {toggleIssue, deleteIssue} = todoSlice.actions;

export default todoSlice.reducer;