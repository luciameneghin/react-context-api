import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PostsList = () => {
  return (
    <div>
      {post === null ?
        (<h2>Loading...</h2>) : (
          <div>
            <h1 className="text-center fw-bold">{post.title}</h1>
            <img src={post.image} alt={post.title} className="img-fluid mx-auto d-block border border-5 border-dark my-3" />
            <p className="text-justify mt-5"><strong>Contenuto</strong><br />{post.content}</p>
            <p className="text-justify"><strong>Tags: </strong>{post.tags.join(' | ')}</p>
            <div className="d-flex justify-content-between">
              <button className="btn btn-dark text-white"
                onClick={() => navigate(-1)}>
                Pagina precedente
              </button>
              <button className="btn btn-danger text-white"
                onClick={handleRemovePost}>
                <FontAwesomeIcon icon={faTrashAlt} color="white" />
              </button>
            </div>
          </div>

        )
      }
    </div>
  )
}

export default PostsList
