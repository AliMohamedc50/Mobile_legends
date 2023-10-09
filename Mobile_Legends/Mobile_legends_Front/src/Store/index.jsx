/* eslint-disable react-refresh/only-export-components */


import { configureStore } from "@reduxjs/toolkit";
import heros from "./herosSlice";

export default configureStore({
  reducer: {
    heros,
  },
});