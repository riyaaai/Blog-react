import { useParams } from "react-router-dom"
import blogs from "../data/Blog.js"

const BlogDetails = () => {

    const { id } = useParams()

    const blog = blogs.find((item) => item.id === Number(id))

    if (!blog) {
        return <h1>Blog not found</h1>
    }

    return (
        <div className="p-10">

            <img
                src={blog.image}
                alt={blog.title}
                className="w-full  max-w-2xl h-80 object-cover rounded-2xl mx-auto"
            />

            <h1 className="text-3xl font-bold mt-6">
                {blog.title}
            </h1>

            <p className="text-blue-600 mt-3">
                {blog.category}
            </p>

            <p className="mt-4 text-gray-600">
                {blog.description}
            </p>

        </div>
    )
}

export default BlogDetails