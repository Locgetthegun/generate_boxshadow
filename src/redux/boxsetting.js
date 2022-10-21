import {createSlice} from '@reduxjs/toolkit'
export const boxSetting = createSlice({
    name:"boxSetting",
    initialState:{
        width:150,
        height:150,
        backgroundColor:"red",
        horizontal:0,
        vertical:0,
        blur:15,
        spread:15,
        color:{
            r:0,
            g:0,
            b:0,
        },
        opacity:1,
        inset:false,
    },
    reducers:{
        setWidth:(state,action)=>{
            state.width = action.payload;
        },
        setHeight:(state,action)=>{
            state.height = action.payload;
        },
        setBackgroundColor:(state,action)=>{
            state.backgroundColor = action.payload;

        },
        setHorizontal:(state,action)=>{
            state.horizontal = action.payload;
        },
        setVertical:(state,action)=>{
            state.vertical = action.payload;

        },
        setBlur:(state,action)=>{
            state.blur = action.payload;

        },
        setSpread:(state,action)=>{
            state.spread = action.payload;
        },
        setColor:(state,action)=>{
            state.color = action.payload;
        },
        setOpacity:(state,action)=>{
            state.opacity = action.payload;
        },
        setInset:(state,action)=>{
            state.inset = !state.inset;
        }
    }
});