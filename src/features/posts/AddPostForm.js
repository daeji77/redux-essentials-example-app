import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from './postsSlice';

export const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const dispatch = useDispatch();

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)
  const onUserChanged = e => setUserId(e.target.value)

  const onSavePostClicked = () => {
    dispatch(postAdded(title, content, userId));

    setTitle('');
    setContent('');
  }

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

  const usersList = useSelector(states => states.users.map(
    user => <option key={user.id} value={user.id}>{user.name}</option>
  ))

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postUser">Post user:</label>
        <select id="postUser" onChange={onUserChanged}>
          <option></option>
          {usersList}
        </select>
        <label htmlFor="postTitle">Post title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Post content:</label>
        <textarea
          type="text"
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  )
}
