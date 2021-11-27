import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { AuthenticationRequest } from "../../models/AuthenticationRequest";
import { CreateFamily } from "../../models/CreateFamily";
import { Status } from "../../models/Status";
import { Guest } from '../../models/Guest';

export interface AdminState {    
    isAdmin: boolean,
    guests: Guest[],
    status: Status
};

const initialState: AdminState = {
    isAdmin: false,
    guests: [],
    status: 'idle',
};

export const adminLogin = createAsyncThunk(
    'admin/adminLogin',
    async(request: AuthenticationRequest) => {
        const response = await fetch(`${process.env.REACT_APP_EXPRESS_SERVER}/admin`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
               //'authorization' : `Bearer ${token}`
            },
            body: JSON.stringify(request)}).then(response => response.json());
            
        return response;
    }
);

export const getGuests = createAsyncThunk(
    'admin/getGuests',
    async() => {
        const response = await fetch(`${process.env.REACT_APP_EXPRESS_SERVER}/guest/all`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
               //'authorization' : `Bearer ${token}`
            }}).then(response => response.json());
            
        return response;
    }
);

export const registerUser = createAsyncThunk(
    'admin/registerUser',
    async(request: CreateFamily) => {

        const response = await fetch(`${process.env.REACT_APP_EXPRESS_SERVER}/register`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
               //'authorization' : `Bearer ${token}`
            },
            body: JSON.stringify(request)}).then(response => response.json());
            
        return response;
    }
);

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        adminLoginQuick: (state, action) => {
            state.isAdmin = action.payload;
        }
    },
    extraReducers: (builder: ActionReducerMapBuilder<AdminState>) => {
        builder
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
        
    }
});

export const selectIsAdmin = (state: RootState): boolean => state.admin.isAdmin;
export const selectGuests = (state: RootState): Guest[] => state.admin.guests;

export default adminSlice.reducer;

function mapGuests(payload: any[]) {
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