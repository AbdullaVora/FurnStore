import React from 'react'

const BlogCard = ({ img, title, date, author, summary }) => {
    return (
        <>
            <div className="blogCard my-5">
                <div className="img d-flex justify-content-center">
                    <img src={img} alt="blog" className='img-fluid mx-auto rounded-4' style={{ height: '700px', width: "100%" }} />
                </div>
                <div className="content">
                    <h4 className="title mt-5 mb-3 fw-bold">{title}</h4>
                    <div className="semiTitle mb-3">
                        <span className='fw-bold opacity-75 text-uppercase' style={{ fontSize: '12px' }}>{date} || </span>
                        <span className='fw-bold opacity-75 text-uppercase' style={{ fontSize: '12px' }}>{author} || </span>
                        <span className='fw-bold opacity-75 text-uppercase' style={{ fontSize: '12px' }}>Comments</span>
                    </div>
                    <p className="opacity-75">{summary}</p>
                </div>
                {/* <button>Read More</button> */}
            </div>
        </>
    )
}

export default BlogCard
