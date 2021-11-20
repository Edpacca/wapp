import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import navigationReducer from '../features/nagivation/NavigationSlice';
import userReducer from '../features/user/userSlice';
import foodReducer from '../features/food/foodSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    navigation: navigationReducer,
    users: userReducer,
    food: foodReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
