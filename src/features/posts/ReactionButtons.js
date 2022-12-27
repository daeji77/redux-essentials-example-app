import { useDispatch } from 'react-redux'
import { reactionAdded } from './postsSlice'

const reactionEmoji = {
  thumbsUp: '👍',
  hooray: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀'
}

export const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch()

  const onButtonClicked = (e) => {
    dispatch(reactionAdded({postId: post.id, reaction: e.target.id}))
  }

  const emojies = Object.entries(reactionEmoji).map(([name, emoji]) => (
    <button
      key={name}
      id={name}
      type="button"
      className="muted-button reaction-button"
      onClick={onButtonClicked}>
      {emoji} {post.reactions[name]}
    </button>
  ))
  return <div>{emojies}</div>
}
