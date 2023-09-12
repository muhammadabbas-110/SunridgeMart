import { configureStore, Action } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import rootReducer from '../slices/rootReducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const RootState = store.getState();


export default store;
