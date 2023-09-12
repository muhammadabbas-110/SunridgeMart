import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

const initialState = {
  currentUser: null, 
  isLoggedIn: false,
  user: null, 
};

const authSlice = createSlice({
  name: "auth",
  initialState, 
  reducers: {
    logIn: (state, { payload }) => {
      state.currentUser = payload;
      state.isLoggedIn = true;
    },

    setUser: (state, { payload }) => {
        console.log(payload)
      state.user = payload;
    },

    setLogOut: (state) => {
    
      state.currentUser = null;
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { logIn, setLogOut, setUser } = authSlice.actions;
export default authSlice.reducer;

export const authSelector = (state) => state.auth;
export const authUser = (state) =>state.auth.user