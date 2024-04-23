import { createSlice } from "@reduxjs/toolkit";

const DataSlice =  createSlice({
  name: "data",
  initialState:  { userData: {} },
  reducers: {
    setData: (state, action) => {
      state.userData = action.payload;
    },
    removeData: (state) => {
      state.userData = {};
    },
  },
});

export const { removeData, setData } = DataSlice.actions;
export default DataSlice.reducer;

//The code imports the createSlice function from @reduxjs/toolkit. 
//The createSlice function is called with an object containing configuration options for the slice.
//After creating the slice, you can use the exported action creators (setData and removeData) in your Redux logic to dispatch actions that update the state managed by this slice.


