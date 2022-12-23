import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', title: 'First post', content: 'Hello', userId: '2' },
  { id: '2', title: 'Second post', content: 'More text', userId: '1' },
]
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId
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
