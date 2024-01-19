import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: "auth",
    initialState: {
        accessToken: sessionStorage.getItem("nyt-access-token") ? sessionStorage.getItem("nyt-access-token") : null,
        user: sessionStorage.getItem("nyt-user") ? JSON.parse(sessionStorage.getItem("nyt-user")) : null,
        loading: false,
        error: null
    },
    reducers: {
          LOGIN_REQUEST : (state) => {
            state.loading = true
          },
          LOGIN_SUCCESS : (state, action) => {
            state.accessToken = action.payload;
            state.loading = false;
          },
          LOGIN_FAIL : (state, action) => {
            state.accessToken = null;
            state.loading = false;
            state.error = action.payload;
          },
          USER_PROFILE : (state, action) => {
            state.user = action.payload
          },
          LOGOUT : async (state) => {
            state.accessToken = null;
            state.user = null
          }
          
    }
})

export const  {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, USER_PROFILE, LOGOUT} = authSlice.actions;
export default authSlice.reducer;