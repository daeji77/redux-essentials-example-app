import { createSlice, nanoid } from '@reduxjs/toolkit';
import { sub } from 'date-fns'

const initialState = [
  { id: '1', date: sub(new Date(), { minutes: 10 }).toISOString(),
    title: 'First post', content: 'Hello', userId: '2' },
  { id: '2', date: sub(new Date(), { minutes: 5 }).toISOString(),
    title: 'Second post', content: 'More text', userId: '1' },
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
            date: new Date().toISOString(),
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
