import { configureStore } from '@reduxjs/toolkit'
import fetchesSlice from '../features/dataFetchers/dataFetchers'

export const store = configureStore({
  reducer: {
    dataFetchers: fetchesSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch