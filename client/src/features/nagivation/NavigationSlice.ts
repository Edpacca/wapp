import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ActivePage } from "../../models/ActivePage";
import { Status } from "../../models/Status";


export interface NavigationState {
    status: Status
    value: ActivePage
}

const initialState: NavigationState = {
    status: 'idle',
    value: 'home'
}

export const navigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        changePage: (state, action: PayloadAction<ActivePage>) => {
            state.value = action.payload;
        }
    }
});

export const { changePage } = navigationSlice.actions;
export const selectActivePage = (state: RootState) => state.navigation.value;

export default navigationSlice.reducer;