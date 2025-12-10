import { createSlice } from "@reduxjs/toolkit";

const VideoSlice = createSlice({
    name: "video",
    initialState: { results: [] },
    reducers: {
        setresults: (state, action) => { state.results = action.payload }
    }
});

export const { setresults } = VideoSlice.actions;
export default VideoSlice.reducer;
