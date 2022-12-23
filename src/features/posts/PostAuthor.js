import { useSelector } from 'react-redux'

export const PostAuthor = ({ userId }) => {
  const user = useSelector(
      state => state.users.find(user => user.id === userId))

  return <span>{user ? user.name : 'Unknown author'}</span>
}