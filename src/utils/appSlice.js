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
        },
        showSidebar(state){
            state.isSideBarOpen = true;
        }
    }
});

export const {toggleSideBar, hideSidebar, showSidebar} = appSlice.actions;
export default appSlice.reducer;