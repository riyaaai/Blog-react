
import { useState } from "react"
import blogs  from "../data/Blog.js"
import { Link } from "react-router-dom"






const BlogSection = ({ searchText = " " }) => {
    const [category, setCategory] = useState("All")
    const categories = [
        "All",
        "Technology",
        "Startup",
        "Lifestyle",
        "Finance"
    ]



    const filteredBlogs = blogs.filter((blog) => {

        const categoryMatch = category === "All" || blog.category === category


        const searchMatch = blog.title.toLowerCase().includes(searchText.toLowerCase())


        return categoryMatch && searchMatch
    })





    return (
        <section className="px-10 py-12">


            <div className="flex flex-wrap justify-center gap-4 mb-10">

                {categories.map((item) => (

                    <button
                        key={item}
                        onClick={() => setCategory(item)}
                        className={`px-6 py-2 rounded-full ${category === item
                            ? "text-[#5044E5] text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                    >
                        {item}
                    </button>

                ))}

            </div>




            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

                {filteredBlogs.map((blog) => (

                    <Link
                    to={`/blog/${blog.id }`}
                        key={blog.id}
                        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition block"
                    >

                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-52 object-cover"
                        />

                        <div className="p-5">

                            <span className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                                {blog.category}
                            </span>

                            <h3 className="text-xl font-semibold mt-4 mb-3 text-[#404040]">
                                {blog.title}
                            </h3>


                            <p className="text-[#636363] text-sm leading-6">
                                {blog.description}
                            </p>




                        </div>

                    </Link>

                ))}

                {filteredBlogs.length === 0 && (
                    <p className="text-gray-500 text-center col-span-full">
                        No blogs found.
                    </p>
                )}

            </div>

        </section>
    )
}

export default BlogSection
