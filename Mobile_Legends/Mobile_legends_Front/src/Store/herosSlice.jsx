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

export const getRole = createAsyncThunk("hero/getHeros", async (role, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const res = await fetch(`http://localhost:3003/heros?role=${role}`);
    const data = await res.json();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});


export const searchHero = createAsyncThunk(
  "hero/searchHeros",
  async (s_Heros, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`http://localhost:3003/heros?name=${s_Heros}`);
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const searchHero_role = createAsyncThunk(
  "hero/searchHeros",
  async (s_Heros, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`http://localhost:3003/heros?role=${s_Heros}`);
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
    loader: false,
    search_Hero: [],
  },
  extraReducers: {
    [getHeros.pending]: (state, action) => {
      state.loader = true;
    },
    [getHeros.fulfilled]: (state, action) => {
      // state.loader = true;
      state.loader = false;
      state.heroslist = action.payload;
    },
    [getHeros.rejected]: (state, action) => {
      console.log(state.loader);
      // console.log(action);
    },

    [getRole.pending]: (state, action) => {
      state.loader = true;
    },
    [getRole.fulfilled]: (state, action) => {
      // state.loader = true;
      state.loader = false;
      state.heroslist = action.payload;
      console.log(action.payload);
    },
    [getRole.rejected]: (state, action) => {
      console.log(state.loader);
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



    [searchHero.pending]: (state, action) => {
      // console.log(action);
    },
    [searchHero.fulfilled]: (state, action) => {
      state.search_Hero = action.payload;

      console.log(state.search_Hero);
    },
    [searchHero.rejected]: (state, action) => {
      console.log(action);
    },


    [searchHero_role.pending]: (state, action) => {
      // console.log(action);
    },
    [searchHero_role.fulfilled]: (state, action) => {
      state.search_Hero = action.payload;

      console.log(state.search_Hero);
    },
    [searchHero_role.rejected]: (state, action) => {
      console.log(action);
    },
  },
});

export default herosSlice.reducer;
