import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState:{
        isSideBarOpen:true
    },
    reducers:{
        toggleSideBar(state){
            state.isSideBarOpen = !state.isSideBarOpen;
        },
        hideSidebar(state){
            state.isSideBarOpen = false;
        }
    }
});

export const {toggleSideBar, hideSidebar} = appSlice.actions;
export default appSlice.reducer;