import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from '../reducerModule/userModule/userStore';

export const store = configureStore({
  reducer: {
      users: userSlice.reducer,
  }
});
