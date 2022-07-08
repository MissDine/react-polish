import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import data from "./Home";

const BlogDetails= () => {
    const {id} =useParams()
    const {data: blog, error, isPending} = data + id
    return (
        <div className="blog-details">
            {isPending && <div>loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>{blog.author}</p>
                    <div>{blog.body}</div>

                </article>
            )
            }
        </div>
    );
}

export default BlogDetails;