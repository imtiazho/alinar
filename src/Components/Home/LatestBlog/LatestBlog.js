import React from 'react';
import './LatestBlog.css'
import BlogCard from '../BlogCard/BlogCard';
const LatestBlog = ({ blogsDatas }) => {
    // const { blogsDatas } = MainBlog();

    return (
        <div className='latest-blog'>
            <h2 className='sention-title'> <p>Alinar</p>LATEST BLOGS</h2>
            <div className='latest-blog-container'>
                {
                    blogsDatas?.map((blog, index) => <BlogCard blog={blog} key={blog.id} index={index} />)
                }
            </div>
        </div>
    );
};

export default LatestBlog;