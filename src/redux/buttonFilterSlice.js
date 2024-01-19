import { createSlice } from "@reduxjs/toolkit";

const buttonFilterSlice = createSlice({
    name: "buttonFilter",
    initialState:{
        activeButton: "All"
    },
    reducers:{
        activeButtonFilterHandler: (state, action) => {
            state.activeButton = action.payload
        }
    }
})

export const {activeButtonFilterHandler} = buttonFilterSlice.actions;

export default buttonFilterSlice.reducer;