import { configureStore } from "@reduxjs/toolkit";
import jobReducer from '../utils/jobSlice';


export default configureStore({
    reducer: {
      jobs: jobReducer,
    },
  });
  