import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { Status } from '../../models/Status';

export interface FoodState {
    value: {
        starter: number,
        main: number,
        dessert: number,
    },
    status: Status
}