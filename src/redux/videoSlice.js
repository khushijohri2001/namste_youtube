import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { YOUTUBE_POPULAR_VIDEO_API } from "../utils/data/youtube-api";

export const fetchVideoList = createAsyncThunk("videos/fetchVideoList", async () => {
    const response = await fetch(YOUTUBE_POPULAR_VIDEO_API)
    const json = await response.json();
    return json?.items
})

const videoSlice = createSlice({
    name: "videos",
    initialState: {
        allVideos: undefined,
        allFilterVideos: undefined,
        isApiCalled: false,
        status: "idle",
        error: ""
    },
    reducers: {
        allVideosHandler : (state, action) => {
            state.allVideos = action.payload
        },
        allFilterVideosHandler : (state, action) => {
            state.allFilterVideos =  action.payload
        },
        apiCallHander : (state) => {
            state.isApiCalled = true
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchVideoList.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(fetchVideoList.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.allVideos = action.payload
                state.allFilterVideos =  action.payload
            })
            .addCase(fetchVideoList.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
        }
})

export const {allVideosHandler,  allFilterVideosHandler, apiCallHander} = videoSlice.actions;

export default videoSlice.reducer;