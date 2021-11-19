import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Status } from "../../models/Status";

export interface UserState {
    isLoggedIn: boolean,
    family: string | undefined,
    name: string | undefined
    status: Status
};

const initialState: UserState = {
    isLoggedIn: false,
    family: undefined,
    name: undefined,
    status: 'idle'
};

// export const login = createAsyncThunk(
//     'users/login',
//     async() => {
//         return new Promise<boolean>(() => true);
//     }
// )

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        login: (state) => {
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.isLoggedIn = false;
        }
    },
    extraReducers: (builder: ActionReducerMapBuilder<UserState>) => {
    }
});

export const selectFamily = (state: RootState): string => state.users.family as string;
export const selectLoginState = (state: RootState): boolean => state.users.isLoggedIn;

export default userSlice.reducer;