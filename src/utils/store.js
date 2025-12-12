import { configureStore } from "@reduxjs/toolkit";
import AppReducer from './AppSlice';
import searchReducer from './searchSlice';
import VideoReducer from './VideoSlice';
import ChatReducer from './ChatSlice'
const store = configureStore({
    reducer: {
        app: AppReducer,
        search: searchReducer,
        video: VideoReducer,
        chat:ChatReducer
    }
});

export default store;
