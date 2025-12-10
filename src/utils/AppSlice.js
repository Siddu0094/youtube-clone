import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({
    name: "app",
    initialState: { isMenuOpen: true },
    reducers: {
        toogleMenu: (state) => { state.isMenuOpen = !state.isMenuOpen },
        closeMenu: (state) => { state.isMenuOpen = false },
    }
});

export const { toogleMenu, closeMenu } = AppSlice.actions;
export default AppSlice.reducer;
