import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { CreateFamily } from "../../models/CreateFamily";
import { Status } from "../../models/Status";
import { Guest } from '../../models/Guest';
import { AdminAuthenticationRequest } from "../../models/AdminAuthenticationRequest";

export interface AdminState {    
    guests: Guest[],
    status: Status,
};

const initialState: AdminState = {
    guests: [],
    status: 'idle',
};

export const adminLogin = createAsyncThunk(
    'admin/adminLogin',
    async(request: AdminAuthenticationRequest) => {
        const response = await fetch(`${process.env.REACT_APP_EXPRESS_SERVER}/admin/login`, {
            credentials: 'include',
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token' : `${process.env.REACT_APP_CLIENT_TOKEN}`
            },
            body: JSON.stringify(request)}).then(response => response.json());
            
        return response;
    }
);

export const adminLogout = createAsyncThunk(
    'admin/adminLogout',
    async() => {
        const response = await fetch(`${process.env.REACT_APP_EXPRESS_SERVER}/logout`, {
            credentials: 'include',
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token' : `${process.env.REACT_APP_CLIENT_TOKEN}`
            }
        }).then(response => response.json());
            
        return response;
    }
);

export const getGuests = createAsyncThunk(
    'admin/getGuests',
    async() => {
        const response = await fetch(`${process.env.REACT_APP_EXPRESS_SERVER}/guest/all`, {
            credentials: 'include',
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            }}).then(response => response.json());
            
        return response;
    }
);

export const registerUser = createAsyncThunk(
    'admin/registerUser',
    async(request: CreateFamily) => {

        const response = await fetch(`${process.env.REACT_APP_EXPRESS_SERVER}/register`, {
            credentials: 'include',
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request)}).then(response => response.json());
            
        return response;
    }
);

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<AdminState>) => {
        builder
        .addCase(adminLogin.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(adminLogin.rejected, (state) => {
            state.status = 'failed';
        })
        .addCase(adminLogin.fulfilled, (state, action) => {
                state.status = 'idle';
        })
        .addCase(registerUser.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(registerUser.rejected, (state) => {
            state.status = 'failed';
        })
        .addCase(registerUser.fulfilled, (state, action) => {
               state.status = 'idle';
        })
        .addCase(getGuests.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(getGuests.rejected, (state) => {
            state.status = 'failed';
        })
        .addCase(getGuests.fulfilled, (state, action) => {
            console.log(action.payload);
            state.guests = mapGuests(action.payload);
            state.status = "idle";
        })
        .addCase(adminLogout.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(adminLogout.rejected, (state) => {
            state.status = 'failed';
        })
        .addCase(adminLogout.fulfilled, (state) => {
            state.guests = [];
            state.status ='idle';
        });
    }
});

export const selectGuests = (state: RootState): Guest[] => state.admin.guests;
export const selectAdminStatus = (state: RootState): Status => state.admin.status;

export default adminSlice.reducer;

export function mapGuests(payload: any[]) {
    const guests: Guest[] = [];

    payload.forEach(guest => {

        const guestMap: Guest = {
            id: guest._id,
            family: guest.family,
            familyId: guest.familyId,
            name: guest.name,
            starter: guest.starter,
            main: guest.main,
            dessert: guest.dessert,
            diet: guest.diet
        }

        guests.push(guestMap);
    });

    return guests;
}