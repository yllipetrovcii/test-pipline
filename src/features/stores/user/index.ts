import {createSlice} from '@reduxjs/toolkit';

interface currentState {
  currentUser?: {name: string};
}

const initialState: currentState = {
  currentUser: undefined,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.currentUser = action.payload;
    },
    clearUser: state => {
      state.currentUser = undefined;
    },
  },
});

export const {setUser, clearUser} = userSlice.actions;

export default userSlice.reducer;
