import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import PostsList from "../components/PostsList";

const PostDetail = () => {
  const baseApiUrl = 'http://localhost:3000'

  const { id } = useParams();
  const [post, setPost] = useState(null)
  const navigate = useNavigate()

  const fetchPost = () => {
    axios.get(`${baseApiUrl}/posts/${id}`)
      .then(res => {
        console.log(res.data);
        setPost(res.data)
      })
      .catch(e => {
        console.log('Il post non è satto caricato correttamente: ', e);
      })
  }

  const handleRemovePost = () => {
    axios.delete(`${baseApiUrl}/posts/${id}`)
      .then(res => {
        navigate('/posts')
      })
      .catch(e => {
        console.log(e);
      }
      )
  }

  useEffect(() => {
    fetchPost()
  }, [])


  return (
    <>
      <div className="container my-3">
        <div className="row row-cols-2 d-flex justify-content-center">
          <PostsList />
        </div>
      </div>
    </>
  )
}

export default PostDetail
