import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    incrementByTwo: (state, action) => {
      state.value += action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },    
  },
});

export const { increment, incrementByTwo, reset } = counterSlice.actions;




export default counterSlice.reducer;

export const selectCount = (state: { counter: CounterState }) => state.counter.value;
