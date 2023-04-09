// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogItemDetails: {}, isLoading: true}

  componentDidMount() {
    this.getBlogDetails()
  }

  getBlogDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    console.log(response)
    console.log(data)
    const convertedData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
      topic: data.topic,
    }
    // console.log(convertedData)

    this.setState({blogItemDetails: convertedData, isLoading: false})
  }

  render() {
    const {blogItemDetails, isLoading} = this.state
    const {title, topic, imageUrl, avatarUrl, author, content} = blogItemDetails
    return (
      <div className="blog_details_container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div className="container">
            <h1 className="title">{title}</h1>
            <div className="avatar_and_author_container">
              <img className="avatar" alt={topic} src={avatarUrl} />
              <p className="author">{author}</p>
            </div>
            <img className="image" alt={title} src={imageUrl} />
            <p className="content">{content}</p>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
