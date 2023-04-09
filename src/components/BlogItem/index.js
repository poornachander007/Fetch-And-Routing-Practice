// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {details} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = details
  return (
    <Link to={`/blogs/${id}`} className="li_link_tag">
      <li className="li_container">
        <img src={imageUrl} alt={title} className="imageItem" />
        <div className="details_container">
          <p className="topicItem">{topic}</p>
          <h1 className="titleItem">{title}</h1>
          <div className="avatar_url_author_container">
            <img alt={topic} className="avatarItem" src={avatarUrl} />
            <p className="authorItem">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
