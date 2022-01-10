import { createSlice } from '@reduxjs/toolkit';
import { Status } from '../../models/Status';
import { Guest } from '../../models/Guest';

export interface FoodState {
    activeGuest: Guest | undefined,
    status: Status
};

const initialState: FoodState = {
    activeGuest: undefined,
    status: 'idle'
};

export const foodSlice = createSlice({
    name: 'food',
    initialState,
    reducers: {
        guestSelected: (state, action) => {
            state.activeGuest = action.payload;
            state.status = 'idle'
        }
    }
});


export default foodSlice.reducer;