import { configureStore } from '@reduxjs/toolkit'
import sidebarSlice from './slices/sidebarSlice'
import postListSlice from './slices/postListSlice'

export default configureStore({
  reducer: {
    sidebar: sidebarSlice,
    postList: postListSlice,
  }
})