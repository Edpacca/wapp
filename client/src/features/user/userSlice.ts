import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { AuthenticationRequest } from "../../models/AuthenticationRequest";
import { Status } from "../../models/Status";
import { User } from '../../models/User';

export interface UserState {
    isLoggedIn: boolean,
    family: string | undefined,
    members: User[]
    status: Status
};

const initialState: UserState = {
    isLoggedIn: false,
    family: undefined,
    members: [],
    status: 'idle'
};

export const userLogin = createAsyncThunk(
    'users/userLogin',
    async(request: AuthenticationRequest) => {

        const response = await fetch(`${process.env.REACT_APP_EXPRESS_SERVER}/user/login`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
               //'authorization' : `Bearer ${token}`
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
                state.family = action.payload[0].family;
                state.members = action.payload;
                state.isLoggedIn = true;
                state.status = 'idle'
            } else {
                state = initialState;
            }
        })
    }
});

export const selectFamily = (state: RootState): string => state.users.family as string;
export const selectMembers = (state: RootState): User[] => state.users.members;
export const selectLoginState = (state: RootState): boolean => state.users.isLoggedIn;

export default userSlice.reducer;