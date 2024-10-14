import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPredefinedTemplates } from "../../Services/apiService";

// Thunk to fetch predefined templates
export const fetchPredefinedTemplates = createAsyncThunk(
  "templates/fetchPredefinedTemplates",
  async () => {
    const templates = await getPredefinedTemplates(); // Fetch templates from API
    return templates; // Return only the templates
  }
);

const templateSlice = createSlice({
  name: "templates",
  initialState: {
    templates: [], // Only store the templates
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPredefinedTemplates.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPredefinedTemplates.fulfilled, (state, action) => {
        state.loading = false;
        state.templates = action.payload; // Store the fetched templates in state
      })
      .addCase(fetchPredefinedTemplates.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Selector to get templates from Redux state
export const selectTemplates = (state) => state.templates.templates;

export default templateSlice.reducer;
