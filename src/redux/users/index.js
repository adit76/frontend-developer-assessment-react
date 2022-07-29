import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: {},
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // eslint-disable-next-line default-param-last
    setUsers: (state = initialState, action) => {
      console.log('State:', state, 'Action', action);
      state.users = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { setUsers, usersList } = userSlice.actions;
