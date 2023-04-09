// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {blogList: [], isLoading: true}

  componentDidMount() {
    this.getBlogList()
  }

  getBlogList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const convertedData = data.map(blog => ({
      id: blog.id,
      title: blog.title,
      imageUrl: blog.image_url,
      avatarUrl: blog.avatar_url,
      author: blog.author,
      topic: blog.topic,
    }))
    console.log(convertedData)
    this.setState({blogList: convertedData, isLoading: false})
  }

  render() {
    const {blogList, isLoading} = this.state
    return (
      <div className="blog_list_container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <ul className="ul_container">
            {blogList.map(item => (
              <BlogItem key={item.id} details={item} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default BlogList
