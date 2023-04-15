import { combineReducers, configureStore } from '@reduxjs/toolkit';
import messagesSlice from './messageSlice/messageSlice';

const rootReducer = combineReducers({
  messages: messagesSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
