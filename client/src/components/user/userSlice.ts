import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { AuthenticationRequest } from "../../models/AuthenticationRequest";
import { Status } from "../../models/Status";
import { Guest } from "../../models/Guest";
import { WappError } from "../../models/WappError";
import { Seat } from "../../models/Seat";
import { Arrival } from "../../models/Arrival";
import { Family } from "../../models/Family";
import { Room } from "../../models/Room";

export interface UserState {
    family?: Family,
    guests: Guest[],
    seats: Seat[],
    rooms: Room[],
    arrivals: Arrival[],
    errors: WappError[],
    status: Status,
};

const initialState: UserState = {
    guests: [],
    seats: [],
    rooms: [],
    arrivals: [],
    errors: [],
    status: 'idle',
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

export const submitGuestUpdateUser = createAsyncThunk(
    'users/submitGuestChoices', 
    async(request: Guest) => {
        const response = await fetch(`${process.env.REACT_APP_EXPRESS_SERVER}/guest`, {
            credentials: 'include',
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token' : `${process.env.REACT_APP_CLIENT_TOKEN}`
            },
            body: JSON.stringify(request)
        }).then(response => response.json());
        return response;
    }
)

export const submitUserArrivalTime = createAsyncThunk(
    'users/submitUserArrivalTime',
    async(request: Arrival) => {
        const response = await fetch(`${process.env.REACT_APP_EXPRESS_SERVER}/guest/arrival`, {
            credentials: 'include',
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token' : `${process.env.REACT_APP_CLIENT_TOKEN}`
            },
            body: JSON.stringify(request)
        }).then(response => response.json());
        return response;
    }
)

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        loginRefresh: (state, action) => {
            state.family = action.payload.family;
            state.guests = action.payload.guests;
            state.seats = action.payload.seats;
            state.arrivals = action.payload.arrivals;
            state.rooms = action.payload.rooms;
            state.status = 'idle'
        },
        loginResetStatus: (state) => {
            state.status = 'idle';
            state.errors = [];
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
                state.errors = [];
            }
        })
        .addCase(userLogout.pending, (state) => {
            state.status ='loading';
        })
        .addCase(userLogout.rejected, (state) => {
            state.family = undefined;
            state.guests = [];
            state.seats = [];
            state.rooms = [];
            state.arrivals = [];
            state.status ='idle';
            state.errors = [];
        })
        .addCase(userLogout.fulfilled, (state) => {
            state.family = undefined;
            state.guests = [];
            state.seats = [];
            state.rooms = [];
            state.arrivals = [];
            state.status ='idle';
            state.errors = [];
        })
        .addCase(submitGuestUpdateUser.fulfilled, (state, action) => {
            const index = state.guests.findIndex(guest => guest.id === action.payload.id);
            state.guests[index] = {...action.payload}
        })
        .addCase(submitGuestUpdateUser.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(submitGuestUpdateUser.rejected, (state) => {
            state.status = 'failed';
        })
        .addCase(submitUserArrivalTime.fulfilled, (state, action) => {
            if (action.payload.result === "SUCCESS") {
                const index = state.arrivals.findIndex(arrival => arrival.familyId === action.payload.arrival.familyId)
                if (index === -1) state.arrivals.push(action.payload.arrival);
                else state.arrivals[index] = {...action.payload.arrival};
            }
        })
    }
});

export const selectUserFamily = (state: RootState): Family | undefined => state.users.family;
export const selectUserGuests = (state: RootState): Guest[] => state.users.guests;
export const selectUserSeats = (state: RootState): Seat[] => state.users.seats;
export const selectUserRooms = (state: RootState): Room[] => state.users.rooms;
export const selectUserArrivals = (state: RootState): Arrival[] => state.users.arrivals;
export const selectUserFamilyArrival = (state: RootState): Arrival | undefined => state.users.arrivals.find(arrival => arrival.familyId === state.users.family?.id);
export const selectUserErrors = (state: RootState): WappError[] => state.users.errors;
export const selectUserStatus = (state: RootState): Status => state.users.status;

export default userSlice.reducer;
