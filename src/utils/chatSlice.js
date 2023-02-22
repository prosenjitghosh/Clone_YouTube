import { createSlice } from "@reduxjs/toolkit";
import { Live_Chat_Count } from "./constants";

const chatSlice = createSlice({
    name:"chat",
    initialState:{
        messages:[]
    },
    reducers:{
        addMessages(state,action){
            if(state.messages.length>Live_Chat_Count)
                state.messages.splice(0,1);
            state.messages.push(action.payload);
        }
    }
});

export const {addMessages} = chatSlice.actions;
export default chatSlice.reducer;