import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import feedReducer from "./feedSlice"
import connectionReducer from  "./connectionSlice"
import requestReducer from "./requestSlice"



const appStore = configureStore({
    reducer: {
        user: userReducer ,
        feed: feedReducer,  // add the feed in the store redux
        connections:connectionReducer,
        requests:requestReducer,
    },
})

export default appStore;