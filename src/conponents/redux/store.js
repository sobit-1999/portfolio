import { configureStore } from '@reduxjs/toolkit';
import styleReducer from './style/styleSlice';

export default configureStore({
  reducer: {
    style: styleReducer,
  },
});
