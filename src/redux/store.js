import { configureStore } from "@reduxjs/toolkit";
import sideSlice from "./sideSlice";
import searchSlice from "./searchSlice";
import authSlice from "./authSlice";
import liveChatSlice from "./liveChatSlice";
import buttonFilterSlice from "./buttonFilterSlice";
import videoSlice from "./videoSlice";
import likeDislikeSlice from "./likeDislikeSlice";

export default configureStore({
    reducer:{
        menu : sideSlice,
        search : searchSlice,
        liveChat : liveChatSlice,
        buttonFilter: buttonFilterSlice,
        auth: authSlice,
        videos: videoSlice,
        likeDislike: likeDislikeSlice
    }
})