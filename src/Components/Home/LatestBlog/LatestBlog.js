import React from 'react';
import './LatestBlog.css'
import blogs1 from '../../../assets/blogs.jpg'
import blogs2 from '../../../assets/blogs.jpg'
import blogs3 from '../../../assets/blogs.jpg'
import BlogCard from '../BlogCard/BlogCard';
import MainBlog from '../../MainBlog/MainBlog';
const LatestBlog = () => {
    const { blogsDatas } = MainBlog();

    return (
        <div className='latest-blog'>
            <h2 className='sention-title'> <p>Alinar</p>LATEST BLOGS</h2>
            <div className='latest-blog-container'>
                {
                    blogsDatas.map(blog => <BlogCard blog={blog} key={blog.id} />)
                }
            </div>
        </div>
    );
};

export default LatestBlog;