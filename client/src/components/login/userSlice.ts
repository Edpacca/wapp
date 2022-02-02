import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { AuthenticationRequest } from "../../models/AuthenticationRequest";
import { Status } from "../../models/Status";
import { Guest } from "../../models/Guest";
import { WappError } from "../../models/WappError";

export interface UserState {
    family: string | undefined,
    guests: Guest[],
    status: Status,
    errors: WappError[]
};

const initialState: UserState = {
    family: undefined,
    guests: [],
    status: 'idle',
    errors: []
};

export const userLogin = createAsyncThunk(
    'users/userLogin',
    async(request: AuthenticationRequest) => {

        const response = await fetch(`${process.env.REACT_APP_EXPRESS_SERVER}/login`, {
            credentials: 'include',
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token' : `${process.env.REACT_APP_CLIENT_TOKEN}`
            },
            body: JSON.stringify(request)})
            .then(response => response.json());
        
        return response;
    }
)

export const userLogout = createAsyncThunk(
    'users/userLogout',
    async() => {
        const response = await fetch(`${process.env.REACT_APP_EXPRESS_SERVER}/logout`, {
            credentials: 'include',
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token' : `${process.env.REACT_APP_CLIENT_TOKEN}`
            }
        }).then(response => response.json());
        return response;
    }
);

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        loginRefresh: (state, action) => {
            state.family = action.payload.family;
            state.guests = action.payload.guests;
            state.status = 'idle'
        },
        starterSelected: (state, action) => {

        },
        mainSelected: (state, action) => {

        },
        dessertSelected: (state, action) => {

        },
        dietSelected: (state, action) => {

        }
    },
    extraReducers: (builder: ActionReducerMapBuilder<UserState>) => {
        builder
        .addCase(userLogin.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(userLogin.rejected, (state) => {
            state.status = 'failed';
        })
        .addCase(userLogin.fulfilled, (state, action) => {

            if (action.payload.errors) {
                state.status = 'failed';
                state.errors = action.payload.errors;
            } else {
                state.status = 'idle';
                state.family = action.payload.family;
                state.guests = action.payload.guests;
                state.errors = [];
            }
        })
        .addCase(userLogout.pending, (state) => {
            state.status ='loading';
        })
        .addCase(userLogout.rejected, (state) => {
            state.family = undefined;
            state.guests = [];
            state.status ='idle';
            state.errors = [];
        })
        .addCase(userLogout.fulfilled, (state) => {
            state.family = undefined;
            state.guests = [];
            state.status ='idle';
            state.errors = [];
        })
    }
});

export const selectFamily = (state: RootState): string => state.users.family as string;
export const selectGuests = (state: RootState): Guest[] => state.users.guests;
export const selectLoginStatus = (state: RootState): Status => state.users.status;
export const selectErrors = (state: RootState): WappError[] => state.users.errors;

export default userSlice.reducer;