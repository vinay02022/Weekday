import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchJobsFromAPI } from "../utils/api";

export const fetchJobs = createAsyncThunk(
    "jobs/fetchJobs",
    async ({ offset, filters }) => {
      return fetchJobsFromAPI(offset, filters);
    }
  );

  const jobSlice = createSlice({
    name: "jobs",
    initialState: {
      jobs: [],
      loading: false,
      error: null,
      totalCount: 0,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchJobs.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchJobs.fulfilled, (state, action) => {
          state.loading = false;
          state.jobs = [...state.jobs, ...action.payload.jdList];
          state.totalCount = action.payload.totalCount;
        })
        .addCase(fetchJobs.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  
  export default jobSlice.reducer;