import PostsList from "../components/PostsList";
import { useGLobalContext } from "../../context/GlobalContext";
import { useEffect } from "react";

const PostsPage = () => {
  const { fetchPosts } = useGLobalContext()

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div className="container my-5">
      <h1 className="text-center">Galleria dei POSTS</h1>
      <PostsList />
    </div>
  )
}

export default PostsPage
