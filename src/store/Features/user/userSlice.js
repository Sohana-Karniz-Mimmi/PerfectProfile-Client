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
  totalUsers: 0,
  allUsers: [],
});

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateUserRole: (state, action) => {
      const { userId, newRole } = action.payload;
      const user = state.allUsers.find((user) => user._id === userId);
      if (user) {
        user.role = newRole; // ইউজারের রোল আপডেট করা হচ্ছে
      }
    },
  },
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
        state.totalUsers = action.payload.totalUsers;
        state.allUsers = action.payload.allUsers;
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
export const { updateUserRole } = userSlice.actions;

export default userSlice.reducer;
