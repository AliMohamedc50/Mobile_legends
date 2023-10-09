/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";




export const getHeros = createAsyncThunk('hero/getHeros', async (_, thunkAPI) => {

    const {rejectWithValue} = thunkAPI
    try{
        const res = await fetch("http://localhost:3003/heros");
        const data = await res.json();
        return data
    }catch(error){
        return rejectWithValue(error.message);
    }
})


const herosSlice = createSlice({
    name: 'hero',
    initialState: {heroslist : []},
    extraReducers: {
        [getHeros.pending]: (state, action) => {
            // console.log(action);
        },
        [getHeros.fulfilled]: (state, action) => {
            state.heroslist = action.payload;
            console.log(state.heroslist);
        },
        [getHeros.rejected]: (state, action) => {
            // console.log(action);
        }
    }
})


export default herosSlice.reducer;