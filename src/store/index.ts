import { configureStore } from '@reduxjs/toolkit';
import { messagesSlice } from './messages/messages.slice';
import { userSlice } from './user/user.slice';

export const store = configureStore({
  reducer: {
    messages: messagesSlice.reducer,
    user: userSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>