/* eslint-disable no-undef */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getHeros = createAsyncThunk(
  "hero/getHeros",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:3003/heros");
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getHero = createAsyncThunk(
  "hero/getHero",
  async (element, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`http://localhost:3003/heros/${element.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      });
      return element;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const herosSlice = createSlice({
  name: "hero",
  initialState: {
    heroslist: [],
    showHero: localStorage.getItem("showHero")
      ? JSON.parse(localStorage.getItem("showHero"))
      : null,
  },
  extraReducers: {
    [getHeros.pending]: (state, action) => {
      // console.log(action);
    },
    [getHeros.fulfilled]: (state, action) => {
      state.heroslist = action.payload;
      // console.log(action.payload);
    },
    [getHeros.rejected]: (state, action) => {
      // console.log(action);
    },

    [getHero.pending]: (state, action) => {
      // console.log(action);
    },
    [getHero.fulfilled]: (state, action) => {
      state.showHero = action.payload;
      localStorage.setItem("showHero", JSON.stringify(action.payload));
      // console.log(state.showHero);
    },
    [getHero.rejected]: (state, action) => {
      console.log(action);
    },
  },
});

export default herosSlice.reducer;
