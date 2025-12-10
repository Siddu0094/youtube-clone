import { configureStore } from "@reduxjs/toolkit";
import AppReducer from './AppSlice';
import searchReducer from './searchSlice';
import VideoReducer from './VideoSlice';

const store = configureStore({
    reducer: {
        app: AppReducer,
        search: searchReducer,
        video: VideoReducer
    }
});

export default store;
