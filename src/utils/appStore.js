import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import feedReducer from "./feedSlice"


const appStore = configureStore({
    reducer: {
        user: userReducer ,
        feed: feedReducer,  // add the feed in the store redux
    }
})

export default appStore;