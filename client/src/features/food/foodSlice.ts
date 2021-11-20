import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Status } from '../../models/Status';

export interface Choices {
    starter: number | undefined,
    main: number | undefined,
    dessert: number | undefined,
    diet: string | undefined
}
export interface FoodState {
    value: Choices,
    status: Status
}

const initialState: FoodState = {
    value: {
        starter: undefined,
        main: undefined,
        dessert: undefined,
        diet: undefined
    },
    status: 'idle'
}

export const foodSlice = createSlice({
    name: 'food',
    initialState,
    reducers: {
        starterSelected: (state, action) => {
            state.value.starter = action.payload;
        },
        mainSelected: (state, action) => {
            state.value.main = action.payload;
        },
        dessertSelected: (state, action) => {
            state.value.dessert = action.payload;
        },
        dietSelected: (state, action) => {
            state.value.diet = action.payload;
        }
    },

});

export const selectChoices = (state: RootState): any => state.food.value;

export default foodSlice.reducer;