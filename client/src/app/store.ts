import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import navigationReducer from '../components/nagivation/NavigationSlice';
import userReducer from '../components/user/userSlice';
import foodReducer from '../components/food/foodSlice';
import adminReducer from '../components/admin/adminSlice';

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    users: userReducer,
    food: foodReducer,
    admin: adminReducer,
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
