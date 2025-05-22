import { createSlice } from "@reduxjs/toolkit";

const moviesslice = createSlice({
    name:'movies',
    initialState:{
        NowPlayingmovies: null,
    },
    reducers:{
        addNowPlayingmovies:(state,action ) =>{
            state.NowPlayingmovies  = action.payload;
        }

    }
});

export const { addNowPlayingmovies } = moviesslice.actions;
export default moviesslice.reducer;