import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: "videos",
    initialState: {
        allVideos: undefined,
        allFilterVideos: undefined
    },
    reducers: {
        allVideosHandler : (state, action) => {
            state.allVideos = action.payload
        },
        allFilterVideosHandler : (state, action) => {
            state.allFilterVideos =  action.payload
        }
    }
})

export const {allVideosHandler,  allFilterVideosHandler} = videoSlice.actions;

export default videoSlice.reducer;