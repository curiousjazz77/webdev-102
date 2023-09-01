import './Post.css'

const Post = (props) => {
  return (
    <div className="Post">
      <p className="name">{props.name}</p>
      <p className="description">{props.description}</p>
      <p className="numLikes">❤️ {props.numLikes}</p>
    </div>
  )
}
export default Post;
