import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch payment data from backend
export const fetchPaymentData = createAsyncThunk(
  "payment/fetchPaymentData",
  async () => {
    const response = await fetch(`${import.meta.env.VITE_LOCALHOST_API_URL}/payments`);
    const data = await response.json();
    
    return data;
  }
);

const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    totalAmount: 0,
    paymentData: [],
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPaymentData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPaymentData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.totalAmount = action.payload.totalAmount;
        state.paymentData = action.payload.payments;
      })
      .addCase(fetchPaymentData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default paymentSlice.reducer;
