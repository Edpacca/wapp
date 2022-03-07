import { ActionReducerMapBuilder, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { AddGuestRequest, CreateFamily } from "../../models/CreateFamily";
import { Status } from "../../models/Status";
import { Guest } from '../../models/Guest';
import { AdminAuthenticationRequest } from "../../models/AdminAuthenticationRequest";
import { Arrival } from "../../models/Arrival";

export interface AdminState {    
    guests: Guest[],
    arrivals: Arrival[],
    stagedGuests: Guest[],
    stagedDeletedGuests: Guest[],
    status: Status,
};

const initialState: AdminState = {
    guests: [],
    arrivals: [],
    stagedGuests: [],
    stagedDeletedGuests: [],
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

export const getArrivals = createAsyncThunk(
    'admin/getArrivals',
    async() => {
        const response = await fetch(`${process.env.REACT_APP_EXPRESS_SERVER}/guest/arrival`, {
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

        const response = await fetch(`${process.env.REACT_APP_EXPRESS_SERVER}/register/user`, {
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

export const addGuestToFamily = createAsyncThunk(
    'admin/addGuestToFamily',
    async(request: AddGuestRequest) => {

        const response = await fetch(`${process.env.REACT_APP_EXPRESS_SERVER}/register/guest`, {
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

export const commitGuestEdits = createAsyncThunk(
    'admin/commitGuestEdits',
    async(request: { edits: Guest[], deletes: Guest[] }) => {
        const response = await fetch(`${process.env.REACT_APP_EXPRESS_SERVER}/guest/all`, {
            credentials: 'include',
            method: 'PUT',
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
    reducers: {
        stageGuest: (state, action: PayloadAction<Guest>) => {
            const index = state.stagedGuests.findIndex(guest => guest.id === action.payload.id)
            if (index === -1) state.stagedGuests.push(action.payload);
        },
        editGuest:(state, action: PayloadAction<Guest>) => {
            const index = state.stagedGuests.findIndex(guest => guest.id === action.payload.id)
            if (index === -1) return;
            else state.stagedGuests[index] = {...action.payload};
        },
        unstageGuest: (state, action: PayloadAction<Guest>) => {
            const index = state.stagedGuests.findIndex(guest => guest.id === action.payload.id)
            if (index === -1) return;
            state.stagedGuests.splice(index, 1);
        },
        stageDeletedGuest: (state, action: PayloadAction<Guest>) => {
            const indexDeleted = state.stagedDeletedGuests.findIndex(guest => guest.id === action.payload.id)
            if (indexDeleted === -1) state.stagedDeletedGuests.push(action.payload);
        },
        unstageDeletedGuest: (state, action: PayloadAction<Guest>) => {
            const index = state.stagedDeletedGuests.findIndex(guest => guest.id === action.payload.id)
            if (index === -1) return;
            state.stagedDeletedGuests.splice(index, 1);
        },
        clearStagedGuests: (state) => {
            state.stagedGuests = [];
        }
    },
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
        .addCase(addGuestToFamily.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(addGuestToFamily.rejected, (state) => {
            state.status = 'failed';
        })
        .addCase(addGuestToFamily.fulfilled, (state, action) => {
               state.status = 'idle';
        })
        .addCase(commitGuestEdits.fulfilled, (state, acion) => {
            state.status = 'idle';
            state.stagedGuests = [];
            state.stagedDeletedGuests = [];
        })
        .addCase(getGuests.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(getGuests.rejected, (state) => {
            state.status = 'failed';
        })
        .addCase(getGuests.fulfilled, (state, action) => {
            state.guests = [];
            state.guests = mapGuests(action.payload);
            state.status = "idle";
        })
        .addCase(getArrivals.fulfilled, (state, action) => {
            state.arrivals = action.payload;
            state.status = "idle";
        })
        .addCase(adminLogout.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(adminLogout.rejected, (state) => {
            state.guests = [];
            state.status = 'failed';
        })
        .addCase(adminLogout.fulfilled, (state) => {
            state.guests = [];
            state.status ='idle';
        });
    }
});

export const selectGuests = (state: RootState): Guest[] => state.admin.guests;
export const selectAdminArrivals = (state: RootState): Arrival[] => state.admin.arrivals;
export const selectFamilies = (state: RootState): string[] => [...new Set(state.admin.guests.map(guest => guest.family))];
export const selectStagedGuests= (state: RootState): Guest[] => state.admin.stagedGuests;
export const selectStagedDeletedGuests= (state: RootState): Guest[] => state.admin.stagedDeletedGuests;
export const selectAdminStatus = (state: RootState): Status => state.admin.status;
export const { stageGuest, unstageGuest, editGuest, clearStagedGuests, stageDeletedGuest, unstageDeletedGuest } = adminSlice.actions;
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
            diet: guest.diet,
            seat: guest.seat
        }

        guests.push(guestMap);
    });

    return guests;
}
