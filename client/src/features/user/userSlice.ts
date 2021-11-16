import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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

export const fetchDinner = createAsyncThunk(
    'user/fetchDinner',
    async() => {
        const response = await fetch(`${process.env.EXPRESS_SERVER}/dinner`, {
            method: 'GET',
            mode: 'cors'
        }).then(response => response.json())
        console.log(response);
        return response;
    }
)

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<UserState>) => {
        builder
            .addCase(fetchDinner.fulfilled, (state, action) => {
                state.family = action.payload
            })
            .addCase(fetchDinner.rejected, (state) => {
                state.status = 'failed'
            })
    }
});

export const selectFamily = (state: RootState): string => state.users.family as string;

export default userSlice.reducer;