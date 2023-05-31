import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  seats: [],
  numberofticket: 0,
  amt: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    MovieTital: (state, action) => {
      state.name = action.payload;
    },
    Seatnumber: (state, action) => {
      state.seats.push(action.payload);
    },
    NumberOfTicket: (state) => {
      state.numberofticket++;
    },
    TotalAmount: (state, action) => {
      state.amt = state.amt + action.payload;
    }, 
  },
});
export const { Seatnumber, MovieTital, NumberOfTicket, TotalAmount } =
  counterSlice.actions;
export default counterSlice.reducer;
