import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "../utils/data/constants";

const liveChatSlice = createSlice({
    name: "liveChat",
    initialState: {
        message: [],
    },
    reducers:{
        addMessage : (state, action) => {
            state.message.splice(OFFSET_LIVE_CHAT,1)
            state.message.unshift(action.payload)
        }
    }
})

export const {addMessage} = liveChatSlice.actions;
export default liveChatSlice.reducer;