import { createSlice } from "@reduxjs/toolkit";

const likeDislikeSlice = createSlice({
  name: "likeDislike",
  initialState: {
    likeCount: 0,
    isLiked: false,
    isDisliked: false,
  },
  reducers: {
    likeCountHandler: (state, action) => {
      if (state.isLiked) {
        state.likeCount = Number(action.payload) + 1;
      } else {
        state.likeCount = state.likeCount - 1;
      }
    },
    likeToggle: (state) => {
      state.isLiked = !state.isLiked;
    },
      dislikeToggle: (state) => {
        state.isDisliked = !state.isDisliked;
      },
  },
});

export const { likeCountHandler, likeToggle, dislikeToggle } = likeDislikeSlice.actions;
export default likeDislikeSlice.reducer;
