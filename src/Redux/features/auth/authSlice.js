import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    logOut(state) {
      state.user = null;
    },
  },
});

export const { setUser, setLoading, logOut } = authSlice.actions;
export default authSlice.reducer;
