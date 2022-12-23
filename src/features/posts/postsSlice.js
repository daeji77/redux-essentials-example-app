import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', title: 'First post', content: 'Hello' },
  { id: '2', title: 'Second post', content: 'More text' },
]
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          }
        }
      }
    },
    postUpdated(state, action) {
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
