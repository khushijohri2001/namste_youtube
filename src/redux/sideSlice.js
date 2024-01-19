import { createSlice } from "@reduxjs/toolkit";

const sideSlice = createSlice({
    name: "menu",
    initialState: {
        isMenuOpen : true
    },
    reducers:{
        menuToggle : (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu : (state) => {
            state.isMenuOpen = false;
        },
        openMenu : (state) => {
            state.isMenuOpen = true;
        }
    }
})

export const {menuToggle, closeMenu, openMenu} = sideSlice.actions;

export default sideSlice.reducer;