import { useSelector } from 'react-redux'

export const SinglePostPage = ({match}) => {
  const { postId } = match.params;

  console.log(postId);

  const post = useSelector(state => 
    state.posts.find(post => post.id === postId)
  )

  if (post) {
    return (
      <section>
        <article className="post" key={post.id}>
          <h2>{post.title}</h2>
          <p className='post-content'>{post.content}</p>
        </article>
      </section>
    )
  } else {
    return <p>Post not found</p>
  }
}
