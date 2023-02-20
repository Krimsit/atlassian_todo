import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';

import todoReducer from './todo';
export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

setupListeners(store.dispatch);