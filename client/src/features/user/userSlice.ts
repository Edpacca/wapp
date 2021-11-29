import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { AuthenticationRequest } from "../../models/AuthenticationRequest";
import { Status } from "../../models/Status";
import { Guest } from '../../models/Guest';

export interface UserState {
    isLoggedIn: boolean,
    family: string | undefined,
    members: Guest[],
    status: Status,
    token: string | undefined,
};

const initialState: UserState = {
    isLoggedIn: false,
    family: undefined,
    members: [],
    status: 'idle',
    token: undefined
};

export const userLogin = createAsyncThunk(
    'users/userLogin',
    async(request: AuthenticationRequest) => {

        const response = await fetch(`${process.env.REACT_APP_EXPRESS_SERVER}/login`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request)})
            .then(response => response.json());
            
        return response;
    }
)

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        logout: (state) => {
            state.isLoggedIn = false;
            state.family = undefined;
            state.members = [];
            state.status ='idle';
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
            if (action.payload.length > 0) {
                state.family = action.payload.family;
                state.members = action.payload.members;
                state.isLoggedIn = true;
                state.status = 'idle'
                state.token = action.payload.token;
            } else {
                state = initialState;
            }
        })
    }
});

export const selectFamily = (state: RootState): string => state.users.family as string;
export const selectMembers = (state: RootState): Guest[] => state.users.members;
export const selectLoginState = (state: RootState): boolean => state.users.isLoggedIn;

export default userSlice.reducer;