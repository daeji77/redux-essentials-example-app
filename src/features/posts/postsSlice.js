import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', title: 'First post', content: 'Hello' },
  { id: '2', title: 'Second post', content: 'More text' },
]
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: (state, action) => {
      state.push(action.payload);
    },
    postUpdated: (state, action) => {
      const payload = action.payload;
      const post = state.find(post => post.id === payload.id);

      if (post) {
        post.title = payload.title; 
        post.content = payload.content; 
      }
    }
  }
})

export const { postAdded, postUpdated } = postsSlice.actions;

export default postsSlice.reducer
