import React from 'react'
import BlogCard from '../components/BlogCard'
import { useSelector } from 'react-redux'

const Blog = () => {
    const data = useSelector((state) => state.Blog.Blog)
    const { Blog } = data
    return (
        <>
            <h2 className='text-center fw-bolder display-5 mt-5'>BLOGS</h2>
            <div className="container">
                {
                    Blog.map((blog, index) => (
                        <BlogCard key={index} img={blog.img} title={blog.title} date={blog.date} author={blog.author} summary={blog.summary} />
                    ))
                }
            </div>
        </>
    )
}

export default Blog
