import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Status } from '../../models/Status';
import { Guest, GuestRequest } from '../../models/Guest';
import { mapGuests } from '../admin/adminSlice';

export interface Choices {
    starter: number | undefined,
    main: number | undefined,
    dessert: number | undefined,
    diet: string | undefined
};

export interface FoodState {
    guests: Guest[],
    status: Status
};


const initialState: FoodState = {
    guests: [],
    status: 'idle'
};

export const getGuestsUser = createAsyncThunk(
    'food/getGuests',
    async(request: GuestRequest) => {

        const response = await fetch(`${process.env.REACT_APP_EXPRESS_SERVER}/guest/family`, {
            credentials: 'include',
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request)})
            .then(response => response.json());

        return response;
    }
)

export const foodSlice = createSlice({
    name: 'food',
    initialState,
    reducers: {
        starterSelected: (state, action) => {
            const guest = state.guests
            .find(g => g.name === action.payload.name);

            if (guest) {
                guest.starter = action.payload.choice;
                // const index = state.guests.indexOf(guest);
                // state.guests[index].starter = action.payload.starter;
            }
        },
        mainSelected: (state, action) => {
            const guest = state.guests
            .find(g => g.name === action.payload.name);

            if (guest) {
                guest.starter = action.payload.choice;
                // const index = state.guests.indexOf(guest);
                // state.guests[index].starter = action.payload.starter;
            }
        },
        dessertSelected: (state, action) => {
            const guest = state.guests
            .find(g => g.name === action.payload.name);

            if (guest) {
                guest.starter = action.payload.choice;
                // const index = state.guests.indexOf(guest);
                // state.guests[index].starter = action.payload.starter;
            }
        },
        dietSelected: (state, action) => {
            const guest = state.guests
            .find(g => g.name === action.payload.name);

            if (guest) {
                guest.starter = action.payload.choice;
                // const index = state.guests.indexOf(guest);
                // state.guests[index].starter = action.payload.starter;
            }
        }
    },
    extraReducers: (builder: ActionReducerMapBuilder<FoodState>) => {
        builder
        .addCase(getGuestsUser.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(getGuestsUser.rejected, (state) => {
            state.status = 'failed';
        })
        .addCase(getGuestsUser.fulfilled, (state, action) => {
            state.guests = mapGuests(action.payload);
            state.status = 'idle';
        })

    }
});

export const selectGuests = (state: RootState): any => state.food.guests;

export default foodSlice.reducer;