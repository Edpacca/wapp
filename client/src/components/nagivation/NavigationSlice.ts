import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { UserPage } from "../../models/ActivePage";
import { AdminPage } from "../../models/AdminPage";
import { Status } from "../../models/Status";


export interface NavigationState {
    status: Status
    userPage: UserPage
    adminPage: AdminPage
}

const initialState: NavigationState = {
    status: 'idle',
    userPage: 'home',
    adminPage: 'meals'
}

export const navigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        changePageUser: (state, action: PayloadAction<UserPage>) => {
            state.userPage = action.payload;
        },
        changePageAdmin: (state, action: PayloadAction<AdminPage>) => {
            state.adminPage = action.payload;
        },
    }
});

export const { changePageUser, changePageAdmin } = navigationSlice.actions;
export const selectPageUser = (state: RootState): UserPage => state.navigation.userPage;
export const selectPageAdmin = (state: RootState): AdminPage => state.navigation.adminPage;

export default navigationSlice.reducer;
