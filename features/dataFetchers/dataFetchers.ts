import axiosIntance from "@/lib/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface HeroProps {
    name: string,
    title: string,
    description: string,
    links?: string[]
}

interface DataFetchersState { 
    isFetching: boolean,
    hero: HeroProps 
}

const initialState: DataFetchersState = {
    hero: {name: '', title: '', description: ''},
    isFetching: true 
}

const fetchersSlice = createSlice({
    name: 'dataFetchers',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getHero.pending, (state) => {state.isFetching = true})
        .addCase(getHero.fulfilled, (state, action) => {state.isFetching = false; state.hero = action.payload})
        .addCase(getHero.rejected, (state, action) => {state.isFetching = false; console.log('Failed to fetch hero data', action.payload)})
    }
})

export const getHero = createAsyncThunk(
    'dataFetchers/getHero',
    async (_, thunkAPI) => {
        try {
            const response = await axiosIntance.get('/hero')

            return response.data.hero
        } catch (error: any) {
            console.log('Error fetching hero data:')
            return thunkAPI.rejectWithValue(error?.response?.data?.message || 'Something went wrong')
        }
    }
)

export default fetchersSlice.reducer