import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { PostAuthor } from './PostAuthor'
import { TimeAgo } from './TimeAgo'

export const SinglePostPage = ({match}) => {
  const { postId } = match.params;

  const post = useSelector(state => 
    state.posts.find(post => post.id === postId)
  )

  if (post) {
    return (
      <section>
        <article className="post" key={post.id}>
          <h2>{post.title}</h2>
          <h3><PostAuthor userId={post.userId}></PostAuthor></h3>
          <h4><TimeAgo timestamp={post.date}></TimeAgo></h4>
          <p className='post-content'>{post.content}</p>
        </article>
        <Link to={`/editPost/${post.id}`} className="button">Edit Post</Link>
      </section>
    )
  } else {
    return <p>Post not found</p>
  }
}
