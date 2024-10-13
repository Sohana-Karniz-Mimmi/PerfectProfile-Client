import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { getUsers } from "../../Services/apiService";

const userAdapter = createEntityAdapter({
  selectId: (user) => user._id,
});

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async ({ page, size, filter, search }) => {
    const {
      users,
      totalUsers,
      currentPage,
      totalPages,
      allUsers,
    } = await getUsers(page, size, filter, search);
    return { users, totalUsers, currentPage, totalPages, allUsers };
  }
);

const initialState = userAdapter.getInitialState({
  loading: false,
  error: null,
  currentPage: 1,
  totalPages: 1,
  totalUsers: 0, // Store total users here
  allUsers: [], // To store all users
});

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        userAdapter.setAll(state, action.payload.users);
        state.currentPage = action.payload.currentPage;
        state.totalPages = action.payload.totalPages;
        state.totalUsers = action.payload.totalUsers; // Update total users
        state.allUsers = action.payload.allUsers; // Store all users in the state
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { selectAll: selectAllUsers } = userAdapter.getSelectors(
  (state) => state.users
);

export const selectAllUsersState = (state) => state.users.allUsers;

export default userSlice.reducer;
