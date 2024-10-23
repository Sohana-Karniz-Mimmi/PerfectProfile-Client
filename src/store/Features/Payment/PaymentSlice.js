import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Thunk to fetch paginated payment data
export const fetchPayments = createAsyncThunk(
  "payment/fetchPayments",
  async ({ page, limit }) => {
    const response = await fetch(
      `${
        import.meta.env.VITE_LOCALHOST_API_URL
      }/payments?page=${page}&limit=${limit}`
    );
    const data = await response.json();
    return data;
  }
);

const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    payments: [],
    totalPayments: 0,
    totalAmount:0,
    totalPages: 0,
    currentPage: 1,
    loading: false,
    error: "",
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPayments.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPayments.fulfilled, (state, action) => {
        state.loading = false;
        state.payments = action.payload.payments;
        state.totalAmount = action.payload.totalAmount;
        state.totalPayments = action.payload.totalPayments;
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.currentPage;
      })
      .addCase(fetchPayments.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch payment data";
      });
  },
});

export const { setCurrentPage } = paymentSlice.actions;
export default paymentSlice.reducer;
