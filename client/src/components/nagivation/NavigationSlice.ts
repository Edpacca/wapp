import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { UserPage } from "../../models/ActivePage";
import { AdminPage } from "../../models/AdminPage";
import { Status } from "../../models/Status";
import { InfoPage } from "../../models/InfoType";


export interface NavigationState {
    status: Status
    userPage: UserPage
    adminPage: AdminPage
    infoPage: InfoPage
}

const initialState: NavigationState = {
    status: 'idle',
    userPage: 'home',
    adminPage: 'summary',
    infoPage: 'none'
}

export const navigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        changePageUser: (state, action: PayloadAction<UserPage>) => {
            state.userPage = action.payload;
            state.infoPage = 'none';
        },
        changePageAdmin: (state, action: PayloadAction<AdminPage>) => {
            state.adminPage = action.payload;
        },
        changePageInfo: (state, action: PayloadAction<InfoPage>) => {
            state.infoPage = action.payload;
        }
}});

export const { changePageUser, changePageAdmin, changePageInfo } = navigationSlice.actions;
export const selectPageUser = (state: RootState): UserPage => state.navigation.userPage;
export const selectPageAdmin = (state: RootState): AdminPage => state.navigation.adminPage;
export const selectPageInfo = (state: RootState): InfoPage => state.navigation.infoPage;

export default navigationSlice.reducer;
